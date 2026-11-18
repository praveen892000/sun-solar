import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteButton from "@/components/admin/DeleteButton";
import { Badge, EmptyRow, PageHeader, PrimaryLink, Table, Td, Th } from "@/components/admin/ui";

export const instant = false;

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: [{ category: { sortOrder: "asc" } }, { sortOrder: "asc" }, { name: "asc" }],
    include: { category: true },
  });

  return (
    <>
      <PageHeader
        title="Products"
        description={`${products.length} products`}
        action={
          <div className="flex gap-2">
            <Link
              href="/admin/products/categories"
              className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Categories
            </Link>
            <PrimaryLink href="/admin/products/new">New product</PrimaryLink>
          </div>
        }
      />
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Brand</Th>
            <Th>Category</Th>
            <Th>Status</Th>
            <Th />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {products.length === 0 && <EmptyRow cols={5} text="No products yet." />}
          {products.map((p) => (
            <tr key={p.id}>
              <Td>
                <Link href={`/admin/products/${p.id}`} className="font-medium text-slate-900 hover:text-amber-700">
                  {p.name}
                </Link>
                <p className="text-xs text-slate-400">{p.slug}</p>
              </Td>
              <Td>{p.brand ?? "—"}</Td>
              <Td>{p.category.name}</Td>
              <Td>
                <Badge tone={p.published ? "green" : "slate"}>{p.published ? "Published" : "Draft"}</Badge>
              </Td>
              <Td className="space-x-4 whitespace-nowrap text-right">
                <Link href={`/admin/products/${p.id}`} className="text-sm font-medium text-amber-700 hover:underline">
                  Edit
                </Link>
                <DeleteButton endpoint={`/api/admin/products/${p.id}`} />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
