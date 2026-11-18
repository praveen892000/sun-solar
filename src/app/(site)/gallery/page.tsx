import Image from "next/image";
import { CtaBanner } from "@/components/site/CtaBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { COMPANY } from "@/lib/company";
import { GALLERY } from "@/lib/site-content";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solar Installation Gallery",
  description:
    "Photos of subsidy-supported rooftop solar installations by Sri Sun Solar across Chennai, from 3 kWp to 12 kWp.",
  path: "/gallery",
  image: GALLERY[0].src,
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <PageHero
        eyebrow="Gallery"
        title="Subsidy projects across Chennai"
        description="A selection of on-grid rooftop systems we have installed for homes and villas."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="section-pad">
        <div className="container-site">
          <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((item, index) => (
              <li key={item.id}>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      priority={index < 3}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-3 text-[0.98rem] font-medium text-navy">
                    {item.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-sand" aria-labelledby="videos-heading">
        <div className="container-site">
          <SectionHeading
            id="videos-heading"
            eyebrow="Watch"
            title="Installed sites on video"
            description="See how rooftop solar looks and performs once it is up and running."
          />
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {COMPANY.youtubeEmbeds.map((videoId, index) => (
              <li key={videoId}>
                <div className="relative aspect-video overflow-hidden rounded-xl bg-navy">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                    title={`Sri Sun Solar installation video ${index + 1}`}
                    loading="lazy"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Your roof could be next"
        description="Avail the PM Surya Ghar subsidy of up to ₹78,000 on a 3 kW home system."
        primary={{ label: "Get a free site survey", href: "/contact#enquire" }}
        secondary={{ label: "Subsidy rates", href: "/subsidy" }}
      />
    </>
  );
}
