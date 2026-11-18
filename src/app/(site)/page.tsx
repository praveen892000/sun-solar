import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Marquee } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteIcon } from "@/components/site/SiteIcon";
import { SnapSlider } from "@/components/site/SnapSlider";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";
import { getCompany, getTestimonials } from "@/lib/data";
import {
  BENEFITS,
  GALLERY,
  HERO_SLIDES,
  INDUSTRIES,
  PROCESS_STEPS,
  TRUST_POINTS,
} from "@/lib/site-content";
import { buildMetadata } from "@/lib/seo";
import { formatInr, SUBSIDY } from "@/lib/company";

export const metadata = buildMetadata({
  title: "Sri Sun Solar | Rooftop Solar and PM Surya Ghar Subsidy in Chennai",
  description:
    "Rooftop solar for homes, housing societies and businesses in Chennai. We handle survey, design, installation and PM Surya Ghar subsidy of up to ₹78,000. MNRE channel partner since 2013.",
  path: "/",
  absoluteTitle: true,
});

const CREDENTIALS = [
  "MNRE Channel Partner",
  "TEDA Registered",
  "TNPHC Registered",
  "REC Module Partner",
  "12+ Years Experience",
  "500+ Installations",
];

export default async function HomePage() {
  const [company, testimonials] = await Promise.all([
    getCompany(),
    getTestimonials(),
  ]);

  const projectSlides = GALLERY.slice(0, 8).map((g) => ({
    id: String(g.id),
    image: g.src,
    title: g.caption,
    meta: [g.capacity, g.location].filter(Boolean).join(" · "),
    href: "/gallery",
  }));

  return (
    <>
      <HeroSlider slides={[...HERO_SLIDES]} />
      <Marquee items={CREDENTIALS} />

      {/* Split intro + subsidy callout */}
      <section className="section-pad" aria-labelledby="intro-heading">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              id="intro-heading"
              eyebrow="Sri Sun Solar Energiser"
              title="Harvest energy in all seasons"
              description="End-to-end rooftop solar for homes, RWAs and businesses in Chennai — survey, design, install, net metering and PM Surya Ghar subsidy."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn btn-navy">
                About us
              </Link>
              <Link href="/products" className="btn btn-outline">
                Browse products
              </Link>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="relative overflow-hidden rounded-[1.75rem] bg-atmosphere p-8 text-white sm:p-10">
              <div
                aria-hidden="true"
                className="anim-float absolute -right-6 top-6 h-24 w-24 rounded-full border-4 border-solar/40"
              />
              <p className="eyebrow !text-solar">PM Surya Ghar</p>
              <p className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
                Up to {formatInr(SUBSIDY.cap)}
              </p>
              <p className="mt-3 text-white/75">
                Central subsidy for residential rooftop — 1 kW {formatInr(SUBSIDY.oneKw)} · 2
                kW {formatInr(SUBSIDY.twoKw)} · 3 kW+ capped at {formatInr(SUBSIDY.cap)}.
              </p>
              <Link href="/subsidy" className="btn btn-primary mt-8">
                See subsidy details
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits — staggered zigzag rows */}
      <section className="section-pad bg-dawn" aria-labelledby="benefits-heading">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              id="benefits-heading"
              eyebrow="Benefits"
              title="Your roof can pay for your power"
              description="Solar on your roof or ground cuts bills and supports a cleaner grid."
            />
          </Reveal>

          <ul className="mt-14 space-y-5">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.title} delayMs={i * 60}>
                <li
                  className={`flex flex-col gap-4 rounded-2xl border border-line bg-white p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-6 ${
                    i % 2 === 1 ? "sm:flex-row-reverse" : ""
                  } transition duration-300 hover:-translate-y-0.5 hover:border-azure/40 hover:shadow-[0_18px_40px_-28px_rgba(27,108,168,0.45)]`}
                >
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-solar/10 text-solar-deep">
                    <SiteIcon name={benefit.icon} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl text-navy sm:text-2xl">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-muted">{benefit.body}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden font-display text-4xl font-semibold text-sand sm:block"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process — horizontal snap steps */}
      <section className="section-pad" aria-labelledby="process-heading">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                id="process-heading"
                eyebrow="How it works"
                title="Three steps to solar power"
                description="One accountable team from first visit to commissioning."
              />
              <Link href="/epc" className="btn btn-outline">
                Full EPC process
              </Link>
            </div>
          </Reveal>

          <div className="slider-track mt-12 flex gap-5 overflow-x-auto pb-2">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delayMs={i * 80} className="slider-slide shrink-0">
                <article className="relative h-full w-[min(85vw,22rem)] overflow-hidden rounded-[1.5rem] bg-navy p-7 text-white">
                  <span className="font-display text-6xl font-semibold text-solar/35">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-2xl !text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{step.body}</p>
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-solar to-azure"
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust stats band */}
      <section className="bg-atmosphere text-white" aria-labelledby="trust-heading">
        <div className="container-site section-pad">
          <Reveal>
            <SectionHeading
              id="trust-heading"
              light
              eyebrow="Why Sri Sun Solar"
              title="A solar investment you can trust"
              description="Premium products, careful installs, and subsidy paperwork handled end to end."
            />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <div>
                <p className="font-display text-5xl font-semibold text-solar">
                  {company.yearsExperience}+
                </p>
                <p className="mt-2 text-white/70">Years of experience</p>
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <div>
                <p className="font-display text-5xl font-semibold text-white">
                  {company.installations}+
                </p>
                <p className="mt-2 text-white/70">Installations</p>
              </div>
            </Reveal>
            {TRUST_POINTS.slice(0, 2).map((point, i) => (
              <Reveal key={point.title} delayMs={120 + i * 60}>
                <div className="border-l border-white/20 pl-5">
                  <h3 className="font-display text-xl !text-white">{point.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project slider */}
      <section className="section-pad bg-sand" aria-labelledby="projects-heading">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              id="projects-heading"
              eyebrow="Installations"
              title="Chennai rooftops we have powered"
              description="Swipe through recent subsidy and on-grid projects."
            />
          </Reveal>
          <div className="mt-10">
            <SnapSlider slides={projectSlides} label="Project gallery" />
          </div>
          <div className="mt-8">
            <Link href="/gallery" className="btn btn-navy">
              Open full gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials slider */}
      <section className="section-pad" aria-labelledby="stories-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <SectionHeading
              id="stories-heading"
              eyebrow="Customers"
              title="Homes and businesses that made the switch"
              description="Feedback from people who installed with Sri Sun Solar."
            />
          </Reveal>
          <Reveal delayMs={100}>
            <TestimonialSlider items={testimonials} />
          </Reveal>
        </div>
      </section>

      {/* Industries mosaic */}
      <section className="section-pad bg-dawn" aria-labelledby="industries-heading">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              id="industries-heading"
              eyebrow="Industries"
              title="Solar for daytime loads"
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry, i) => (
              <Reveal key={industry.label} delayMs={i * 70}>
                <li className="group h-full rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-solar/50 hover:shadow-[0_20px_40px_-28px_rgba(232,119,34,0.55)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-azure text-white transition group-hover:bg-solar">
                    <SiteIcon name={industry.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-xl">{industry.label}</h3>
                  <p className="mt-2 text-sm text-muted">{industry.note}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquire" className="section-pad" aria-labelledby="enquire-heading">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              id="enquire-heading"
              eyebrow="Quick enquiry"
              title="Book your free site survey"
              description={`Tell us about your home or building and we will call you back. Prefer to talk now? Call ${company.phone}.`}
            />
            <ul className="mt-8 space-y-3 text-muted">
              <li>
                <a
                  href={`tel:${company.phoneTel}`}
                  className="font-semibold text-navy hover:text-azure"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.emailSales}`}
                  className="font-semibold text-navy hover:text-azure"
                >
                  {company.emailSales}
                </a>
              </li>
              <li>{company.address}</li>
            </ul>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="rounded-[1.5rem] border border-line bg-sand/60 p-6 sm:p-8">
              <EnquiryForm source="home" phone={company.phone} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
