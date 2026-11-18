import { PageHero } from "@/components/site/PageHero";
import { RichContent } from "@/components/site/RichContent";
import { getCmsPage } from "@/lib/data";
import { LEGAL_UPDATED, PRIVACY_HTML } from "@/lib/legal-content";
import { buildMetadata } from "@/lib/seo";

const DESCRIPTION =
  "How Sri Sun Solar Energiser Pvt Ltd collects, uses and protects your personal data under the DPDP Act, 2023.";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: DESCRIPTION,
  path: "/privacy-policy",
});

export default async function PrivacyPolicyPage() {
  const cms = await getCmsPage("privacy-policy");

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={cms?.title ?? "Privacy Policy"}
        description={cms ? undefined : `Last updated ${LEGAL_UPDATED}`}
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <section className="section-pad">
        <div className="container-site">
          <RichContent
            className="mx-auto max-w-3xl"
            content={cms?.content ?? PRIVACY_HTML}
          />
        </div>
      </section>
    </>
  );
}
