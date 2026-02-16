import Link from "next/link";
import { Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";

const CONTACT_SOCIALS = [
  { label: "GitHub", href: SITE_CONFIG.github, icon: GithubIcon },
  { label: "LinkedIn", href: SITE_CONFIG.linkedin, icon: LinkedinIcon },
  { label: "X", href: SITE_CONFIG.twitter, icon: XIcon },
];

export function ContactSection() {
  return (
    <section className="border-b border-border">
      <div className="grid md:grid-cols-[200px_1fr]">
        <div className="border-b border-border px-6 py-6 md:border-b-0 md:border-r md:py-16">
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Contact
          </span>
        </div>

        <div className="px-6 py-10 md:py-16">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Got a project in mind? Let&apos;s talk.
          </p>

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="mt-5 inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs tracking-wide text-muted-foreground transition-[background-color,color,border-color] hover:border-foreground/20 hover:text-foreground active:border-foreground/20 active:text-foreground active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Mail className="h-3.5 w-3.5" />
            {SITE_CONFIG.email}
          </a>

          <div className="mt-8 flex gap-2">
            {CONTACT_SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-[background-color,color,border-color] hover:border-foreground/20 hover:text-foreground active:border-foreground/20 active:text-foreground active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
