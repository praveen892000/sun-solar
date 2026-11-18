import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ResourceForm from "@/components/admin/ResourceForm";
import { productFields } from "@/components/admin/fields";
import { Card, PageHeader } from "@/components/admin/ui";

export const instant = false;

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [product, categories] = await Promise.all([
    prisma.product.findUnique({ where: { id } }),
    prisma.productCategory.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      select: { id: true, name: true },
    }),
  ]);
  if (!product) notFound();

  return (
    <>
      <PageHeader title="Edit product" description={product.slug} />
      <Card>
        <ResourceForm
          fields={productFields(categories)}
          initial={{
            name: product.name,
            slug: product.slug,
            categoryId: product.categoryId,
            brand: product.brand,
            excerpt: product.excerpt,
            content: product.content,
            features: product.features,
            imageUrl: product.imageUrl,
            sortOrder: product.sortOrder,
            metaTitle: product.metaTitle,
            metaDescription: product.metaDescription,
            published: product.published,
          }}
          endpoint={`/api/admin/products/${product.id}`}
          method="PUT"
          successHref="/admin/products"
        />
      </Card>
    </>
  );
}
