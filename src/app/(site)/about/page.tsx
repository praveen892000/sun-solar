import { CtaBanner } from "@/components/site/CtaBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { COMPANY } from "@/lib/company";
import { getCompany } from "@/lib/data";
import { OFFERINGS } from "@/lib/site-content";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Sri Sun Solar",
  description:
    "Sri Sun Solar Energiser Pvt Ltd is an MNRE channel partner, TEDA and TNPHC registered company and a REC channel partner for modules, serving Chennai since 2013.",
  path: "/about",
});

export default async function AboutPage() {
  const company = await getCompany();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About us"
        title="Solar built on engineering experience"
        description="Committed to your success, with safety first and clean energy at the heart of everything we install."
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="prose-site">
            <h2>Who we are</h2>
            <p>
              Sri Sun Solar Energiser Pvt Ltd is an MNRE-registered Channel Partner and a TEDA- and
              TNPHC-registered company. We are a channel partner of REC Pte Ltd in India for solar
              modules, and our installers are REC Certified Solar Professionals.
            </p>
            <p>
              We were established in {COMPANY.established} by professionals with 20+ years of industrial
              automation experience, with the aim of raising standards in renewable energy projects.
            </p>
            <h2>Our mission</h2>
            <p>
              Our mission is to deliver premium solar products and services that lower your energy
              costs, reduce your carbon footprint and maximise your return on investment. We
              empower homeowners, businesses and industries to harness clean, renewable energy
              while contributing to a more sustainable environment.
            </p>
          </div>
          <dl className="grid content-start gap-8 border-t-2 border-navy/10 pt-8 lg:border-l-2 lg:border-t-0 lg:pl-10 lg:pt-0">
            <div>
              <dt className="text-sm text-muted">Years of experience</dt>
              <dd className="font-display text-5xl font-semibold text-navy">{company.yearsExperience}+</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Installations</dt>
              <dd className="font-display text-5xl font-semibold text-navy">{company.installations}+</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Established</dt>
              <dd className="font-display text-5xl font-semibold text-navy">{COMPANY.established}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section-pad bg-sand" aria-labelledby="offer-heading">
        <div className="container-site">
          <SectionHeading
            id="offer-heading"
            eyebrow="What we offer"
            title="Everything from survey to commissioning"
          />
          <ul className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {OFFERINGS.map((item) => (
              <li key={item.title} className="border-t-2 border-navy/10 pt-5">
                <h3 className="font-sans text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="credentials-heading">
        <div className="container-site">
          <SectionHeading
            id="credentials-heading"
            eyebrow="Credentials"
            title="Registered and certified"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {COMPANY.credentials.map((credential) => (
              <li key={credential} className="flex items-start gap-3 text-lg text-ink">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-solar" />
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Talk to the team behind your solar plant"
        description="Book a site survey and get a clear design, cost and subsidy estimate."
        primary={{ label: "Enquire now", href: "/contact#enquire" }}
        secondary={{ label: "Our EPC process", href: "/epc" }}
      />
    </>
  );
}
