import { PageHero } from "@/components/site/PageHero";
import { RichContent } from "@/components/site/RichContent";
import { getCmsPage } from "@/lib/data";
import { LEGAL_UPDATED, TERMS_HTML } from "@/lib/legal-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description:
    "Terms and conditions for using the Sri Sun Solar Energiser Pvt Ltd website and requesting quotations.",
  path: "/terms",
});

export default async function TermsPage() {
  const cms = await getCmsPage("terms");

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={cms?.title ?? "Terms and Conditions"}
        description={cms ? undefined : `Last updated ${LEGAL_UPDATED}`}
        breadcrumbs={[{ label: "Terms and Conditions" }]}
      />
      <section className="section-pad">
        <div className="container-site">
          <RichContent
            className="mx-auto max-w-3xl"
            content={cms?.content ?? TERMS_HTML}
          />
        </div>
      </section>
    </>
  );
}
