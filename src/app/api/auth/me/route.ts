import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { guard } from "@/lib/api";

export async function GET() {
  return guard(async () => {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({
      admin: { id: session.adminId, email: session.email, name: session.name },
    });
  });
}
