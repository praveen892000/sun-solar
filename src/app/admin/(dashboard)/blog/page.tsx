import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteButton from "@/components/admin/DeleteButton";
import { Badge, EmptyRow, PageHeader, PrimaryLink, Table, Td, Th, formatDate } from "@/components/admin/ui";

export const instant = false;

export default async function BlogListPage() {
  const posts = await prisma.blogPost.findMany({ orderBy: { publishedAt: "desc" } });

  return (
    <>
      <PageHeader
        title="Blog"
        description={`${posts.length} posts`}
        action={<PrimaryLink href="/admin/blog/new">New post</PrimaryLink>}
      />
      <Table>
        <thead>
          <tr>
            <Th>Title</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {posts.length === 0 && <EmptyRow cols={4} text="No posts yet." />}
          {posts.map((p) => (
            <tr key={p.id}>
              <Td>
                <Link href={`/admin/blog/${p.id}`} className="font-medium text-slate-900 hover:text-amber-700">
                  {p.title}
                </Link>
                <p className="text-xs text-slate-400">/blog/{p.slug}</p>
              </Td>
              <Td className="whitespace-nowrap">{formatDate(p.publishedAt)}</Td>
              <Td>
                <Badge tone={p.published ? "green" : "slate"}>{p.published ? "Published" : "Draft"}</Badge>
              </Td>
              <Td className="space-x-4 whitespace-nowrap text-right">
                <Link href={`/admin/blog/${p.id}`} className="text-sm font-medium text-amber-700 hover:underline">
                  Edit
                </Link>
                <DeleteButton endpoint={`/api/admin/blog/${p.id}`} />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
