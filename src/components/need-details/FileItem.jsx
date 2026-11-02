/** Read-only file row used in Supporting Evidence */
export default function FileItem({ icon: Icon, name, size }) {
  return (
    <li className="flex items-center gap-3.5 rounded-2xl bg-surface px-4 py-3.5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-200/70 text-muted">
        <Icon size={18} strokeWidth={1.5} />
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{name}</p>
        <p className="text-xs text-muted">{size}</p>
      </div>
    </li>
  );
}