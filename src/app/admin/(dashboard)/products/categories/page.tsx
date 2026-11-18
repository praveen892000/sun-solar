import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ResourceForm from "@/components/admin/ResourceForm";
import { categoryFields } from "@/components/admin/fields";
import { Card, EmptyRow, PageHeader, Table, Td, Th } from "@/components/admin/ui";

export const instant = false;

export default async function CategoriesPage() {
  const categories = await prisma.productCategory.findMany({
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    include: { _count: { select: { products: true } } },
  });

  return (
    <>
      <PageHeader
        title="Product categories"
        action={
          <Link href="/admin/products" className="text-sm font-medium text-amber-700 hover:underline">
            ← Back to products
          </Link>
        }
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Slug</Th>
              <Th>Order</Th>
              <Th>Products</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {categories.length === 0 && <EmptyRow cols={4} text="No categories yet." />}
            {categories.map((c) => (
              <tr key={c.id}>
                <Td className="font-medium text-slate-900">{c.name}</Td>
                <Td>{c.slug}</Td>
                <Td>{c.sortOrder}</Td>
                <Td>{c._count.products}</Td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Card>
          <h2 className="mb-4 text-lg font-semibold text-slate-900">Add category</h2>
          <ResourceForm
            fields={categoryFields}
            initial={{ sortOrder: categories.length + 1 }}
            endpoint="/api/admin/categories"
            method="POST"
            submitLabel="Add category"
            resetOnSuccess
          />
        </Card>
      </div>
    </>
  );
}
