export function AboutSection() {
  return (
    <section id="about" className="grid border-b border-border scroll-mt-16 md:grid-cols-[200px_1fr]">
      <div className="border-b border-border px-6 py-6 md:border-b-0 md:border-r md:py-16">
        <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          About
        </span>
      </div>

      <div className="px-6 py-10 md:py-16">
        <p className="max-w-lg text-sm leading-relaxed text-foreground">
          I&apos;m a 17-year-old student from Nepal who writes code to
          solve problems, not to follow trends. I pick up whatever
          tool the problem demands, learn it fast, and figure things out.
        </p>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Currently exploring AI and full-stack development, breaking
          things, fixing things, and getting better every day.
        </p>
      </div>
    </section>
  );
}
