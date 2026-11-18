"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const STATUSES = ["new", "contacted", "converted", "closed"];

export default function EnquiryStatusSelect({
  id,
  status,
}: {
  id: string;
  status: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState(status);
  const [busy, setBusy] = useState(false);

  async function onChange(next: string) {
    const prev = value;
    setValue(next);
    setBusy(true);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: next }),
      });
      if (!res.ok) {
        setValue(prev);
        window.alert("Could not update status");
        return;
      }
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <select
      value={value}
      disabled={busy}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm text-slate-900"
    >
      {STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
