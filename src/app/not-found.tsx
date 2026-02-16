import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-6">
      <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
        Error 404
      </span>
      <h1 className="mt-4 text-6xl font-semibold tracking-tight">
        404<span className="text-muted-foreground/60">.</span>
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 border border-border px-5 py-2.5 font-mono text-xs tracking-wide text-muted-foreground transition-[background-color,color,border-color] hover:border-foreground/20 hover:text-foreground active:border-foreground/20 active:text-foreground active:scale-[0.98]"
      >
        Go home
      </Link>
    </div>
  );
}
