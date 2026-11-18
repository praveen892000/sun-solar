import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Badge, Card, PageHeader, Table, Td, Th, EmptyRow, formatDate } from "@/components/admin/ui";

export const instant = false;

export default async function DashboardPage() {
  const [newEnquiries, totalEnquiries, posts, products, projects, recent] = await Promise.all([
    prisma.enquiry.count({ where: { status: "new" } }),
    prisma.enquiry.count(),
    prisma.blogPost.count(),
    prisma.product.count(),
    prisma.project.count(),
    prisma.enquiry.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
  ]);

  const stats = [
    { label: "New enquiries", value: newEnquiries, sub: `${totalEnquiries} total`, href: "/admin/enquiries", highlight: newEnquiries > 0 },
    { label: "Blog posts", value: posts, href: "/admin/blog" },
    { label: "Products", value: products, href: "/admin/products" },
    { label: "Projects", value: projects, href: "/admin/projects" },
  ];

  return (
    <>
      <PageHeader title="Dashboard" description="Overview of your website content and leads." />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <Link key={s.label} href={s.href}>
            <Card className={`transition hover:shadow-md ${s.highlight ? "border-amber-400" : ""}`}>
              <p className="text-sm text-slate-500">{s.label}</p>
              <p className="mt-1 text-3xl font-semibold text-slate-900">{s.value}</p>
              {s.sub && <p className="mt-1 text-xs text-slate-500">{s.sub}</p>}
            </Card>
          </Link>
        ))}
      </div>

      <h2 className="mb-3 text-lg font-semibold text-slate-900">Latest enquiries</h2>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Phone</Th>
            <Th>Looking for</Th>
            <Th>Status</Th>
            <Th>Received</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {recent.length === 0 && <EmptyRow cols={5} text="No enquiries yet." />}
          {recent.map((e) => (
            <tr key={e.id}>
              <Td>{e.fullName}</Td>
              <Td>{e.phone}</Td>
              <Td>{e.lookingFor ?? "—"}</Td>
              <Td>
                <Badge tone={e.status === "new" ? "amber" : "slate"}>{e.status}</Badge>
              </Td>
              <Td>{formatDate(e.createdAt)}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
