import { SKILLS } from "@/lib/constants";
import { SKILL_ICONS } from "@/components/icons";

export function SkillsSection() {
  return (
    <section className="grid border-b border-border md:grid-cols-[200px_1fr]">
      <div className="border-b border-border px-6 py-6 md:border-b-0 md:border-r md:py-16">
        <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          Stack
        </span>
      </div>

      <div className="px-6 py-10 md:py-16">
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => {
            const Icon = SKILL_ICONS[skill];
            return (
              <span
                key={skill}
                className="inline-flex items-center gap-2 border border-border px-3 py-1.5 font-mono text-xs tracking-wide text-muted-foreground"
              >
                {Icon && <Icon size={14} color="currentColor" />}
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
