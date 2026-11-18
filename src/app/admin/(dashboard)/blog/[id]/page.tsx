import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ResourceForm from "@/components/admin/ResourceForm";
import { blogFields } from "@/components/admin/fields";
import { Card, PageHeader, toDateInput } from "@/components/admin/ui";

export const instant = false;

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) notFound();

  return (
    <>
      <PageHeader title="Edit blog post" description={`/blog/${post.slug}`} />
      <Card>
        <ResourceForm
          fields={blogFields}
          initial={{
            title: post.title,
            slug: post.slug,
            publishedAt: toDateInput(post.publishedAt),
            excerpt: post.excerpt,
            content: post.content,
            coverImage: post.coverImage,
            metaTitle: post.metaTitle,
            metaDescription: post.metaDescription,
            published: post.published,
          }}
          endpoint={`/api/admin/blog/${post.id}`}
          method="PUT"
          successHref="/admin/blog"
        />
      </Card>
    </>
  );
}
