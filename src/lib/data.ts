/**
 * Server-side data access for the public site.
 *
 * Every reader is cached (Cache Components) and wrapped in try/catch so the site
 * keeps rendering from COMPANY constants and static fallbacks when the database
 * is unreachable or empty. Cache tags allow on-demand revalidation from the admin.
 */
import { cacheLife, cacheTag } from "next/cache";
import { prisma } from "@/lib/prisma";
import { COMPANY } from "@/lib/company";
import {
  FALLBACK_CATALOG,
  allFallbackProducts,
  type CatalogCategory,
  type CatalogProduct,
} from "@/lib/fallback-catalog";
import { FALLBACK_BLOG, type BlogPostView } from "@/lib/fallback-blog";
import {
  FALLBACK_TESTIMONIALS,
  GALLERY,
  type TestimonialItem,
} from "@/lib/site-content";

export type { CatalogCategory, CatalogProduct, BlogPostView, TestimonialItem };

// ---------- company ----------

export type ContactPerson = {
  name: string;
  role: string;
  phone: string;
  phoneTel: string;
  email: string;
};

export type CompanyInfo = {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  phoneTel: string;
  emailSales: string;
  emailInfo: string;
  emailAdmin: string;
  md: ContactPerson;
  sales: ContactPerson;
  mapEmbedUrl: string;
  logoUrl: string;
  yearsExperience: number;
  installations: number;
  social: { facebook: string | null; youtube: string | null; instagram: string | null };
};

/** Convert a display phone number into a tel: friendly +91 form. */
function toTel(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("91") && digits.length >= 12) return `+${digits}`;
  return `+91${digits.replace(/^0+/, "")}`;
}

function companyFromConstants(): CompanyInfo {
  return {
    name: COMPANY.name,
    tagline: COMPANY.tagline,
    address: COMPANY.address.full,
    phone: COMPANY.phone,
    phoneTel: COMPANY.phoneTel,
    emailSales: COMPANY.emails.sales,
    emailInfo: COMPANY.emails.info,
    emailAdmin: COMPANY.emails.admin,
    md: { ...COMPANY.contacts.md },
    sales: { ...COMPANY.contacts.sales },
    mapEmbedUrl: COMPANY.mapEmbedUrl,
    logoUrl: COMPANY.logoUrl,
    yearsExperience: COMPANY.yearsExperience,
    installations: COMPANY.installations,
    social: { ...COMPANY.social },
  };
}

export async function getCompany(): Promise<CompanyInfo> {
  "use cache";
  cacheLife("minutes");
  cacheTag("settings");
  try {
    const s = await prisma.siteSetting.findUnique({ where: { id: "main" } });
    if (s) {
      return {
        name: s.companyName,
        tagline: s.tagline,
        address: s.address,
        phone: s.phone,
        phoneTel: toTel(s.phone),
        emailSales: s.emailSales,
        emailInfo: s.emailInfo,
        emailAdmin: s.emailAdmin,
        md: {
          name: s.contactMdName,
          role: COMPANY.contacts.md.role,
          phone: s.contactMdPhone,
          phoneTel: toTel(s.contactMdPhone),
          email: s.contactMdEmail,
        },
        sales: {
          name: s.contactSalesName,
          role: COMPANY.contacts.sales.role,
          phone: s.contactSalesPhone,
          phoneTel: toTel(s.contactSalesPhone),
          email: s.contactSalesEmail,
        },
        mapEmbedUrl: s.mapEmbedUrl,
        logoUrl: s.logoUrl || COMPANY.logoUrl,
        yearsExperience: s.yearsExperience,
        installations: s.installations,
        social: {
          facebook: s.facebookUrl,
          youtube: s.youtubeUrl,
          instagram: s.instagramUrl,
        },
      };
    }
  } catch (error) {
    console.error("[data] getCompany failed, using constants", error);
  }
  return companyFromConstants();
}

// ---------- testimonials ----------

export async function getTestimonials(): Promise<TestimonialItem[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("testimonials");
  try {
    const rows = await prisma.testimonial.findMany({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });
    if (rows.length > 0) {
      return rows.map((r) => ({
        id: r.id,
        name: r.name,
        role: r.role,
        quote: r.quote,
        rating: r.rating,
      }));
    }
  } catch (error) {
    console.error("[data] getTestimonials failed, using fallback", error);
  }
  return FALLBACK_TESTIMONIALS;
}

// ---------- projects ----------

