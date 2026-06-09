const STYLES = {
  new: 'bg-amber-50 text-amber-800 ring-amber-200/80',
  read: 'bg-blue-50 text-blue-800 ring-blue-200/80',
  responded: 'bg-emerald-50 text-emerald-800 ring-emerald-200/80',
  active: 'bg-emerald-50 text-emerald-800 ring-emerald-200/80',
  inactive: 'bg-slate-100 text-slate-600 ring-slate-200/80',
} as const;

export default function StatusBadge({
  status,
}: {
  status: keyof typeof STYLES | string;
}) {
  const style = STYLES[status as keyof typeof STYLES] ?? STYLES.inactive;
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold capitalize ring-1 ring-inset ${style}`}
    >
      {status}
    </span>
  );
}
