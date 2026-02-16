import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import { FlipTagline } from "@/components/hero/flip-tagline";
import { SITE_CONFIG } from "@/lib/constants";
import { StatusBadge } from "@/components/hero/status-badge";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";

function CornerMarks() {
  return (
    <>
      <span className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-muted-foreground/60" />
      <span className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-muted-foreground/60" />
      <span className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-muted-foreground/60" />
      <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-muted-foreground/60" />
    </>
  );
}

const HERO_SOCIALS = [
  { label: "GitHub", href: SITE_CONFIG.github, icon: GithubIcon },
  { label: "LinkedIn", href: SITE_CONFIG.linkedin, icon: LinkedinIcon },
  { label: "X", href: SITE_CONFIG.twitter, icon: XIcon },
];

export function HeroSection() {
  return (
    <section>
      <div className="grid border-b border-border md:grid-cols-[1fr_auto]">
        <div className="px-6 py-14 md:py-16">
          <span className="mb-6 inline-block font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Full-Stack Developer &bull; AI Enthusiast
          </span>

          <h1 className="text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-tight">
            Ayush Pandey<span className="text-muted-foreground/60">.</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/90 text-balance">
            17-year-old{" "}
            <span className="underline decoration-muted-foreground/40 underline-offset-4">problem solver</span> and{" "}
            <span className="underline decoration-muted-foreground/40 underline-offset-4">learner</span> from
            Nepal, exploring the space where{" "}
            <span className="underline decoration-muted-foreground/40 underline-offset-4">code meets real-world change</span>.
          </p>

          <div className="mt-6">
            <FlipTagline />
          </div>

          <div className="mt-5 flex items-center gap-2">
            {HERO_SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-[background-color,color,border-color] hover:border-foreground/20 hover:text-foreground active:border-foreground/20 active:text-foreground active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={social.label}
              >
                <social.icon className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-4 text-muted-foreground/60">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span className="font-mono text-xs tracking-wide">Nepal</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span className="font-mono text-xs tracking-wide">GMT +5:45</span>
            </div>
          </div>
        </div>

        <div className="hidden border-l border-border md:flex md:items-center md:justify-center md:p-10 lg:p-16">
          <div className="relative h-64 w-64 lg:h-72 lg:w-72">
            <CornerMarks />
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/Ayush.png"
                alt={SITE_CONFIG.name}
                fill
                priority
                className="object-cover grayscale transition-[filter] duration-500 hover:grayscale-0 active:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center border-b border-border py-12 md:hidden">
        <div className="relative h-52 w-52">
          <CornerMarks />
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/Ayush.png"
              alt={SITE_CONFIG.name}
              fill
              priority
              className="object-cover grayscale transition-[filter] duration-500 active:grayscale-0"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-4">
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="flex items-center gap-2 text-muted-foreground transition-[color] hover:text-foreground active:text-foreground"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" />
          <span className="font-mono text-xs tracking-wide truncate">
            {SITE_CONFIG.email}
          </span>
        </a>
        <StatusBadge />
      </div>
    </section>
  );
}
