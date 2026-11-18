import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteButton from "@/components/admin/DeleteButton";
import { Badge, EmptyRow, PageHeader, PrimaryLink, Table, Td, Th } from "@/components/admin/ui";

export const instant = false;

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });

  return (
    <>
      <PageHeader
        title="Projects"
        description={`${projects.length} projects`}
        action={<PrimaryLink href="/admin/projects/new">New project</PrimaryLink>}
      />
      <Table>
        <thead>
          <tr>
            <Th>Title</Th>
            <Th>Type</Th>
            <Th>Capacity</Th>
            <Th>Location</Th>
            <Th>Status</Th>
            <Th />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {projects.length === 0 && <EmptyRow cols={6} text="No projects yet." />}
          {projects.map((p) => (
            <tr key={p.id}>
              <Td>
                <Link href={`/admin/projects/${p.id}`} className="font-medium text-slate-900 hover:text-amber-700">
                  {p.title}
                </Link>
              </Td>
              <Td>{p.type}</Td>
              <Td>{p.capacity ?? "—"}</Td>
              <Td>{p.location ?? "—"}</Td>
              <Td>
                <Badge tone={p.published ? "green" : "slate"}>{p.published ? "Published" : "Draft"}</Badge>
              </Td>
              <Td className="space-x-4 whitespace-nowrap text-right">
                <Link href={`/admin/projects/${p.id}`} className="text-sm font-medium text-amber-700 hover:underline">
                  Edit
                </Link>
                <DeleteButton endpoint={`/api/admin/projects/${p.id}`} />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
