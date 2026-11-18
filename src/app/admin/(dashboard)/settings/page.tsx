import { prisma } from "@/lib/prisma";
import ResourceForm, { type FormValues } from "@/components/admin/ResourceForm";
import { settingsFields } from "@/components/admin/fields";
import { Card, PageHeader } from "@/components/admin/ui";

export const instant = false;

export default async function SettingsPage() {
  const settings = await prisma.siteSetting.findUnique({ where: { id: "main" } });

  if (!settings) {
    return (
      <>
        <PageHeader title="Site settings" />
        <Card>
          <p className="text-sm text-slate-600">
            No settings found. Run <code className="rounded bg-slate-100 px-1">npm run db:seed</code> to create defaults.
          </p>
        </Card>
      </>
    );
  }

  const { id: _id, ...values } = settings;
  void _id;

  return (
    <>
      <PageHeader title="Site settings" description="Company details, contacts, social links and default SEO." />
      <Card>
        <ResourceForm
          fields={settingsFields}
          initial={values as FormValues}
          endpoint="/api/admin/settings"
          method="PUT"
        />
      </Card>
    </>
  );
}
