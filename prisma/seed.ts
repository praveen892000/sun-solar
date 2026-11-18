import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { categories, products } from "./seed-data/products";
import { posts } from "./seed-data/blog";
import { pages } from "./seed-data/pages";

const prisma = new PrismaClient();

const GALLERY_BASE = "https://srisunsolar.com/wp-content/uploads/2023/09";

// ---------------------------------------------------------------- settings
const siteSettings = {
  companyName: "Sri Sun Solar Energiser Pvt Ltd",
  tagline: "Harvest energy in all seasons",
  address: "D-8/1, T.V.K Industrial Estate, Guindy, Chennai",
  phone: "044-2225 2095",
  emailSales: "sales@srisunsolar.com",
  emailInfo: "info@srisunsolar.com",
  emailAdmin: "admin@srisunsolar.com",
  contactMdName: "Mr. Gokul Raj Narayanan",
  contactMdPhone: "+91 99620 01332",
  contactMdEmail: "gokulraj@srisunsolar.in",
  contactSalesName: "Mr. Mani",
  contactSalesPhone: "+91 99620 01334",
  contactSalesEmail: "sales@srisunsolar.in",
  mapEmbedUrl: "https://www.google.com/maps?q=13.012283,80.207061&z=16&output=embed",
  logoUrl: "https://srisunsolar.com/wp-content/uploads/2022/08/sunsolarlogo.png",
  // The live site's social links were all "#" placeholders - add real URLs in Admin > Settings.
  facebookUrl: null,
  youtubeUrl: null,
  instagramUrl: null,
  yearsExperience: 12,
  installations: 500,
  metaTitle:
    "Solar Rooftop Installation in Chennai | PM Surya Ghar Subsidy | Sri Sun Solar",
  metaDescription:
    "Sri Sun Solar Energiser Pvt Ltd - MNRE channel partner & REC partner in Guindy, Chennai. Rooftop solar, EPC, PM Surya Ghar subsidy up to ₹78,000, 25-year warranty. Call 044-2225 2095.",
  metaKeywords:
    "solar rooftop Chennai, solar panel installation Chennai, PM Surya Ghar subsidy Tamil Nadu, solar EPC Chennai, REC solar panels, on-grid solar system, solar company Guindy, TANGEDCO net metering, solar subsidy Tamil Nadu, Sri Sun Solar",
  googleAnalytics: null,
};

// ---------------------------------------------------------------- projects
// Gallery "SUBSIDY PROJECTS" captions, with spelling and capitalisation corrected.
const projects = [
  { title: "3 kWp Solar PV System at Mandaveli", capacity: "3 kWp", location: "Mandaveli, Chennai" },
  { title: "6 kWp Solar PV System at Korattur Villa", capacity: "6 kWp", location: "Korattur, Chennai" },
  { title: "3 kWp and 4 kWp On-Grid Solar PV Systems at East Tambaram", capacity: "3 kWp + 4 kWp", location: "East Tambaram, Chennai" },
  { title: "8 kWp On-Grid Solar PV System at Mantri Villa, Akkarai", capacity: "8 kWp", location: "Akkarai, Chennai" },
  { title: "3 kWp Solar PV System at Chintadripet", capacity: "3 kWp", location: "Chintadripet, Chennai" },
  { title: "3 kWp Solar PV System at Pallikaranai", capacity: "3 kWp", location: "Pallikaranai, Chennai" },
  { title: "5 kWp Solar PV System at Retteri Villa", capacity: "5 kWp", location: "Retteri, Chennai" },
  { title: "5 kWp Solar PV System at C.I.T. Nagar, Chennai", capacity: "5 kWp", location: "C.I.T. Nagar, Chennai" },
  { title: "12 kWp Solar PV System at ABN Home", capacity: "12 kWp", location: "Chennai" },
  { title: "5 kWp Solar PV System at Virugambakkam", capacity: "5 kWp", location: "Virugambakkam, Chennai" },
  { title: "Residential Rooftop Solar PV System, Chennai", capacity: null, location: "Chennai" },
].map((p, i) => ({
  ...p,
  slug: p.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, ""),
  type: "Residential",
  description: `Residential rooftop solar installation completed by Sri Sun Solar under the subsidy programme${p.location ? ` at ${p.location}` : ""}.`,
  imageUrl: `${GALLERY_BASE}/gallery${i + 1}.jpg`,
  sortOrder: i + 1,
}));

