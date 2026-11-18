import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { CtaBanner } from "@/components/site/CtaBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { FAQS } from "@/lib/faq-content";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "PM Surya Ghar FAQ for Tamil Nadu",
  description:
    "Answers on PM Surya Ghar Muft Bijli Yojana for residential consumers in Tamil Nadu: subsidy of ₹30,000, ₹60,000 and ₹78,000, eligibility, process, timelines and warranties.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(FAQS),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="FAQ"
        title="PM Surya Ghar: your questions answered"
        description="Rooftop solar and the central subsidy for residential consumers in Tamil Nadu."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
            {FAQS.map((faq, index) => (
              <details key={faq.question} className="group py-1" open={index === 0}>
                <summary className="flex items-center justify-between gap-4 py-5 text-left">
                  <h2 className="font-sans text-lg font-semibold text-navy">
                    {faq.question}
                  </h2>
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="chevron shrink-0 text-solar-deep transition-transform"
                  />
                </summary>
                <p className="pb-6 pr-8 text-lg leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-muted">
            Sri Sun Solar has been an empanelled partner since 2013. See the current{" "}
            <Link href="/subsidy" className="font-semibold text-azure underline underline-offset-4 hover:text-solar-deep">
              subsidy rates
            </Link>{" "}
            or talk to our team.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Still have a question?"
        description="Our team is happy to walk you through the scheme and your options."
        primary={{ label: "Contact us", href: "/contact#enquire" }}
        secondary={{ label: "Subsidy rates", href: "/subsidy" }}
      />
    </>
  );
}
