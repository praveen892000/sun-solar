import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ResourceForm from "@/components/admin/ResourceForm";
import { pageFields } from "@/components/admin/fields";
import { Card, PageHeader } from "@/components/admin/ui";

export const instant = false;

export default async function EditPagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const page = await prisma.page.findUnique({ where: { id } });
  if (!page) notFound();

  return (
    <>
      <PageHeader title={`Edit page: ${page.title}`} description={`/${page.slug}`} />
      <Card>
        <ResourceForm
          fields={pageFields}
          initial={{
            title: page.title,
            excerpt: page.excerpt,
            content: page.content,
            metaTitle: page.metaTitle,
            metaDescription: page.metaDescription,
            published: page.published,
          }}
          endpoint={`/api/admin/pages/${page.id}`}
          method="PUT"
          successHref="/admin/pages"
        />
      </Card>
    </>
  );
}
