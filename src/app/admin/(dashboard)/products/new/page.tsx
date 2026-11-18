import { prisma } from "@/lib/prisma";
import ResourceForm from "@/components/admin/ResourceForm";
import { productFields } from "@/components/admin/fields";
import { Card, PageHeader } from "@/components/admin/ui";

export const instant = false;

export default async function NewProductPage() {
  const categories = await prisma.productCategory.findMany({
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    select: { id: true, name: true },
  });

  return (
    <>
      <PageHeader title="New product" />
      <Card>
        <ResourceForm
          fields={productFields(categories)}
          initial={{ published: true, sortOrder: 0, categoryId: categories[0]?.id ?? "" }}
          endpoint="/api/admin/products"
          method="POST"
          successHref="/admin/products"
          submitLabel="Create product"
        />
      </Card>
    </>
  );
}
