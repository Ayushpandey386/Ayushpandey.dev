"use client";

import { useState, useEffect, useRef } from "react";
import { TAGLINES } from "@/lib/constants";

const GLITCH = "!@#$%^&*_+-=|;:<>?~";

export function FlipTagline() {
  const [display, setDisplay] = useState<string>(TAGLINES[0]);
  const [glitching, setGlitching] = useState(false);
  const idx = useRef(0);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const cycle = setInterval(() => {
      if (frameRef.current) clearInterval(frameRef.current);

      idx.current = (idx.current + 1) % TAGLINES.length;
      const target = TAGLINES[idx.current];
      let pos = 0;

      setGlitching(true);

      frameRef.current = setInterval(() => {
        pos++;
        const result = target
          .split("")
          .map((c, i) => {
            if (c === " ") return " ";
            if (i < pos) return c;
            return GLITCH[Math.floor(Math.random() * GLITCH.length)];
          })
          .join("");

        setDisplay(result);

        if (pos >= target.length) {
          if (frameRef.current) clearInterval(frameRef.current);
          frameRef.current = null;
          setDisplay(target);
          setGlitching(false);
        }
      }, 55);
    }, 4000);

    return () => {
      clearInterval(cycle);
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, []);

  return (
    <div className="flex items-center gap-2" aria-live="polite">
      <span className="font-mono text-sm text-muted-foreground/60">&gt;</span>
      <span className={`font-pixel text-sm text-muted-foreground transition-[opacity] duration-150 ${glitching ? "opacity-70" : "opacity-100"}`}>
        {display}
      </span>
    </div>
  );
}