// ------------------------------------------------------------ testimonials
// ZingBox template text removed; grammar corrected. Entries with no captured quote are omitted.
const testimonials = [
  {
    name: "Mr. & Mrs. Ramachandran",
    role: "Residential customer, 2 kWp on-grid system",
    quote:
      "I had enquired with Sri Sun Solar Energiser for a 2 kWp on-grid solar system for our home. Mr. Gokul explained the application process and helped us from application through getting the on-grid EB meter. The system was installed properly and is working well. Thank you, Gokul.",
  },
  {
    name: "Natarajan Kanniappan",
    role: "Residential customer, on-grid with subsidy",
    quote:
      "It was a great experience, starting from pre-sales engagement with the team. The MD, Mr. Gokul, was present during the installation, which included earthing, wiring and the actual erection of the solar panels. The team was very professional and ensured end-to-end safety. After installation, the production has been very good, and the team has supported me from quotation to sales and after-sales as well. It was an on-grid system with subsidy, and the team helped me through the entire TANGEDCO process. It was a great experience interacting with such a professional team. Thanks to Mr. Gokul and his team. All the best for the new projects to come.",
  },
  {
    name: "Priya Kesavan",
    role: "Mandaveli, Chennai",
    quote:
      "Prompt and professional service when it comes to solar energy solutions. Kudos to Mr. Gokul and his team.",
  },
  {
    name: "MOBone by Palm Paw Foods",
    role: "Business customer",
    quote: "A worthy investment and great customer service.",
  },
  {
    name: "Praveen Kumar Narayanan",
    role: "Residential customer",
    quote: "So far so good. Nice turnover.",
  },
];

// -------------------------------------------------------------------- main
async function main() {
  console.log("Seeding database...");

  // Admin ------------------------------------------------------------------
  const adminEmail = (process.env.SEED_ADMIN_EMAIL ?? "admin@srisunsolar.com").toLowerCase();
  const adminPassword = process.env.SEED_ADMIN_PASSWORD ?? "Admin@12345";
  const adminName = process.env.SEED_ADMIN_NAME ?? "Site Admin";
  const existingAdmin = await prisma.admin.findUnique({ where: { email: adminEmail } });
  if (existingAdmin) {
    // Keep an already-changed password; just refresh the display name.
    await prisma.admin.update({ where: { email: adminEmail }, data: { name: adminName } });
    console.log(`  admin: ${adminEmail} (already exists, password unchanged)`);
  } else {
    await prisma.admin.create({
      data: {
        email: adminEmail,
        name: adminName,
        passwordHash: await bcrypt.hash(adminPassword, 12),
      },
    });
    console.log(`  admin: ${adminEmail} created`);
  }

  // Site settings ----------------------------------------------------------
  await prisma.siteSetting.upsert({
    where: { id: "main" },
    update: siteSettings,
    create: { id: "main", ...siteSettings },
  });
  console.log("  site settings: ok");

  // Categories -------------------------------------------------------------
  const categoryIds = new Map<string, string>();
  for (const [i, c] of categories.entries()) {
    const row = await prisma.productCategory.upsert({
      where: { slug: c.slug },
      update: { name: c.name, description: c.description, sortOrder: i + 1 },
      create: { slug: c.slug, name: c.name, description: c.description, sortOrder: i + 1 },
    });
    categoryIds.set(c.slug, row.id);
  }
  console.log(`  categories: ${categories.length}`);

  // Products ---------------------------------------------------------------
  for (const [i, p] of products.entries()) {
    const categoryId = categoryIds.get(p.category);
    if (!categoryId) throw new Error(`Unknown category slug: ${p.category}`);
    const data = {
      name: p.name,
      brand: p.brand,
      excerpt: p.excerpt,
      content: p.content,
      features: p.features.join("\n"),
      metaTitle: p.metaTitle,
      metaDescription: p.metaDescription,
      published: true,
      sortOrder: i + 1,
      categoryId,
    };
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: data,
      create: { slug: p.slug, ...data },
    });
  }
  console.log(`  products: ${products.length}`);

  // Projects ---------------------------------------------------------------
  for (const p of projects) {
    const { slug, ...data } = p;
    await prisma.project.upsert({
      where: { slug },
      update: { ...data, published: true },
      create: { slug, ...data, published: true },
    });
  }
  console.log(`  projects: ${projects.length}`);

  // Testimonials -----------------------------------------------------------
  for (const [i, t] of testimonials.entries()) {
    const existing = await prisma.testimonial.findFirst({ where: { name: t.name } });
    const data = { ...t, rating: 5, published: true, sortOrder: i + 1 };
    if (existing) await prisma.testimonial.update({ where: { id: existing.id }, data });
    else await prisma.testimonial.create({ data });
  }
  console.log(`  testimonials: ${testimonials.length}`);

  // Blog posts -------------------------------------------------------------
  for (const post of posts) {
    const { slug, publishedAt, ...rest } = post;
    const data = { ...rest, published: true, publishedAt: new Date(publishedAt) };
    await prisma.blogPost.upsert({
      where: { slug },
      update: data,
      create: { slug, ...data },
    });
  }
  console.log(`  blog posts: ${posts.length}`);

  // Pages ------------------------------------------------------------------
  for (const page of pages) {
    const { slug, ...data } = page;
    await prisma.page.upsert({
      where: { slug },
      update: { ...data, published: true },
      create: { slug, ...data, published: true },
    });
  }
  console.log(`  pages: ${pages.length}`);

  console.log("Seed complete.");
}

main()
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
