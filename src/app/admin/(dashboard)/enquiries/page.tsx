import Link from "next/link";
import { prisma } from "@/lib/prisma";
import EnquiryStatusSelect from "@/components/admin/EnquiryStatusSelect";
import { EmptyRow, PageHeader, Table, Td, Th, formatDate } from "@/components/admin/ui";

export const instant = false;

const FILTERS = ["all", "new", "contacted", "converted", "closed"];

export default async function EnquiriesPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const active = status && FILTERS.includes(status) ? status : "all";

  const enquiries = await prisma.enquiry.findMany({
    where: active === "all" ? {} : { status: active },
    orderBy: { createdAt: "desc" },
    take: 500,
  });

  return (
    <>
      <PageHeader title="Enquiries" description="Leads submitted through the website forms." />

      <div className="mb-4 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <Link
            key={f}
            href={f === "all" ? "/admin/enquiries" : `/admin/enquiries?status=${f}`}
            className={`rounded-full px-3 py-1 text-sm capitalize ${
              active === f
                ? "bg-slate-900 text-white"
                : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
            }`}
          >
            {f}
          </Link>
        ))}
      </div>

      <Table>
        <thead>
          <tr>
            <Th>Received</Th>
            <Th>Contact</Th>
            <Th>Details</Th>
            <Th>Message</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {enquiries.length === 0 && <EmptyRow cols={5} text="No enquiries found." />}
          {enquiries.map((e) => (
            <tr key={e.id}>
              <Td className="whitespace-nowrap">{formatDate(e.createdAt)}</Td>
              <Td>
                <p className="font-medium text-slate-900">{e.fullName}</p>
                <a href={`tel:${e.phone}`} className="text-amber-700 hover:underline">
                  {e.phone}
                </a>
                <br />
                <a href={`mailto:${e.email}`} className="text-amber-700 hover:underline">
                  {e.email}
                </a>
              </Td>
              <Td>
                <p>{e.lookingFor ?? "—"}</p>
                {e.ebConsumerNo && <p className="text-xs text-slate-500">EB: {e.ebConsumerNo}</p>}
                {e.pincode && <p className="text-xs text-slate-500">PIN: {e.pincode}</p>}
                <p className="text-xs text-slate-400">via {e.source}</p>
              </Td>
              <Td className="max-w-xs whitespace-pre-wrap">{e.message ?? "—"}</Td>
              <Td>
                <EnquiryStatusSelect id={e.id} status={e.status} />
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
