export function StatusBadge() {
  return (
    <div className="flex items-center gap-2 border border-border px-3 py-1.5">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="font-mono text-xs text-muted-foreground">
        Available for work
      </span>
    </div>
  );
}
