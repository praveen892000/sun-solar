import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ResourceForm from "@/components/admin/ResourceForm";
import { projectFields } from "@/components/admin/fields";
import { Card, PageHeader } from "@/components/admin/ui";

export const instant = false;

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await prisma.project.findUnique({ where: { id } });
  if (!project) notFound();

  return (
    <>
      <PageHeader title="Edit project" description={project.slug} />
      <Card>
        <ResourceForm
          fields={projectFields}
          initial={{
            title: project.title,
            slug: project.slug,
            type: project.type,
            capacity: project.capacity,
            location: project.location,
            description: project.description,
            imageUrl: project.imageUrl,
            sortOrder: project.sortOrder,
            published: project.published,
          }}
          endpoint={`/api/admin/projects/${project.id}`}
          method="PUT"
          successHref="/admin/projects"
        />
      </Card>
    </>
  );
}
