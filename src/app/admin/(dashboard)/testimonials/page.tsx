import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteButton from "@/components/admin/DeleteButton";
import { Badge, EmptyRow, PageHeader, PrimaryLink, Table, Td, Th } from "@/components/admin/ui";

export const instant = false;

export default async function TestimonialsPage() {
  const items = await prisma.testimonial.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });

  return (
    <>
      <PageHeader
        title="Testimonials"
        description={`${items.length} testimonials`}
        action={<PrimaryLink href="/admin/testimonials/new">New testimonial</PrimaryLink>}
      />
      <Table>
        <thead>
          <tr>
            <Th>Customer</Th>
            <Th>Quote</Th>
            <Th>Rating</Th>
            <Th>Status</Th>
            <Th />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {items.length === 0 && <EmptyRow cols={5} text="No testimonials yet." />}
          {items.map((t) => (
            <tr key={t.id}>
              <Td>
                <Link href={`/admin/testimonials/${t.id}`} className="font-medium text-slate-900 hover:text-amber-700">
                  {t.name}
                </Link>
                {t.role && <p className="text-xs text-slate-400">{t.role}</p>}
              </Td>
              <Td className="max-w-md">
                <p className="line-clamp-2">{t.quote}</p>
              </Td>
              <Td>{t.rating} / 5</Td>
              <Td>
                <Badge tone={t.published ? "green" : "slate"}>{t.published ? "Published" : "Hidden"}</Badge>
              </Td>
              <Td className="space-x-4 whitespace-nowrap text-right">
                <Link href={`/admin/testimonials/${t.id}`} className="text-sm font-medium text-amber-700 hover:underline">
                  Edit
                </Link>
                <DeleteButton endpoint={`/api/admin/testimonials/${t.id}`} />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
