import { GraduationCap } from "lucide-react";

const EDUCATION: { school: string; grade: string; period: string; status: string }[] = [
  {
    school: "New Horizon Eng. Boarding School",
    grade: "11th – 12th Grade",
    period: "Present",
    status: "Currently studying",
  },
  {
    school: "Dawn Model Academy",
    grade: "10th Grade",
    period: "Completed",
    status: "Graduated",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-border scroll-mt-16">
      <div className="grid md:grid-cols-[200px_1fr]">
        <div className="border-b border-border px-6 py-6 md:border-b-0 md:border-r md:py-16">
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Education
          </span>
        </div>
        <div className="px-6 py-10 md:py-16">
          <div className="relative pl-12">
            <div className="space-y-10">
              {EDUCATION.map((edu, i) => (
                <div key={edu.school} className="relative">
                  <div
                    className={`absolute -left-12 top-0 flex h-[35px] w-[35px] items-center justify-center rounded-full border ${
                      i === 0
                        ? "border-foreground/20 bg-foreground/10 text-foreground"
                        : "border-border bg-background text-muted-foreground/60"
                    }`}
                  >
                    <GraduationCap className="h-4 w-4" />
                  </div>

                  {i < EDUCATION.length - 1 && (
                    <div className="absolute -left-[31px] top-[35px] bottom-[-40px] w-px bg-border" />
                  )}

                  <div className="pt-1">
                    <span className="font-mono text-xs tracking-wide text-muted-foreground/60">
                      {edu.period}
                    </span>
                    <h3 className="mt-1 text-sm font-medium tracking-tight">
                      {edu.school}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {edu.grade} &middot; {edu.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
