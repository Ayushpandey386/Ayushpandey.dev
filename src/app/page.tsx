import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/fade-in";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="mx-4 my-6 border-t border-x border-border">
        <FadeIn>
          <AboutSection />
        </FadeIn>
        <FadeIn>
          <SkillsSection />
        </FadeIn>
        <FadeIn>
          <ProjectsSection />
        </FadeIn>
        <FadeIn>
          <ExperienceSection />
        </FadeIn>
        <FadeIn>
          <AchievementsSection />
        </FadeIn>
        <FadeIn>
          <ContactSection />
        </FadeIn>
      </div>

      <FadeIn>
        <Footer />
      </FadeIn>
    </>
  );
}
