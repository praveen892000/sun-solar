import Link from "next/link";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { HomeHero } from "@/components/site/HomeHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteIcon } from "@/components/site/SiteIcon";
import { Testimonials } from "@/components/site/Testimonials";
import { getCompany, getTestimonials } from "@/lib/data";
import {
  BENEFITS,
  INDUSTRIES,
  PROCESS_STEPS,
  TRUST_POINTS,
} from "@/lib/site-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sri Sun Solar | Rooftop Solar and PM Surya Ghar Subsidy in Chennai",
  description:
    "Rooftop solar for homes, housing societies and businesses in Chennai. We handle survey, design, installation and PM Surya Ghar subsidy of up to ₹78,000. MNRE channel partner since 2013.",
  path: "/",
  absoluteTitle: true,
});

export default async function HomePage() {
  const [company, testimonials] = await Promise.all([getCompany(), getTestimonials()]);

  return (
    <>
      <HomeHero />

      {/* Benefits */}
      <section className="section-pad" aria-labelledby="benefits-heading">
        <div className="container-site">
          <SectionHeading
            id="benefits-heading"
            eyebrow="Benefits of going solar"
            title="Your roof can pay for your power"
            description="Solar solutions installed on your roof or ground are ideal for harnessing the sun's energy. They save on electricity costs and help you fulfil your role as a responsible citizen by contributing positively to the environment."
          />
          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <li key={benefit.title} className="border-t-2 border-navy/10 pt-6">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-solar/10 text-solar-deep">
                  <SiteIcon name={benefit.icon} />
                </span>
                <h3 className="font-sans text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted">{benefit.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-sand" aria-labelledby="process-heading">
        <div className="container-site">
          <SectionHeading
            id="process-heading"
            eyebrow="How it works"
            title="Three steps to your own solar power"
            description="One team takes you from the first visit to a commissioned plant."
          />
          <ol className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-10">
            {PROCESS_STEPS.map((step) => (
              <li key={step.step} className="relative">
                <span
                  aria-hidden="true"
                  className="font-display text-7xl font-semibold leading-none text-azure/20"
                >
                  {step.step}
                </span>
                <h3 className="mt-2 font-sans text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Link href="/epc" className="btn btn-outline">
              Explore our EPC process
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-atmosphere text-white" aria-labelledby="trust-heading">
        <div className="container-site section-pad">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <SectionHeading
                id="trust-heading"
                light
                eyebrow="Why Sri Sun Solar"
                title="A solar investment you can trust"
                description="Our mission is to deliver premium products and services that lower your energy costs, reduce your carbon footprint and protect your return, with a system that performs reliably and efficiently."
              />
              <dl className="mt-10 flex gap-10">
                <div>
                  <dt className="text-sm text-white/65">Years of experience</dt>
                  <dd className="font-display text-5xl font-semibold text-white">
                    {company.yearsExperience}+
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-white/65">Installations</dt>
                  <dd className="font-display text-5xl font-semibold text-white">
                    {company.installations}+
                  </dd>
                </div>
              </dl>
            </div>
            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {TRUST_POINTS.map((point) => (
                <li key={point.title} className="border-t border-white/20 pt-5">
                  <h3 className="font-sans text-lg font-semibold !text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-white/75">{point.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad" aria-labelledby="testimonials-heading">
        <div className="container-site">
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Customer stories"
            title="Homes and businesses that made the switch"
            description="Feedback from customers who have used our services. Sri Sun Solar always tries its best to bring satisfaction to customers."
          />
          <div className="mt-14">
            <Testimonials items={testimonials} />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad bg-sand" aria-labelledby="industries-heading">
        <div className="container-site">
          <SectionHeading
            id="industries-heading"
            eyebrow="Industries we serve"
            title="Solar for institutions and businesses"
            description="From hospitals to banks, we design systems around daytime loads and available roof space."
          />
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <li key={industry.label}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white">
                  <SiteIcon name={industry.icon} />
                </span>
                <h3 className="mt-4 font-sans text-lg font-semibold">{industry.label}</h3>
                <p className="mt-1 text-muted">{industry.note}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link href="/contact#enquire" className="font-semibold text-azure underline underline-offset-4 hover:text-solar-deep">
              Click here to reach out to us
            </Link>
          </p>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquire" className="section-pad" aria-labelledby="enquire-heading">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              id="enquire-heading"
              eyebrow="Quick enquiry"
              title="Book your free site survey"
              description={`Tell us a little about your home or building and we will call you back. Prefer to talk now? Call ${company.phone}.`}
            />
            <ul className="mt-8 space-y-3 text-muted">
              <li>
                <a href={`tel:${company.phoneTel}`} className="font-semibold text-navy hover:text-azure">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.emailSales}`} className="font-semibold text-navy hover:text-azure">
                  {company.emailSales}
                </a>
              </li>
              <li>{company.address}</li>
            </ul>
          </div>
          <EnquiryForm source="home" phone={company.phone} />
        </div>
      </section>
    </>
  );
}
