"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
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

const compactMenuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const compact = window.matchMedia("(max-width: 589px)");

    const onScroll = () => {
      if (!compact.matches) {
        setHidden(false);
        setAtTop(true);
        return;
      }

      const y = window.scrollY;
      const isTop = y < 24;
      setAtTop(isTop);

      if (mobileOpen || isTop) {
        setHidden(false);
        lastY.current = y;
        return;
      }

      if (y > lastY.current + 8 && y > 72) {
        setHidden(true);
      } else if (y < lastY.current - 8) {
        setHidden(false);
      }

      lastY.current = y;
    };

    lastY.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    compact.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      compact.removeEventListener("change", onScroll);
    };
  }, [mobileOpen]);

  const solid = !atTop;

  return (
    <>
    <motion.header
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-navy transition-colors duration-300",
        atTop
          ? "max-[589px]:bg-transparent"
          : "max-[589px]:bg-white max-[589px]:shadow-[0_8px_28px_rgba(11,18,32,0.12)]"
      )}
    >
      <nav className="site-container relative flex h-[88px] items-center justify-between max-[589px]:h-[80px] max-[589px]:items-end max-[589px]:px-5 max-[589px]:pb-3 max-[589px]:pt-3">
        <MotionHero className="shrink-0">
          <Link href="/" className="block">
            <Image
              src="/logo.png"
              alt="Capitaire - Integrated Value Delivery"
              width={180}
              height={48}
              priority
              className="h-auto w-[140px] max-[589px]:w-[168px] sm:w-[180px]"
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
            className="hidden shrink-0 rounded-md border-0 bg-[linear-gradient(90deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] px-5 py-3 shadow-none hover:shadow-none max-[589px]:!hidden sm:inline-flex dark:hover:shadow-none [&>span:first-child]:text-[15px] [&>span:first-child]:font-semibold [&>span:first-child]:leading-none [&>span:first-child]:text-white [&>span:first-child]:uppercase [&>span:first-child]:tracking-normal"
          >
            Talk to Us
          </ShinyButton>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 max-[589px]:h-11 max-[589px]:w-11 max-[589px]:rounded-full max-[589px]:border-0 max-[589px]:text-[#CBA64B] lg:hidden",
              solid
                ? "max-[589px]:bg-[#1A2334] max-[589px]:shadow-none max-[589px]:hover:bg-[#121A2A]"
                : "max-[589px]:bg-[linear-gradient(145deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_100%)] max-[589px]:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] max-[589px]:hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.08)_100%)]"
            )}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <>
                <span
                  className="hidden flex-col items-end gap-[5px] max-[589px]:flex"
                  aria-hidden
                >
                  <span className="block h-[1.5px] w-[11px] rounded-full bg-current" />
                  <span className="block h-[1.5px] w-5 rounded-full bg-current" />
                </span>
                <Menu className="h-6 w-6 max-[589px]:hidden" />
              </>
            )}
          </button>
        </MotionHero>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="tablet-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[88px] z-40 hidden overflow-hidden border-t border-white/10 bg-navy min-[590px]:block lg:hidden"
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
            key="tablet-backdrop"
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[88px] z-30 hidden bg-black/40 min-[590px]:block lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="max-[589px]:hidden">
        <ScrollProgress placement="bottom" />
      </div>
    </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="compact-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] hidden h-dvh flex-col bg-[#1A2334] px-5 max-[589px]:flex"
          >
            <div className="flex h-[80px] items-end justify-between pb-3 pt-3">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block">
                <Image
                  src="/logo.png"
                  alt="Capitaire - Integrated Value Delivery"
                  width={168}
                  height={45}
                  className="h-auto w-[168px]"
                />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="flex h-11 w-11 items-center justify-center text-[#CBA64B]"
              >
                <X className="h-7 w-7" strokeWidth={1.6} />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
              }}
              className="flex flex-1 flex-col gap-8 pt-14"
            >
              {compactMenuItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "font-[family-name:var(--font-inter)] text-[21px] font-normal leading-none tracking-normal",
                        active ? "text-[#CBA64B]" : "text-[#A5ADBC]"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>

            <div className="border-t border-white/15 pb-[max(4.5rem,calc(3rem+env(safe-area-inset-bottom)))] pt-6 pr-5">
              <p className="font-[family-name:var(--font-inter)] text-[13px] font-medium leading-none tracking-normal text-[#CBA64B]">
                General Enquiries
              </p>
              <Link
                href="mailto:info@capitaire.com"
                className="mt-3 block font-[family-name:var(--font-inter)] text-[20px] font-medium leading-none tracking-normal text-white"
              >
                info@capitaire.com
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
