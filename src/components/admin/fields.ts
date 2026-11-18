import type { FieldDef } from "@/components/admin/ResourceForm";

export const blogFields: FieldDef[] = [
  { name: "title", label: "Title", required: true },
  { name: "slug", label: "Slug", half: true, help: "Leave blank to generate from the title." },
  { name: "publishedAt", label: "Publish date", type: "date", half: true },
  { name: "excerpt", label: "Excerpt", type: "textarea", rows: 3 },
  { name: "content", label: "Content (HTML)", type: "textarea", rows: 18, required: true, mono: true, help: "HTML is supported (h2, p, ul, table, a…)." },
  { name: "coverImage", label: "Cover image URL", help: "Absolute URL or a path under /public." },
  { name: "metaTitle", label: "SEO title", section: "SEO", half: true },
  { name: "metaDescription", label: "SEO description", type: "textarea", rows: 2 },
  { name: "published", label: "Published", type: "checkbox" },
];

export const productFields = (
  categories: { id: string; name: string }[],
): FieldDef[] => [
  { name: "name", label: "Product name", required: true, half: true },
  { name: "slug", label: "Slug", half: true, help: "Leave blank to generate from the name." },
  {
    name: "categoryId",
    label: "Category",
    type: "select",
    required: true,
    half: true,
    options: categories.map((c) => ({ value: c.id, label: c.name })),
  },
  { name: "brand", label: "Brand", half: true },
  { name: "excerpt", label: "Short description", type: "textarea", rows: 2 },
  { name: "content", label: "Description (HTML)", type: "textarea", rows: 14, required: true, mono: true },
  { name: "features", label: "Key features", type: "textarea", rows: 6, help: "One feature per line." },
  { name: "imageUrl", label: "Image URL" },
  { name: "sortOrder", label: "Sort order", type: "number", half: true },
  { name: "metaTitle", label: "SEO title", section: "SEO", half: true },
  { name: "metaDescription", label: "SEO description", type: "textarea", rows: 2 },
  { name: "published", label: "Published", type: "checkbox" },
];

export const categoryFields: FieldDef[] = [
  { name: "name", label: "Name", required: true, half: true },
  { name: "slug", label: "Slug", half: true, help: "Optional." },
  { name: "description", label: "Description", type: "textarea", rows: 2 },
  { name: "sortOrder", label: "Sort order", type: "number", half: true },
];

export const projectFields: FieldDef[] = [
  { name: "title", label: "Title", required: true },
  { name: "slug", label: "Slug", half: true, help: "Leave blank to generate from the title." },
  {
    name: "type",
    label: "Type",
    type: "select",
    required: true,
    half: true,
    options: ["Residential", "Commercial", "Industrial"].map((v) => ({ value: v, label: v })),
  },
  { name: "capacity", label: "Capacity", half: true, placeholder: "e.g. 3 kWp" },
  { name: "location", label: "Location", half: true },
  { name: "description", label: "Description", type: "textarea", rows: 4 },
  { name: "imageUrl", label: "Image URL" },
  { name: "sortOrder", label: "Sort order", type: "number", half: true },
  { name: "published", label: "Published", type: "checkbox" },
];

export const testimonialFields: FieldDef[] = [
  { name: "name", label: "Customer name", required: true, half: true },
  { name: "role", label: "Role / location", half: true },
  { name: "quote", label: "Quote", type: "textarea", rows: 6, required: true },
  {
    name: "rating",
    label: "Rating",
    type: "select",
    required: true,
    half: true,
    options: [5, 4, 3, 2, 1].map((n) => ({ value: String(n), label: `${n} / 5` })),
  },
  { name: "sortOrder", label: "Sort order", type: "number", half: true },
  { name: "published", label: "Published", type: "checkbox" },
];

export const pageFields: FieldDef[] = [
  { name: "title", label: "Title", required: true },
  { name: "excerpt", label: "Excerpt", type: "textarea", rows: 2 },
  { name: "content", label: "Content (HTML)", type: "textarea", rows: 24, required: true, mono: true },
  { name: "metaTitle", label: "SEO title", section: "SEO", half: true },
  { name: "metaDescription", label: "SEO description", type: "textarea", rows: 2 },
  { name: "published", label: "Published", type: "checkbox" },
];

export const settingsFields: FieldDef[] = [
  { name: "companyName", label: "Company name", required: true, section: "Company", half: true },
  { name: "tagline", label: "Tagline", required: true, half: true },
  { name: "address", label: "Address", required: true },
  { name: "phone", label: "Office phone", required: true, half: true },
  { name: "logoUrl", label: "Logo URL", half: true },
  { name: "yearsExperience", label: "Years of experience", type: "number", half: true },
  { name: "installations", label: "Installations (count)", type: "number", half: true },

  { name: "emailSales", label: "Sales email", type: "email", required: true, section: "Emails", half: true },
  { name: "emailInfo", label: "Info email", type: "email", required: true, half: true },
  { name: "emailAdmin", label: "Admin / privacy email", type: "email", required: true, half: true },

  { name: "contactMdName", label: "MD name", required: true, section: "Key contacts", half: true },
  { name: "contactMdPhone", label: "MD phone", required: true, half: true },
  { name: "contactMdEmail", label: "MD email", type: "email", required: true, half: true },
  { name: "contactSalesName", label: "Sales contact name", required: true, half: true },
  { name: "contactSalesPhone", label: "Sales contact phone", required: true, half: true },
  { name: "contactSalesEmail", label: "Sales contact email", type: "email", required: true, half: true },

  { name: "mapEmbedUrl", label: "Google Maps embed URL", required: true, section: "Map & social" },
  { name: "facebookUrl", label: "Facebook URL", half: true },
  { name: "youtubeUrl", label: "YouTube URL", half: true },
  { name: "instagramUrl", label: "Instagram URL", half: true },

  { name: "metaTitle", label: "Default SEO title", required: true, section: "SEO & analytics" },
  { name: "metaDescription", label: "Default SEO description", type: "textarea", rows: 3, required: true },
  { name: "metaKeywords", label: "SEO keywords", type: "textarea", rows: 2, required: true, help: "Comma separated." },
  { name: "googleAnalytics", label: "Google Analytics ID", placeholder: "G-XXXXXXXXXX" },
];
