import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CtaBanner } from "@/components/site/CtaBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { RichContent } from "@/components/site/RichContent";
import { getCatalog, getProduct, getProductSlugs } from "@/lib/data";
import { needsUnoptimized } from "@/lib/images";
import { absoluteUrl, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Product not found", robots: { index: false } };

  return buildMetadata({
    title: product.metaTitle || product.name,
    description:
      product.metaDescription ||
      product.excerpt ||
      `${product.name} supplied and installed by Sri Sun Solar in Chennai.`,
    path: `/products/${product.slug}`,
    image: product.imageUrl,
  });
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const catalog = await getCatalog();
  const related = (
    catalog.find((c) => c.slug === product.categorySlug)?.products ?? []
  ).filter((p) => p.slug !== product.slug);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.excerpt ?? undefined,
    ...(product.brand ? { brand: { "@type": "Brand", name: product.brand } } : {}),
    ...(product.imageUrl ? { image: product.imageUrl } : {}),
    category: product.categoryName,
    url: absoluteUrl(`/products/${product.slug}`),
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
          productJsonLd,
        ]}
      />
      <PageHero
        eyebrow={product.brand ?? product.categoryName}
        title={product.name}
        description={product.excerpt ?? undefined}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      >
        <Link href="/contact#enquire" className="btn btn-primary">
          Request a quote
        </Link>
        <Link href={`/products#${product.categorySlug}`} className="btn btn-outline-light">
          All {product.categoryName.toLowerCase()}
        </Link>
      </PageHero>

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            {product.imageUrl ? (
              <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl bg-sand">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  unoptimized={needsUnoptimized(product.imageUrl)}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
            <RichContent content={product.content} />
          </div>

          <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
            {product.features.length > 0 ? (
              <div>
                <h2 className="font-display text-2xl font-semibold">Key features</h2>
                <ul className="mt-4 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-ink">
                      <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-solar" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {related.length > 0 ? (
              <div>
                <h2 className="font-display text-2xl font-semibold">
                  More in {product.categoryName}
                </h2>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/products/${item.slug}`}
                        className="block py-3 font-medium text-navy hover:text-azure"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <CtaBanner
        title={`Interested in ${product.name}?`}
        description="Our team will confirm the right model and capacity for your site and send a written quote."
        primary={{ label: "Enquire now", href: "/contact#enquire" }}
        secondary={{ label: "Browse all products", href: "/products" }}
      />
    </>
  );
}
