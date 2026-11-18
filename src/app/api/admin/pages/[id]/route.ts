import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { guard, readJson } from "@/lib/api";
import { pageSchema } from "@/lib/validators";

type Ctx = { params: Promise<{ id: string }> };

// The slug is fixed (the public site routes depend on it), so only content is editable.
export async function PUT(req: Request, { params }: Ctx) {
  return guard(async () => {
    await requireAdmin();
    const { id } = await params;
    const data = pageSchema.parse(await readJson(req));
    const page = await prisma.page.update({ where: { id }, data });
    return NextResponse.json({ page });
  });
}
