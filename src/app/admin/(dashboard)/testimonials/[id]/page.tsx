import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ResourceForm from "@/components/admin/ResourceForm";
import { testimonialFields } from "@/components/admin/fields";
import { Card, PageHeader } from "@/components/admin/ui";

export const instant = false;

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await prisma.testimonial.findUnique({ where: { id } });
  if (!t) notFound();

  return (
    <>
      <PageHeader title="Edit testimonial" description={t.name} />
      <Card>
        <ResourceForm
          fields={testimonialFields}
          initial={{
            name: t.name,
            role: t.role,
            quote: t.quote,
            rating: String(t.rating),
            sortOrder: t.sortOrder,
            published: t.published,
          }}
          endpoint={`/api/admin/testimonials/${t.id}`}
          method="PUT"
          successHref="/admin/testimonials"
        />
      </Card>
    </>
  );
}
