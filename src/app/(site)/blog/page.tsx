import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { formatDate, getBlogPosts } from "@/lib/data";
import { needsUnoptimized } from "@/lib/images";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solar Blog: Subsidy, Tariffs and Technology",
  description:
    "Guides from Sri Sun Solar on the PM Surya Ghar subsidy, TANGEDCO approvals, RWA tariffs and choosing solar modules and inverters.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="Blog"
        title="Practical guides to going solar"
        description="Subsidy updates, utility approvals and technology explained in plain language."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section-pad">
        <div className="container-site">
          <ul className="divide-y divide-line border-y border-line">
            {posts.map((post) => (
              <li key={post.slug} className="py-8">
                <article className="grid gap-6 md:grid-cols-[1fr_16rem] md:items-start lg:grid-cols-[1fr_20rem]">
                  <div>
                    <time
                      dateTime={post.publishedAt.toISOString()}
                      className="text-sm font-medium text-muted"
                    >
                      {formatDate(post.publishedAt)}
                    </time>
                    <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                      <Link href={`/blog/${post.slug}`} className="hover:text-azure">
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt ? (
                      <p className="mt-3 max-w-2xl text-lg text-muted">{post.excerpt}</p>
                    ) : null}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-block font-semibold text-azure hover:text-solar-deep"
                    >
                      Read article
                    </Link>
                  </div>
                  {post.coverImage ? (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-sand">
                      <Image
                        src={post.coverImage}
                        alt=""
                        fill
                        unoptimized={needsUnoptimized(post.coverImage)}
                        sizes="(min-width: 768px) 20rem, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
