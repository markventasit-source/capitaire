"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const bottomLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
] as const;

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 hidden max-[589px]:block"
      aria-label="Mobile navigation"
    >
      <div className="relative mx-auto flex items-center gap-3 overflow-hidden rounded-t-[28px] border border-white/15 border-b-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_28%,rgba(31,43,66,0.28)_100%)] px-4 py-3.5 shadow-[0_-10px_40px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-2xl backdrop-saturate-200 supports-[backdrop-filter]:bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(31,43,66,0.22)_100%)]">
  
        <Link
          href="/"
          aria-label="Home"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#CBA64B]/90 shadow-[0_2px_12px_rgba(203,166,75,0.4)] backdrop-blur-md transition-opacity hover:opacity-90"
        >
          <Image
            src="/home.png"
            alt="homeicon"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
        </Link>

        <div className="flex flex-1 items-center justify-around gap-1">
          {bottomLinks.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-1 py-2 font-sans text-[16px] font-medium leading-[100%] tracking-normal transition-colors",
                  active ? "text-primary" : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}