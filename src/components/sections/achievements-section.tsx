import { Award } from "lucide-react";

const ACHIEVEMENTS: { title: string; issuer: string; year: string }[] = [];

export function AchievementsSection() {
  return (
    <section className="border-b border-border scroll-mt-16">
      <div className="grid md:grid-cols-[200px_1fr]">
        <div className="border-b border-border px-6 py-6 md:border-b-0 md:border-r md:py-16">
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Achievements
          </span>
        </div>
        <div className="px-6 py-10 md:py-16">
          {ACHIEVEMENTS.length === 0 ? (
            <p className="font-mono text-sm text-muted-foreground/60">
              Nothing here yet — working on it.
            </p>
          ) : (
            <div className="space-y-6">
              {ACHIEVEMENTS.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                  <div>
                    <h3 className="text-sm font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.issuer} &middot; {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
