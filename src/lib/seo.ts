import type { Metadata } from "next";
import { COMPANY } from "@/lib/company";

const DEFAULT_SITE_URL = "https://srisunsolar.com";

/** Canonical site origin without trailing slash. */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.RENDER_EXTERNAL_URL?.trim() ||
    DEFAULT_SITE_URL;
  return raw.replace(/\/+$/, "");
}

/** Build an absolute URL for a site path. */
export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalized === "/" ? "" : normalized}`;
}

export type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is without the "| Sri Sun Solar" template suffix. */
  absoluteTitle?: boolean;
  image?: string | null;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

/** Page-level metadata with canonical, Open Graph and Twitter tags. */
export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image,
  type = "website",
  publishedTime,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} | ${COMPANY.shortName}`;
  const images = image ? [{ url: image, alt: title }] : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: COMPANY.name,
      locale: "en_IN",
      title: fullTitle,
      description,
      images,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}

export type JsonLdObject = Record<string, unknown>;

const sameAs = (): string[] =>
  Object.values(COMPANY.social).filter((v): v is string => Boolean(v));

export function organizationJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${getSiteUrl()}/#organization`,
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: getSiteUrl(),
    logo: COMPANY.logoUrl,
    slogan: COMPANY.tagline,
    foundingDate: String(COMPANY.established),
    description: COMPANY.blurb,
    email: COMPANY.emails.info,
    telephone: COMPANY.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.line1,
      addressLocality: COMPANY.address.locality,
      addressRegion: COMPANY.address.region,
      addressCountry: COMPANY.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: COMPANY.contacts.sales.phoneTel,
        email: COMPANY.emails.sales,
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: COMPANY.phoneTel,
        email: COMPANY.emails.info,
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
    ],
    ...(sameAs().length > 0 ? { sameAs: sameAs() } : {}),
  };
}

export function localBusinessJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${getSiteUrl()}/#localbusiness`,
    name: COMPANY.name,
    description:
      "Rooftop solar installation, EPC, operation and maintenance, and PM Surya Ghar subsidy assistance in Chennai and across Tamil Nadu.",
    url: getSiteUrl(),
    image: COMPANY.logoUrl,
    logo: COMPANY.logoUrl,
    telephone: COMPANY.phoneTel,
    email: COMPANY.emails.info,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.line1,
      addressLocality: COMPANY.address.locality,
      addressRegion: COMPANY.address.region,
      addressCountry: COMPANY.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    hasMap: COMPANY.mapLink,
    areaServed: { "@type": "State", name: "Tamil Nadu" },
    parentOrganization: { "@id": `${getSiteUrl()}/#organization` },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  image?: string | null;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    mainEntityOfPage: absoluteUrl(input.path),
    ...(input.image ? { image: input.image } : {}),
    author: { "@id": `${getSiteUrl()}/#organization` },
    publisher: { "@id": `${getSiteUrl()}/#organization` },
  };
}
