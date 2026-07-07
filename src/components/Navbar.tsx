"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { MotionHero } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "QUESTIONS", href: "/questions" },
  { label: "SERVICES", href: "/services" },
  { label: "PROCESS", href: "/process" },
  { label: "BLOG", href: "/blog" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy">
      <nav className="site-container relative flex h-[88px] items-center justify-between">
        <MotionHero className="shrink-0">
          <Link href="/" className="block">
            <Image
              src="/logo.png"
              alt="Capitaire - Integrated Value Delivery"
              width={180}
              height={48}
              priority
              className="h-auto w-[140px] sm:w-[180px]"
            />
          </Link>
        </MotionHero>

        <MotionHero className="flex items-center gap-3 sm:gap-4 lg:gap-12" delay={0.15}>
          <ul className="hidden items-center gap-6 lg:flex lg:gap-8 xl:gap-10">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-[15px] leading-none uppercase transition-colors ${
                      active
                        ? "font-semibold text-primary"
                        : "font-normal text-white hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ShinyButton
            href="/contact"
            className="hidden shrink-0 rounded-md border-0 bg-[linear-gradient(90deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] px-5 py-3 shadow-none hover:shadow-none sm:inline-flex dark:hover:shadow-none [&>span:first-child]:text-[15px] [&>span:first-child]:font-semibold [&>span:first-child]:leading-none [&>span:first-child]:text-white [&>span:first-child]:uppercase [&>span:first-child]:tracking-normal"
          >
            Talk to Us
          </ShinyButton>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </MotionHero>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[88px] z-40 overflow-hidden border-t border-white/10 bg-navy lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
              }}
              className="site-container flex flex-col gap-1 py-6"
            >
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-3 text-[15px] leading-none uppercase transition-colors",
                        active
                          ? "bg-white/5 font-semibold text-primary"
                          : "font-normal text-white hover:bg-white/5 hover:text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35, ease: "easeOut" }}
              className="site-container border-t border-white/10 px-3 py-6"
            >
              <ShinyButton
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full justify-center rounded-md border-0 bg-[linear-gradient(90deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] px-5 py-3 shadow-none hover:shadow-none dark:hover:shadow-none [&>span:first-child]:text-[15px] [&>span:first-child]:font-semibold [&>span:first-child]:leading-none [&>span:first-child]:text-white [&>span:first-child]:uppercase [&>span:first-child]:tracking-normal"
              >
                Talk to Us
              </ShinyButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.button
            key="mobile-backdrop"
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[88px] z-30 bg-black/40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <ScrollProgress placement="bottom" />
    </header>
  );
}
