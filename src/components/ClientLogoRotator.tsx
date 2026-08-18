"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const clientLogos = [
  "/c1.jpg",
  "/c2.png",
  "/c3.png",
  "/c4.jpg",
  "/c5.jpg",
  "/c6.png",
  "/c7.png",
  "/c8.jpg",
  "/c9.png",
  "/c10.png",
  "/c11.png",
  "/c12.png",
  "/c13.jpg",
  "/c14.png",
  "/c15.png",
] as const;

const ROTATE_MS = 6500;

export function useRandomClientLogos(visibleCount: number) {
  const [slots, setSlots] = useState(() => clientLogos.slice(0, visibleCount));

  useEffect(() => {
    if (clientLogos.length <= visibleCount) return;

    const timer = window.setInterval(() => {
      setSlots((current) => {
        const unused = clientLogos.filter((logo) => !current.includes(logo));
        if (unused.length === 0) return current;

        const slotIndex = Math.floor(Math.random() * current.length);
        const nextLogo = unused[Math.floor(Math.random() * unused.length)];
        const next = [...current];
        next[slotIndex] = nextLogo;
        return next;
      });
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [visibleCount]);

  return slots;
}

type ClientLogoCellProps = {
  logo: string;
  imageClassName?: string;
  className?: string;
};

export function ClientLogoCell({
  logo,
  imageClassName,
  className,
}: ClientLogoCellProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={logo}
          src={logo}
          alt="Client logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={imageClassName}
        />
      </AnimatePresence>
    </div>
  );
}
