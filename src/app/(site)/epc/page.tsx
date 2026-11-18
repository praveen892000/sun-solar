import { CtaBanner } from "@/components/site/CtaBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { COMPANY } from "@/lib/company";
import { EPC_STAGES } from "@/lib/site-content";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solar EPC Services in Chennai",
  description:
    "Engineering, procurement and construction of rooftop and ground-mounted solar plants, plus consultancy and O&M, from Sri Sun Solar Energiser Pvt Ltd.",
  path: "/epc",
});

const PILLARS = [
  {
    title: "EPC",
    body: "Seamless project execution with engineering expertise, from feasibility to commissioning.",
  },
  {
    title: "Consultancy",
    body: "International-class consultancy services provided by our expert team.",
  },
  {
    title: "O&M",
    body: "Operation and maintenance by an expert team with immense experience.",
  },
];

const QUALITY = [
  {
    title: "Expert engineering",
    body: "Three decades of on-field experience and an engineering team with a strong academic background.",
  },
  {
    title: "First-quality procurement",
    body: "Multi-level quality control and the finest procurement standards, with a zero-defect tolerance vendor policy.",
  },
  {
    title: "Seamless construction",
    body: "An efficient project management team with public sector experience, with planned engineering and procurement for smooth, on-time completion.",
  },
];

const CONSULTANCY = [
  "Maximising ROI with highest yields",
  "Protecting the owner's interest",
  "Detailed engineering for cost optimisation",
  "Contractor and vendor independent",
];

const OM = [
  "24x7 control room with a remote monitoring cloud platform",
  "Dedicated analytics team for continuous generation improvement",
  "In-house HSSE team for a safe working environment",
  "Plant health management with an analytical team",
  "Asset management services",
  "PV forecasting services",
];

export default function EpcPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "EPC", path: "/epc" }])} />
      <PageHero
        eyebrow="About us / EPC"
        title="From engineering to a working solar plant"
        description={`Established in ${COMPANY.established} by professionals with 20+ years of industrial automation experience, we raise standards in renewable energy projects with expertise gained over three decades of on-field work.`}
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "EPC" }]}
      />

      <section className="section-pad">
        <div className="container-site">
          <ul className="grid gap-10 md:grid-cols-3">
            {PILLARS.map((p) => (
              <li key={p.title} className="border-t-2 border-solar pt-5">
                <h2 className="font-sans text-2xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-sand" aria-labelledby="stages-heading">
        <div className="container-site">
          <SectionHeading
            id="stages-heading"
            eyebrow="Our process"
            title="Five stages, one accountable team"
          />
          <ol className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {EPC_STAGES.map((stage, index) => (
              <li key={stage.title}>
                <span aria-hidden="true" className="font-display text-5xl font-semibold text-azure/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-sans text-xl font-semibold">{stage.title}</h3>
                <ul className="mt-3 space-y-1.5 text-muted">
                  {stage.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-solar" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="quality-heading">
        <div className="container-site">
          <SectionHeading id="quality-heading" eyebrow="Quality" title="What sets our execution apart" />
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {QUALITY.map((q) => (
              <li key={q.title} className="border-t-2 border-navy/10 pt-5">
                <h3 className="font-sans text-lg font-semibold">{q.title}</h3>
                <p className="mt-2 text-muted">{q.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="consultancy" className="section-pad bg-sand" aria-labelledby="consultancy-heading">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id="consultancy-heading"
              eyebrow="For project developers and owners"
              title="Consultancy services"
              description="Highest quality in project construction, with advice that stays independent of contractors and vendors."
            />
            <ul className="mt-8 space-y-3 text-lg text-ink">
              {CONSULTANCY.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-solar" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div id="om" className="scroll-mt-24">
            <SectionHeading
              eyebrow="For investors, developers and EPC contractors"
              title="O&M and asset management"
              description="Keep your plant performing for its full life with monitoring, analytics and preventive care."
            />
            <ul className="mt-8 space-y-3 text-lg text-ink">
              {OM.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-solar" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Planning a rooftop or ground-mounted plant?"
        description="Share your site details and we will come back with a feasibility view and a proposal."
        primary={{ label: "Request a proposal", href: "/contact#enquire" }}
        secondary={{ label: "View projects", href: "/projects" }}
      />
    </>
  );
}
