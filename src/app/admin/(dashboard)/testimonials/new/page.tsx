import ResourceForm from "@/components/admin/ResourceForm";
import { testimonialFields } from "@/components/admin/fields";
import { Card, PageHeader } from "@/components/admin/ui";

export const instant = false;

export default function NewTestimonialPage() {
  return (
    <>
      <PageHeader title="New testimonial" />
      <Card>
        <ResourceForm
          fields={testimonialFields}
          initial={{ rating: "5", published: true, sortOrder: 0 }}
          endpoint="/api/admin/testimonials"
          method="POST"
          successHref="/admin/testimonials"
          submitLabel="Create testimonial"
        />
      </Card>
    </>
  );
}
