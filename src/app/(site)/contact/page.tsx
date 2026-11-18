import { EnquiryForm } from "@/components/site/EnquiryForm";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { getCompany } from "@/lib/data";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Sri Sun Solar, Guindy, Chennai",
  description:
    "Contact Sri Sun Solar Energiser Pvt Ltd at D-8/1, T.V.K Industrial Estate, Guindy, Chennai. Call 044-2225 2095 or send an enquiry for a free site survey.",
  path: "/contact",
});

export default async function ContactPage() {
  const company = await getCompany();
  const people = [company.md, company.sales];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact us"
        title="Let's plan your solar plant"
        description="Call, write or send an enquiry. We will arrange a free site survey and a clear estimate."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-pad">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading title="Get in touch" as="h2" />
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="font-sans text-lg font-semibold">{company.name}</h3>
                <address className="mt-2 not-italic text-muted">
                  {company.address}
                </address>
                <p className="mt-3 space-y-1 text-muted">
                  <a href={`tel:${company.phoneTel}`} className="block font-semibold text-navy hover:text-azure">
                    {company.phone}
                  </a>
                  <a href={`mailto:${company.emailInfo}`} className="block hover:text-azure">
                    {company.emailInfo}
                  </a>
                  <a href={`mailto:${company.emailSales}`} className="block hover:text-azure">
                    {company.emailSales}
                  </a>
                </p>
              </div>

              {people.map((person) => (
                <div key={person.email} className="border-t border-line pt-6">
                  <h3 className="font-sans text-lg font-semibold">{person.name}</h3>
                  <p className="text-sm text-muted">{person.role}</p>
                  <p className="mt-2 space-y-1">
                    <a href={`tel:${person.phoneTel}`} className="block font-semibold text-navy hover:text-azure">
                      {person.phone}
                    </a>
                    <a href={`mailto:${person.email}`} className="block text-muted hover:text-azure">
                      {person.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="enquire" className="scroll-mt-24">
            <SectionHeading
              title="Send an enquiry"
              description="Tell us about your home or building and we will call you back."
              className="mb-8"
            />
            <EnquiryForm source="contact" phone={company.phone} />
          </div>
        </div>
      </section>

      <section aria-label="Map" className="bg-sand">
        <div className="container-site py-12">
          <div className="relative aspect-[16/7] min-h-72 overflow-hidden rounded-2xl border border-line bg-white">
            <iframe
              src={company.mapEmbedUrl}
              title="Sri Sun Solar location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
