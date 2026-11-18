import Image from "next/image";
import { CtaBanner } from "@/components/site/CtaBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { getProjects } from "@/lib/data";
import { needsUnoptimized } from "@/lib/images";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solar Projects: Residential, Commercial and Industrial",
  description:
    "Rooftop solar installations by Sri Sun Solar across Chennai, from on-grid homes and villas to commercial and industrial plants.",
  path: "/projects",
});

const TYPES = [
  {
    key: "Residential",
    blurb: "On-grid homes and villas, many installed with PM Surya Ghar subsidy.",
  },
  {
    key: "Commercial",
    blurb: "Offices, malls, hospitals, schools and banks with high daytime consumption.",
  },
  {
    key: "Industrial",
    blurb: "Factory rooftops and ground-mounted plants for MSMEs and industry.",
  },
];

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <PageHero
        eyebrow="Projects"
        title="Solar plants we have delivered"
        description="Real installations across Chennai and Tamil Nadu, from 3 kWp homes to larger commercial and industrial systems."
        breadcrumbs={[{ label: "Projects" }]}
      />

      {TYPES.map((type, index) => {
        const items = projects.filter(
          (p) => p.type.toLowerCase() === type.key.toLowerCase(),
        );
        return (
          <section
            key={type.key}
            id={type.key.toLowerCase()}
            aria-labelledby={`${type.key}-heading`}
            className={`section-pad scroll-mt-20 ${index % 2 === 1 ? "bg-sand" : ""}`}
          >
            <div className="container-site">
              <h2
                id={`${type.key}-heading`}
                className="font-display text-3xl font-semibold"
              >
                {type.key}
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-muted">{type.blurb}</p>

              {items.length > 0 ? (
                <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((project) => (
                    <li key={project.id}>
                      {project.imageUrl ? (
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            unoptimized={needsUnoptimized(project.imageUrl)}
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      ) : null}
                      <h3 className="mt-4 font-sans text-lg font-semibold">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {[project.capacity, project.location].filter(Boolean).join(" \u00b7 ")}
                      </p>
                      {project.description ? (
                        <p className="mt-2 text-muted">{project.description}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-8 max-w-xl border-l-4 border-solar pl-5 text-lg text-ink">
                  We are preparing case studies for {type.key.toLowerCase()} projects. Contact us
                  to discuss a system for your site.
                </p>
              )}
            </div>
          </section>
        );
      })}

      <CtaBanner
        title="Want a system like these on your roof?"
        description="Book a free site survey and we will size and cost a plant for you."
        primary={{ label: "Enquire now", href: "/contact#enquire" }}
        secondary={{ label: "See the gallery", href: "/gallery" }}
      />
    </>
  );
}
