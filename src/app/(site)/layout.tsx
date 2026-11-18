import type { ReactNode } from "react";
import { Footer } from "@/components/site/Footer";
import { Header, type ProductMenuCategory } from "@/components/site/Header";
import { JsonLd } from "@/components/site/JsonLd";
import { MobileActionBar } from "@/components/site/MobileActionBar";
import { COMPANY } from "@/lib/company";
import { getCatalog, getCompany } from "@/lib/data";
import { localBusinessJsonLd, organizationJsonLd } from "@/lib/seo";

export default async function SiteLayout({ children }: { children: ReactNode }) {
  const [company, catalog] = await Promise.all([getCompany(), getCatalog()]);

  const productMenu: ProductMenuCategory[] = catalog.map((c) => ({
    name: c.name,
    slug: c.slug,
    items: c.products.map((p) => ({ name: p.name, slug: p.slug })),
  }));

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header logoUrl={company.logoUrl} productMenu={productMenu} />
      <main id="main" className="flex-1 pb-16 lg:pb-0">
        {children}
      </main>
      <Footer company={company} />
      <MobileActionBar phoneTel={company.phoneTel} mapLink={COMPANY.mapLink} />
      <JsonLd data={[organizationJsonLd(), localBusinessJsonLd()]} />
    </>
  );
}
