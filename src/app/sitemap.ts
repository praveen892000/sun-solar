import type { MetadataRoute } from "next";
import { getBlogPosts, getCatalog } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.7 },
  { path: "/epc", priority: 0.7 },
  { path: "/subsidy", priority: 0.9 },
  { path: "/products", priority: 0.8 },
  { path: "/projects", priority: 0.7 },
  { path: "/gallery", priority: 0.6 },
  { path: "/blog", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/faq", priority: 0.7 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [catalog, posts] = await Promise.all([getCatalog(), getBlogPosts()]);

  const products = catalog.flatMap((c) => c.products);

  return [
    ...STATIC_ROUTES.map(({ path, priority }) => ({
      url: absoluteUrl(path),
      priority,
    })),
    ...products.map((p) => ({
      url: absoluteUrl(`/products/${p.slug}`),
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.publishedAt,
      priority: 0.5,
    })),
  ];
}
