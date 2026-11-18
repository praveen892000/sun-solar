import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CtaBanner } from "@/components/site/CtaBanner";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { RichContent } from "@/components/site/RichContent";
import { formatDate, getBlogPost, getBlogPosts } from "@/lib/data";
import { needsUnoptimized } from "@/lib/images";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Article not found", robots: { index: false } };

  return buildMetadata({
    title: post.metaTitle || post.title,
    description:
      post.metaDescription ||
      post.excerpt ||
      `${post.title}. A guide from Sri Sun Solar.`,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
    type: "article",
    publishedTime: post.publishedAt.toISOString(),
  });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const [post, all] = await Promise.all([getBlogPost(slug), getBlogPosts()]);
  if (!post) notFound();

  const more = all.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleJsonLd({
            title: post.title,
            description: post.excerpt ?? post.title,
            path: `/blog/${post.slug}`,
            datePublished: post.publishedAt.toISOString(),
            image: post.coverImage,
          }),
        ]}
      />
      <PageHero
        eyebrow={formatDate(post.publishedAt)}
        title={post.title}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <article className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            {post.coverImage ? (
              <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl bg-sand">
                <Image
                  src={post.coverImage}
                  alt=""
                  fill
                  priority
                  unoptimized={needsUnoptimized(post.coverImage)}
                  sizes="(min-width: 768px) 48rem, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
            <RichContent content={post.content} />
          </div>
        </div>
      </article>

      {more.length > 0 ? (
        <section className="section-pad bg-sand pt-0" aria-labelledby="more-heading">
          <div className="container-site pt-16">
            <h2 id="more-heading" className="font-display text-3xl font-semibold">
              More from the blog
            </h2>
            <ul className="mt-8 grid gap-8 md:grid-cols-3">
              {more.map((p) => (
                <li key={p.slug} className="border-t-2 border-solar pt-4">
                  <time className="text-sm text-muted" dateTime={p.publishedAt.toISOString()}>
                    {formatDate(p.publishedAt)}
                  </time>
                  <h3 className="mt-1 font-sans text-lg font-semibold">
                    <Link href={`/blog/${p.slug}`} className="hover:text-azure">
                      {p.title}
                    </Link>
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CtaBanner
        title="Ready to talk about your own system?"
        description="Our team will answer your questions and plan a free site survey."
        primary={{ label: "Enquire now", href: "/contact#enquire" }}
        secondary={{ label: "Subsidy guide", href: "/subsidy" }}
      />
    </>
  );
}
