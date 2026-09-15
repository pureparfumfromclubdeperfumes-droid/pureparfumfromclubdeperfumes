export default function Loader({ label }: { label: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="flex flex-col items-center gap-3 rounded-lg bg-white px-8 py-6 dark:bg-neutral-900">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-black/20 border-t-black dark:border-white/20 dark:border-t-white" />
        <p className="text-sm text-black/70 dark:text-white/70">{label}</p>
      </div>
    </div>
  );
}
