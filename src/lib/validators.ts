import { z } from "zod";
import { toSlug } from "@/lib/api";

// ---------- helpers ----------

/** Optional text: trims, and stores empty/missing as null. */
const optText = z
  .string()
  .trim()
  .nullish()
  .transform((v) => (v ? v : null));

/** Optional slug: slugified when provided, undefined otherwise (auto-generate / keep existing). */
const optSlug = z
  .string()
  .trim()
  .nullish()
  .transform((v) => (v ? toSlug(v) : undefined));

const requiredText = (label: string, max = 20000) =>
  z.string().trim().min(1, `${label} is required`).max(max);

const optDate = z
  .string()
  .nullish()
  .transform((v) => (v ? new Date(v) : undefined))
  .refine((d) => d === undefined || !Number.isNaN(d.getTime()), {
    message: "Invalid date",
  });

const sortOrder = z.coerce.number().int().min(0).max(100000).default(0);

// ---------- public ----------

export const ENQUIRY_STATUSES = ["new", "contacted", "converted", "closed"] as const;

export const enquirySchema = z.object({
  fullName: requiredText("Full name", 120),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s-]{8,18}$/, "Enter a valid phone number"),
  email: z.string().trim().toLowerCase().email("Enter a valid email address").max(200),
  lookingFor: optText,
  ebConsumerNo: optText,
  pincode: z
    .string()
    .trim()
    .nullish()
    .transform((v) => (v ? v : null))
    .refine((v) => v === null || /^\d{6}$/.test(v), {
      message: "Pincode must be 6 digits",
    }),
  message: z
    .string()
    .trim()
    .max(3000)
    .nullish()
    .transform((v) => (v ? v : null)),
  source: z.string().trim().max(60).nullish().transform((v) => v || "website"),
  // Honeypot: real users never fill this in.
  website: z.string().nullish(),
});

// ---------- admin ----------

export const enquiryStatusSchema = z.object({
  id: z.string().min(1),
  status: z.enum(ENQUIRY_STATUSES),
});

export const categorySchema = z.object({
  name: requiredText("Name", 120),
  slug: optSlug,
  description: optText,
  sortOrder,
});

export const blogSchema = z.object({
  title: requiredText("Title", 300),
  slug: optSlug,
  excerpt: optText,
  content: requiredText("Content", 200000),
  coverImage: optText,
  metaTitle: optText,
  metaDescription: optText,
  published: z.boolean().default(true),
  publishedAt: optDate,
});

export const productSchema = z.object({
  name: requiredText("Name", 200),
  slug: optSlug,
  brand: optText,
  excerpt: optText,
  content: requiredText("Content", 200000),
  features: optText,
  imageUrl: optText,
  metaTitle: optText,
  metaDescription: optText,
  published: z.boolean().default(true),
  sortOrder,
  categoryId: requiredText("Category", 100),
});

export const projectSchema = z.object({
  title: requiredText("Title", 300),
  slug: optSlug,
  capacity: optText,
  location: optText,
  type: z.string().trim().min(1).max(60).default("Residential"),
  description: optText,
  imageUrl: optText,
  published: z.boolean().default(true),
  sortOrder,
});

export const testimonialSchema = z.object({
  name: requiredText("Name", 200),
  role: optText,
  quote: requiredText("Quote", 5000),
  rating: z.coerce.number().int().min(1).max(5).default(5),
  published: z.boolean().default(true),
  sortOrder,
});

export const pageSchema = z.object({
  title: requiredText("Title", 300),
  excerpt: optText,
  content: requiredText("Content", 200000),
  metaTitle: optText,
  metaDescription: optText,
  published: z.boolean().default(true),
});

export const settingsSchema = z.object({
  companyName: requiredText("Company name", 200),
  tagline: requiredText("Tagline", 300),
  address: requiredText("Address", 500),
  phone: requiredText("Phone", 60),
  emailSales: requiredText("Sales email", 200),
  emailInfo: requiredText("Info email", 200),
  emailAdmin: requiredText("Admin email", 200),
  contactMdName: requiredText("MD name", 200),
  contactMdPhone: requiredText("MD phone", 60),
  contactMdEmail: requiredText("MD email", 200),
  contactSalesName: requiredText("Sales contact name", 200),
  contactSalesPhone: requiredText("Sales contact phone", 60),
  contactSalesEmail: requiredText("Sales contact email", 200),
  mapEmbedUrl: requiredText("Map embed URL", 1000),
  logoUrl: optText,
  facebookUrl: optText,
  youtubeUrl: optText,
  instagramUrl: optText,
  yearsExperience: z.coerce.number().int().min(0).max(200),
  installations: z.coerce.number().int().min(0).max(1000000),
  metaTitle: requiredText("Meta title", 300),
  metaDescription: requiredText("Meta description", 600),
  metaKeywords: requiredText("Meta keywords", 1000),
  googleAnalytics: optText,
});

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});
