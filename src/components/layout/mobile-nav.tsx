"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";

const MOBILE_SOCIALS = [
  { label: "GitHub", href: SITE_CONFIG.github, icon: GithubIcon },
  { label: "LinkedIn", href: SITE_CONFIG.linkedin, icon: LinkedinIcon },
  { label: "X", href: SITE_CONFIG.twitter, icon: XIcon },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-72 border-l-border bg-background p-0"
      >
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <div className="flex h-14 items-center justify-between border-b border-border px-6">
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Navigation
          </span>
          <button
            onClick={() => setOpen(false)}
            className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border px-6 py-4 font-mono text-sm tracking-wide text-foreground transition-colors active:bg-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 py-6">
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Theme
          </span>
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => setTheme("light")}
              className={`flex-1 border px-3 py-2 font-mono text-xs tracking-wide transition-colors ${
                resolvedTheme === "light"
                  ? "border-foreground/20 bg-accent text-foreground"
                  : "border-border text-muted-foreground active:bg-accent"
              }`}
            >
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`flex-1 border px-3 py-2 font-mono text-xs tracking-wide transition-colors ${
                resolvedTheme === "dark"
                  ? "border-foreground/20 bg-accent text-foreground"
                  : "border-border text-muted-foreground active:bg-accent"
              }`}
            >
              Dark
            </button>
          </div>
        </div>

        <Separator />

        <div className="px-6 py-6">
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            Connect
          </span>
          <div className="mt-3 flex gap-2">
            {MOBILE_SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors active:bg-accent active:text-foreground"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-auto border-t border-border px-6 py-4">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="font-mono text-xs tracking-wide text-muted-foreground transition-colors active:text-foreground"
          >
            {SITE_CONFIG.email}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
