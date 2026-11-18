import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { HomeHero } from "@/components/site/HomeHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteIcon } from "@/components/site/SiteIcon";
import { Testimonials } from "@/components/site/Testimonials";
import { getCompany, getTestimonials } from "@/lib/data";
import {
  BENEFITS,
  GALLERY,
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
  const [company, testimonials] = await Promise.all([
    getCompany(),
    getTestimonials(),
  ]);

  return (
    <>
      <HomeHero />

      {/* Benefits — open editorial grid, no card chrome */}
      <section className="section-pad" aria-labelledby="benefits-heading">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading
              id="benefits-heading"
              eyebrow="Why go solar"
              title="Your roof can pay for your power"
              description="Cut bills, shrink your carbon footprint, and own a system built for Tamil Nadu’s sun."
            />
            <p className="max-w-md text-muted lg:justify-self-end lg:text-right">
              Designed for homes, RWAs and businesses across Chennai — with
              subsidy guidance from day one.
            </p>
          </div>

          <ul className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit, i) => (
              <li
                key={benefit.title}
                className={`relative ${i === 0 ? "lg:col-span-1" : ""}`}
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf text-white">
                  <SiteIcon name={benefit.icon} />
                </span>
                <h3 className="font-display text-2xl tracking-tight">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-muted">{benefit.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-mesh" aria-labelledby="process-heading">
        <div className="container-site">
          <SectionHeading
            id="process-heading"
            eyebrow="How it works"
            title="Three steps. One accountable team."
            description="From the first site visit to a commissioned plant — survey, design, install."
          />

          <ol className="mt-16 grid gap-6 lg:grid-cols-3">
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step.step}
                className="group relative overflow-hidden rounded-[1.5rem] bg-white p-8 shadow-[0_20px_50px_-36px_rgba(16,24,32,0.45)] transition duration-300 hover:-translate-y-1"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-6xl font-extrabold tracking-tight text-mist group-hover:text-sun/20"
                >
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-2xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted">{step.body}</p>
                {index < PROCESS_STEPS.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-8 hidden h-px w-10 bg-line lg:block"
                  />
                ) : null}
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <Link href="/epc" className="btn btn-outline">
              Explore EPC
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust + visual strip */}
      <section className="overflow-hidden bg-atmosphere text-white" aria-labelledby="trust-heading">
        <div className="container-site section-pad">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionHeading
                id="trust-heading"
                light
                eyebrow="Why Sri Sun Solar"
                title="Built for long-term energy savings"
                description="Premium modules, careful installs, and subsidy paperwork handled end to end."
              />
              <dl className="mt-12 flex flex-wrap gap-10">
                <div>
                  <dt className="text-sm text-white/60">Years of experience</dt>
                  <dd className="font-display text-6xl font-extrabold tracking-tight text-sun">
                    {company.yearsExperience}+
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-white/60">Installations</dt>
                  <dd className="font-display text-6xl font-extrabold tracking-tight text-white">
                    {company.installations}+
                  </dd>
                </div>
              </dl>
              <ul className="mt-12 grid gap-6 sm:grid-cols-2">
                {TRUST_POINTS.map((point) => (
                  <li key={point.title} className="border-t border-white/15 pt-5">
                    <h3 className="font-display text-xl !text-white tracking-tight">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">{point.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]">
              <Image
                src={GALLERY[0]?.src ?? "/"}
                alt="Rooftop solar installation by Sri Sun Solar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-display text-2xl text-white">
                Real rooftops. Real generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad" aria-labelledby="testimonials-heading">
        <div className="container-site">
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Customers"
            title="People who made the switch"
            description="Homes and businesses across Chennai that trust Sri Sun Solar for on-grid systems and subsidy support."
          />
          <div className="mt-14">
            <Testimonials items={testimonials} />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad bg-dawn" aria-labelledby="industries-heading">
        <div className="container-site">
          <SectionHeading
            id="industries-heading"
            eyebrow="Who we serve"
            title="Solar for every daytime load"
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <li
                key={industry.label}
                className="rounded-[1.35rem] border border-line/80 bg-white/70 p-6 backdrop-blur transition hover:border-leaf/40 hover:shadow-[0_18px_40px_-30px_rgba(15,122,95,0.55)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">
                  <SiteIcon name={industry.icon} />
                </span>
                <h3 className="mt-5 font-display text-xl tracking-tight">
                  {industry.label}
                </h3>
                <p className="mt-2 text-sm text-muted">{industry.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquire" className="section-pad" aria-labelledby="enquire-heading">
        <div className="container-site overflow-hidden rounded-[2rem] bg-ink text-white lg:grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-atmosphere p-8 sm:p-12 lg:p-14">
            <SectionHeading
              id="enquire-heading"
              light
              eyebrow="Get started"
              title="Book a free site survey"
              description={`Share a few details and we will call you back. Or dial ${company.phone} now.`}
            />
            <ul className="mt-10 space-y-3 text-white/75">
              <li>
                <a
                  href={`tel:${company.phoneTel}`}
                  className="font-semibold text-white hover:text-sun"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.emailSales}`}
                  className="font-semibold text-white hover:text-sun"
                >
                  {company.emailSales}
                </a>
              </li>
              <li>{company.address}</li>
            </ul>
          </div>
          <div className="bg-paper p-8 text-ink sm:p-12 lg:p-14">
            <EnquiryForm source="home" phone={company.phone} />
          </div>
        </div>
      </section>
    </>
  );
}
