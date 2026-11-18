import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { guard, readJson } from "@/lib/api";
import { enquiryStatusSchema, ENQUIRY_STATUSES } from "@/lib/validators";

export async function GET(req: NextRequest) {
  return guard(async () => {
    await requireAdmin();
    const status = req.nextUrl.searchParams.get("status");
    const where =
      status && (ENQUIRY_STATUSES as readonly string[]).includes(status)
        ? { status }
        : {};
    const enquiries = await prisma.enquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 1000,
    });
    return NextResponse.json({ enquiries });
  });
}

export async function PATCH(req: NextRequest) {
  return guard(async () => {
    await requireAdmin();
    const { id, status } = enquiryStatusSchema.parse(await readJson(req));
    const enquiry = await prisma.enquiry.update({
      where: { id },
      data: { status },
    });
    return NextResponse.json({ enquiry });
  });
}
