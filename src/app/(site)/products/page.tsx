import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBanner } from "@/components/site/CtaBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { getCatalog } from "@/lib/data";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solar Products: Panels, Inverters, Batteries and More",
  description:
    "Solar panels from REC, Novasys and Navitas; inverters from Growatt, K-Solar and Fronius; plus batteries, water heaters, pumps and appliances, supplied and installed by Sri Sun Solar.",
  path: "/products",
});

export default async function ProductsPage() {
  const catalog = await getCatalog();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      <PageHero
        eyebrow="Products"
        title="Trusted brands, chosen for your roof"
        description="We supply and install panels, inverters and more from leading manufacturers, and recommend the right combination for your site and budget."
        breadcrumbs={[{ label: "Products" }]}
      />

      {catalog.map((category, index) => (
        <section
          key={category.slug}
          id={category.slug}
          aria-labelledby={`${category.slug}-heading`}
          className={`section-pad scroll-mt-20 ${index % 2 === 1 ? "bg-sand" : ""}`}
        >
          <div className="container-site">
            <div className="max-w-2xl">
              <h2 id={`${category.slug}-heading`} className="font-display text-3xl font-semibold">
                {category.name}
              </h2>
              {category.description ? (
                <p className="mt-3 text-lg text-muted">{category.description}</p>
              ) : null}
            </div>
            <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {category.products.map((product) => (
                <li key={product.slug} className="border-t-2 border-solar pt-5">
                  {product.brand ? (
                    <p className="eyebrow mb-2">{product.brand}</p>
                  ) : null}
                  <h3 className="font-sans text-xl font-semibold">
                    <Link
                      href={`/products/${product.slug}`}
                      className="hover:text-azure"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  {product.excerpt ? (
                    <p className="mt-2 text-muted">{product.excerpt}</p>
                  ) : null}
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 font-semibold text-azure hover:text-solar-deep"
                  >
                    View details <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CtaBanner
        title="Not sure which products suit you?"
        description="Tell us about your roof and consumption. We will recommend a system and give you a written quote."
        primary={{ label: "Get a recommendation", href: "/contact#enquire" }}
        secondary={{ label: "Subsidy rates", href: "/subsidy" }}
      />
    </>
  );
}
