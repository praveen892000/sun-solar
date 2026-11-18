"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "number" | "checkbox" | "select" | "date" | "email" | "password";
  options?: { value: string; label: string }[];
  rows?: number;
  help?: string;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  /** Renders a section heading above this field. */
  section?: string;
  /** Render in a half-width column on wide screens. */
  half?: boolean;
  mono?: boolean;
};

export type FormValues = Record<string, string | number | boolean | null | undefined>;

type Props = {
  fields: FieldDef[];
  initial: FormValues;
  endpoint: string;
  method: "POST" | "PUT";
  /** Where to go after a successful save. If omitted, stays on the page and shows a notice. */
  successHref?: string;
  submitLabel?: string;
  /** Extra fields merged into the payload (e.g. fixed IDs). */
  extraPayload?: Record<string, unknown>;
  /** Clear the form after success (useful for "add" forms that stay on the page). */
  resetOnSuccess?: boolean;
};

const inputClass =
  "block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 read-only:bg-slate-100";

export default function ResourceForm({
  fields,
  initial,
  endpoint,
  method,
  successHref,
  submitLabel = "Save",
  extraPayload,
  resetOnSuccess,
}: Props) {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initial);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState<string | null>(null);

  function setValue(name: string, value: string | boolean) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setFieldErrors({});
    setNotice(null);

    const payload: Record<string, unknown> = { ...extraPayload };
    for (const f of fields) {
      if (f.readOnly) continue;
      const v = values[f.name];
      if (f.type === "checkbox") payload[f.name] = Boolean(v);
      else if (f.type === "number") payload[f.name] = v === "" || v == null ? undefined : Number(v);
      else payload[f.name] = v ?? "";
    }

    try {
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 401) {
          router.push("/admin/login");
          return;
        }
        setError(data.error ?? "Something went wrong");
        if (data.fields) setFieldErrors(data.fields);
        return;
      }
      if (resetOnSuccess) setValues(initial);
      if (successHref) {
        router.push(successHref);
      } else {
        setNotice("Saved successfully.");
      }
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-2">
        {fields.map((f) => {
          const type = f.type ?? "text";
          const id = `f-${f.name}`;
          const err = fieldErrors[f.name];
          const full = !f.half;
          const val = values[f.name];

          return (
            <div key={f.name} className={full ? "md:col-span-2" : ""}>
              {f.section && (
                <h3 className="mb-3 mt-4 border-b border-slate-200 pb-1 text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {f.section}
                </h3>
              )}
              {type === "checkbox" ? (
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <input
                    id={id}
                    type="checkbox"
                    checked={Boolean(val)}
                    onChange={(e) => setValue(f.name, e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                  />
                  {f.label}
                </label>
              ) : (
                <>
                  <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-700">
                    {f.label}
                    {f.required && <span className="text-red-600"> *</span>}
                  </label>
                  {type === "textarea" ? (
                    <textarea
                      id={id}
                      rows={f.rows ?? 4}
                      value={String(val ?? "")}
                      onChange={(e) => setValue(f.name, e.target.value)}
                      placeholder={f.placeholder}
                      readOnly={f.readOnly}
                      className={`${inputClass} ${f.mono ? "font-mono text-xs" : ""}`}
                    />
                  ) : type === "select" ? (
                    <select
                      id={id}
                      value={String(val ?? "")}
                      onChange={(e) => setValue(f.name, e.target.value)}
                      className={inputClass}
                    >
                      {!f.required && <option value="">—</option>}
                      {f.required && !val && <option value="">Select…</option>}
                      {f.options?.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={id}
                      type={type}
                      value={String(val ?? "")}
                      onChange={(e) => setValue(f.name, e.target.value)}
                      placeholder={f.placeholder}
                      readOnly={f.readOnly}
                      required={f.required}
                      className={inputClass}
                    />
                  )}
                </>
              )}
              {f.help && <p className="mt-1 text-xs text-slate-500">{f.help}</p>}
              {err && <p className="mt-1 text-xs text-red-600">{err}</p>}
            </div>
          );
        })}
      </div>

      {error && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
      {notice && (
        <p className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
          {notice}
        </p>
      )}

      <button
        type="submit"
        disabled={saving}
        className="rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 disabled:opacity-60"
      >
        {saving ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}
