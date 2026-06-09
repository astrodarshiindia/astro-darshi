export default function AdminLoading({ label = 'Loading workspace…' }: { label?: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f6f7f9]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />
        <p className="text-sm text-slate-500">{label}</p>
      </div>
    </div>
  );
}
