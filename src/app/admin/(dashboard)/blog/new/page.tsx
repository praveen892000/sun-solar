import ResourceForm from "@/components/admin/ResourceForm";
import { blogFields } from "@/components/admin/fields";
import { Card, PageHeader } from "@/components/admin/ui";

export const instant = false;

export default function NewBlogPostPage() {
  return (
    <>
      <PageHeader title="New blog post" />
      <Card>
        <ResourceForm
          fields={blogFields}
          initial={{ published: true }}
          endpoint="/api/admin/blog"
          method="POST"
          successHref="/admin/blog"
          submitLabel="Create post"
        />
      </Card>
    </>
  );
}
