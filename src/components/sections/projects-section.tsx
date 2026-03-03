import { ArrowUpRight } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  TypeScript: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.382.585-.203.703-.25 1.328-.605.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.05-.139.145-.139.241v10.15c0 .097.055.19.137.236l2.408 1.391c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.921c0-.661.352-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.943.924 1.603v10.15c0 .661-.354 1.275-.924 1.604l-8.794 5.076c-.282.164-.6.247-.925.247zm2.718-6.993c-3.85 0-4.658-1.769-4.658-3.251 0-.142.114-.253.256-.253h1.138c.127 0 .233.091.252.216.172 1.163.684 1.749 3.013 1.749 1.853 0 2.64-.419 2.64-1.401 0-.566-.224-.986-3.1-1.268-2.405-.238-3.889-.769-3.889-2.692 0-1.773 1.494-2.829 3.997-2.829 2.811 0 4.202.976 4.378 3.073.007.074-.019.146-.068.2-.049.053-.117.083-.189.083h-1.143c-.12 0-.226-.083-.25-.199-.274-1.222-.943-1.614-2.728-1.614-2.009 0-2.242.699-2.242 1.222 0 .635.276.82 3.005 1.177 2.701.354 3.977.856 3.977 2.772-.001 1.916-1.597 3.015-4.388 3.015z" />
    </svg>
  ),
  Discord: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028 13.93 13.93 0 0 0 1.226-1.994.072.072 0 0 0-.041-.101 13.15 13.15 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.101c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  ),
  Telegram: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  ),
  "Open Source": (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
};

const PROJECTS: {
  title: string;
  logo: React.ReactNode;
  description: string;
  tags: string[];
  href: string;
}[] = [
  {
    title: "Arvis",
    logo: <img src="/arvis.svg" alt="Arvis" className="h-6 w-auto" />,
    description:
      "Self-hosted AI agent platform that routes Discord, Telegram, Slack, and WhatsApp messages to teams of specialized AI agents. Silent failover, automatic memory, and full cost tracking across every LLM provider.",
    tags: ["TypeScript", "Node.js", "Discord", "Telegram", "Open Source"],
    href: "https://github.com/Arvis-agent/arvis",
  },
];

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
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground/60">
              Selected work
            </span>
            <span className="font-mono text-xs text-muted-foreground/60 tabular-nums">
              {String(PROJECTS.length).padStart(2, "0")} items
            </span>
          </div>
        </div>
      </div>

      {PROJECTS.map((project, i) => (
        <a
          key={project.title}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid border-t border-border transition-[background-color] hover:bg-accent/30 md:grid-cols-[200px_1fr] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <div className="border-b border-border px-6 py-4 md:border-b-0 md:border-r md:py-6 flex flex-col justify-between gap-6">
            <span className="font-mono text-xs text-muted-foreground/60 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>{project.logo}</div>
          </div>

          <div className="flex items-start justify-between gap-4 px-6 py-5 md:py-6">
            <div className="min-w-0">
              <h3 className="text-sm font-medium tracking-tight">
                {project.title}
              </h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-border/80"
                  >
                    {icons[tag] && (
                      <span className="text-muted-foreground/70">
                        {icons[tag]}
                      </span>
                    )}
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
