import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { NavLinks } from "@/components/layout/nav-links";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Separator } from "@/components/ui/separator";
import { GithubIcon } from "@/components/icons";
import { SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center border-x border-border px-6">
        <Logo />

        <Separator orientation="vertical" className="!h-5 mx-3 hidden md:block" />

        <NavLinks />

        <div className="ml-auto flex items-center gap-1">
          <Link
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-[background-color,color] hover:bg-accent hover:text-foreground active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </Link>

          <Separator orientation="vertical" className="!h-5 mx-3 hidden md:block" />

          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
