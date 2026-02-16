import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";

const FOOTER_SOCIALS = [
  { label: "GitHub", href: SITE_CONFIG.github, icon: GithubIcon },
  { label: "LinkedIn", href: SITE_CONFIG.linkedin, icon: LinkedinIcon },
  { label: "X", href: SITE_CONFIG.twitter, icon: XIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6">
      <p className="text-center font-mono text-xs text-muted-foreground text-balance">
        The source code is available on{" "}
        <a
          href={`${SITE_CONFIG.github}/ayushpandey.dev`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground transition-[color] hover:text-muted-foreground"
        >
          GitHub
        </a>
        . Inspired by{" "}
        <a
          href="https://chanhdai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground transition-[color] hover:text-muted-foreground"
        >
          chanhdai
        </a>
        .
      </p>

      <div className="my-3 flex justify-center">
        <div className="h-5 w-px bg-border" />
      </div>

      <div className="flex items-center justify-center gap-6 text-muted-foreground">
        {FOOTER_SOCIALS.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-[color] hover:text-foreground active:text-foreground active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={social.label}
          >
            <social.icon className="h-5 w-5" />
          </Link>
        ))}
      </div>

      <p className="mt-4 text-center font-mono text-xs text-muted-foreground/60">
        &copy; {new Date().getFullYear()} {SITE_CONFIG.name}
      </p>
    </footer>
  );
}
