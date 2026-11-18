import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Badge, EmptyRow, PageHeader, Table, Td, Th, formatDate } from "@/components/admin/ui";

export const instant = false;

export default async function PagesListPage() {
  const pages = await prisma.page.findMany({ orderBy: { title: "asc" } });

  return (
    <>
      <PageHeader title="Pages" description="Edit the content of static pages (About, EPC, Subsidy, legal, FAQ)." />
      <Table>
        <thead>
          <tr>
            <Th>Title</Th>
            <Th>Slug</Th>
            <Th>Status</Th>
            <Th>Updated</Th>
            <Th />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {pages.length === 0 && <EmptyRow cols={5} text="No pages yet." />}
          {pages.map((p) => (
            <tr key={p.id}>
              <Td>
                <Link href={`/admin/pages/${p.id}`} className="font-medium text-slate-900 hover:text-amber-700">
                  {p.title}
                </Link>
              </Td>
              <Td>/{p.slug}</Td>
              <Td>
                <Badge tone={p.published ? "green" : "slate"}>{p.published ? "Published" : "Draft"}</Badge>
              </Td>
              <Td>{formatDate(p.updatedAt)}</Td>
              <Td className="text-right">
                <Link href={`/admin/pages/${p.id}`} className="text-sm font-medium text-amber-700 hover:underline">
                  Edit
                </Link>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
