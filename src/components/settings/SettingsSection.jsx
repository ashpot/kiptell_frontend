import Card from "@/components/common/Card";

/** Card with an icon + title header; children are stacked rows separated by lines. */
export function SettingsSection({ icon: Icon, title, children }) {
  return (
    <Card className="overflow-hidden">
      <h2 className="flex items-center gap-3 border-b border-line px-7 py-5 text-[17px] font-semibold">
        <Icon size={16} strokeWidth={1.5} className="text-muted" />
        {title}
      </h2>
      <div className="divide-y divide-line">{children}</div>
    </Card>
  );
}

/** One row: title (+ optional description) on the left, a control on the right. */
export function SettingRow({ title, description, children }) {
  return (
    <div className="flex items-center justify-between gap-6 px-7 py-5">
      <div className="min-w-0">
        <h3 className="text-[15px] font-semibold leading-6">{title}</h3>
        {description && <p className="mt-0.5 text-sm text-muted">{description}</p>}
      </div>
      {children}
    </div>
  );
}