import Link from "next/link";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SUBSIDY, formatInr } from "@/lib/company";
import { getCompany } from "@/lib/data";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "PM Surya Ghar Subsidy in Tamil Nadu: up to ₹78,000",
  description:
    "Central subsidy of ₹30,000 for 1 kW, ₹60,000 for 2 kW and ₹78,000 for 3 kW and above under PM Surya Ghar Muft Bijli Yojana. Sri Sun Solar handles the full process.",
  path: "/subsidy",
});

const STEPS = [
  {
    title: "Register and apply",
    body: `Register on ${SUBSIDY.portal.replace("https://", "")} and choose a rooftop solar vendor. We assist with every form.`,
  },
  {
    title: "TANGEDCO feasibility",
    body: "We apply for feasibility approval for your connection so installation can begin.",
  },
  {
    title: "Install and net meter",
    body: "Our team installs the system and coordinates the net meter and commissioning.",
  },
  {
    title: "Subsidy credited",
    body: "After commissioning, the subsidy is credited to your bank account in about 30 days.",
  },
];

export default async function SubsidyPage() {
  const company = await getCompany();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Subsidy", path: "/subsidy" },
        ])}
      />
      <PageHero
        eyebrow="PM Surya Ghar Muft Bijli Yojana"
        title={`Solar subsidy for homes: up to ${formatInr(SUBSIDY.cap)}`}
        description="Generate your own power and cut your electricity bill. Avail 3 kW and get central assistance of up to ₹78,000."
        breadcrumbs={[{ label: "Subsidy" }]}
      >
        <Link href="#enquire" className="btn btn-primary">
          Check my eligibility
        </Link>
        <a href={`tel:${company.phoneTel}`} className="btn btn-outline-light">
          Call {company.phone}
        </a>
      </PageHero>

      <section className="section-pad" aria-labelledby="rates-heading">
        <div className="container-site">
          <SectionHeading
            id="rates-heading"
            eyebrow="Current central subsidy"
            title="Residential subsidy rates"
            description="Central financial assistance for residential rooftop solar under the PM Surya Ghar scheme."
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[28rem] border-collapse text-left">
              <caption className="sr-only">PM Surya Ghar central subsidy by system size</caption>
              <thead>
                <tr className="border-b-2 border-navy text-sm uppercase tracking-wide text-muted">
                  <th scope="col" className="py-3 pr-6 font-semibold">
                    System size
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    Central subsidy
                  </th>
                </tr>
              </thead>
              <tbody>
                {SUBSIDY.perKw.map((row) => (
                  <tr key={row.label} className="border-b border-line">
                    <th scope="row" className="py-5 pr-6 text-lg font-medium text-navy">
                      {row.label}
                    </th>
                    <td className="py-5 font-display text-3xl font-semibold text-solar-deep">
                      {formatInr(row.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-2xl text-muted">
            For a 3 kW system costing roughly ₹1.5 to ₹1.8 lakh before subsidy, your net cost
            after the {formatInr(SUBSIDY.cap)} subsidy is about ₹72,000 to ₹1,02,000, depending on
            the equipment you choose. For an exact price for your capacity, call us on{" "}
            <a className="font-semibold text-azure hover:text-solar-deep" href={`tel:${company.phoneTel}`}>
              {company.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section-pad bg-sand" aria-labelledby="steps-heading">
        <div className="container-site">
          <SectionHeading
            id="steps-heading"
            eyebrow="How it works"
            title="We handle the paperwork"
            description="From registration to subsidy credit, your Sri Sun Solar coordinator manages each step."
          />
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true" className="font-display text-5xl font-semibold text-azure/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-sans text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="eligibility-heading">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading id="eligibility-heading" eyebrow="Eligibility" title="Who can apply" />
            <ul className="mt-8 space-y-3 text-lg text-ink">
              {[
                "Residential TANGEDCO electricity connection",
                "You own the property",
                "Apartments can participate with RWA approval",
                "Commercial, industrial and agricultural connections are not covered",
                "No income ceiling is stated",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-solar" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Good to know" title="Scheme details" />
            <ul className="mt-8 space-y-3 text-lg text-ink">
              {[
                "Launched 13 February 2024 by MNRE with an outlay of ₹75,021 crore",
                "Aims to bring rooftop solar to 1 crore homes by 2027",
                "Up to about 300 units a month of free electricity after subsidy",
                "Modules must be from the approved ALMM list",
                `Group housing and RWA common meters: ${formatInr(SUBSIDY.rwaPerKw)} per kW`,
                `Government helpline: ${SUBSIDY.helpline}`,
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-solar" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link href="/faq" className="font-semibold text-azure underline underline-offset-4 hover:text-solar-deep">
                Read the full subsidy FAQ
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section id="enquire" className="section-pad bg-sand" aria-labelledby="subsidy-enquire-heading">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionHeading
            id="subsidy-enquire-heading"
            eyebrow="Apply with us"
            title="Get your subsidy estimate"
            description="Share your EB consumer number and pincode and we will confirm your eligibility and the best system size for your home."
          />
          <EnquiryForm source="subsidy" phone={company.phone} />
        </div>
      </section>
    </>
  );
}
