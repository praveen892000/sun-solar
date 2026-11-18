"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteButton({
  endpoint,
  label = "Delete",
  confirmText = "Delete this item? This cannot be undone.",
  redirectTo,
}: {
  endpoint: string;
  label?: string;
  confirmText?: string;
  redirectTo?: string;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function onClick() {
    if (!window.confirm(confirmText)) return;
    setBusy(true);
    try {
      const res = await fetch(endpoint, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        window.alert(data.error ?? "Delete failed");
        return;
      }
      if (redirectTo) router.push(redirectTo);
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={busy}
      className="text-sm font-medium text-red-600 hover:text-red-800 disabled:opacity-50"
    >
      {busy ? "Deleting…" : label}
    </button>
  );
}
