import { ArrowUpRight } from "lucide-react";

const PROJECTS: { title: string; description: string; tags: string[]; href: string }[] = [];

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border scroll-mt-16">
      <div className="grid md:grid-cols-[200px_1fr]">
        <div className="border-b border-border px-6 py-6 md:border-b-0 md:border-r md:py-16">
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Projects
          </span>
        </div>
        <div className="px-6 py-10 md:py-16">
          {PROJECTS.length === 0 ? (
            <p className="font-mono text-sm text-muted-foreground/60">
              No projects yet — cooking something up.
            </p>
          ) : (
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground/60">
                Selected work
              </span>
              <span className="font-mono text-xs text-muted-foreground/60 tabular-nums">
                {String(PROJECTS.length).padStart(2, "0")} items
              </span>
            </div>
          )}
        </div>
      </div>

      {PROJECTS.map((project, i) => (
        <a
          key={project.title}
          href={project.href}
          className="group grid border-t border-border transition-[background-color] hover:bg-accent/30 md:grid-cols-[200px_1fr] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <div className="border-b border-border px-6 py-4 md:border-b-0 md:border-r md:py-6">
            <span className="font-mono text-xs text-muted-foreground/60 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 px-6 py-5 md:py-6">
            <div className="min-w-0">
              <h3 className="text-sm font-medium tracking-tight">
                {project.title}
              </h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs uppercase tracking-wide text-muted-foreground/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60 transition-[color,transform] group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </a>
      ))}
    </section>
  );
}
