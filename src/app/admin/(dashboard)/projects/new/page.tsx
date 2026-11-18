import ResourceForm from "@/components/admin/ResourceForm";
import { projectFields } from "@/components/admin/fields";
import { Card, PageHeader } from "@/components/admin/ui";

export const instant = false;

export default function NewProjectPage() {
  return (
    <>
      <PageHeader title="New project" />
      <Card>
        <ResourceForm
          fields={projectFields}
          initial={{ type: "Residential", published: true, sortOrder: 0 }}
          endpoint="/api/admin/projects"
          method="POST"
          successHref="/admin/projects"
          submitLabel="Create project"
        />
      </Card>
    </>
  );
}