export type ProjectView = {
  id: string;
  title: string;
  capacity: string | null;
  location: string | null;
  type: string;
  description: string | null;
  imageUrl: string | null;
};

const FALLBACK_PROJECTS: ProjectView[] = GALLERY.map((g) => ({
  id: `gallery-${g.id}`,
  title: g.caption,
  capacity: g.capacity,
  location: g.location,
  type: "Residential",
  description: null,
  imageUrl: g.src,
}));

export async function getProjects(): Promise<ProjectView[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("projects");
  try {
    const rows = await prisma.project.findMany({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });
    if (rows.length > 0) {
      return rows.map((r) => ({
        id: r.id,
        title: r.title,
        capacity: r.capacity,
        location: r.location,
        type: r.type,
        description: r.description,
        imageUrl: r.imageUrl,
      }));
    }
  } catch (error) {
    console.error("[data] getProjects failed, using fallback", error);
  }
  return FALLBACK_PROJECTS;
}

// ---------- products ----------

export function splitFeatures(raw: string | null | undefined): string[] {
  return (raw ?? "")
    .split(/\r?\n/)
    .map((line) => line.replace(/^[-*\u2022]\s*/, "").trim())
    .filter(Boolean);
}

/** Categories with their published products. Falls back to the static catalogue. */
export async function getCatalog(): Promise<CatalogCategory[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("products");
  try {
    const categories = await prisma.productCategory.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      include: {
        products: {
          where: { published: true },
          orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
        },
      },
    });
    const mapped: CatalogCategory[] = categories
      .map((c) => ({
        slug: c.slug,
        name: c.name,
        description: c.description,
        products: c.products.map((p) => ({
          slug: p.slug,
          name: p.name,
          brand: p.brand,
          excerpt: p.excerpt,
          content: p.content,
          features: splitFeatures(p.features),
          imageUrl: p.imageUrl,
          metaTitle: p.metaTitle,
          metaDescription: p.metaDescription,
          categorySlug: c.slug,
          categoryName: c.name,
        })),
      }))
      .filter((c) => c.products.length > 0);
    if (mapped.length > 0) return mapped;
  } catch (error) {
    console.error("[data] getCatalog failed, using fallback", error);
  }
  return FALLBACK_CATALOG;
}

/** Legacy URLs (/products/rec etc.) must keep resolving, so fall back to the static catalogue. */
export async function getProduct(slug: string): Promise<CatalogProduct | null> {
  const catalog = await getCatalog();
  const fromCatalog = catalog.flatMap((c) => c.products).find((p) => p.slug === slug);
  if (fromCatalog) return fromCatalog;
  return allFallbackProducts().find((p) => p.slug === slug) ?? null;
}

export async function getProductSlugs(): Promise<string[]> {
  const catalog = await getCatalog();
  const slugs = new Set([
    ...catalog.flatMap((c) => c.products.map((p) => p.slug)),
    ...allFallbackProducts().map((p) => p.slug),
  ]);
  return [...slugs];
}

// ---------- blog ----------

export async function getBlogPosts(): Promise<BlogPostView[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("blog");
  try {
    const rows = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
    });
    if (rows.length > 0) {
      return rows.map((r) => ({
        slug: r.slug,
        title: r.title,
        excerpt: r.excerpt,
        content: r.content,
        coverImage: r.coverImage,
        metaTitle: r.metaTitle,
        metaDescription: r.metaDescription,
        publishedAt: r.publishedAt,
      }));
    }
  } catch (error) {
    console.error("[data] getBlogPosts failed, using fallback", error);
  }
  return FALLBACK_BLOG;
}

export async function getBlogPost(slug: string): Promise<BlogPostView | null> {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

// ---------- CMS pages (privacy, terms) ----------

export type CmsPage = {
  title: string;
  content: string;
  metaTitle: string | null;
  metaDescription: string | null;
};

export async function getCmsPage(slug: string): Promise<CmsPage | null> {
  "use cache";
  cacheLife("minutes");
  cacheTag("pages");
  try {
    const row = await prisma.page.findUnique({ where: { slug } });
    if (row && row.published) {
      return {
        title: row.title,
        content: row.content,
        metaTitle: row.metaTitle,
        metaDescription: row.metaDescription,
      };
    }
  } catch (error) {
    console.error(`[data] getCmsPage(${slug}) failed, using fallback`, error);
  }
  return null;
}

/** Locale-stable date formatting (avoids server/client mismatches). */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(date);
}
