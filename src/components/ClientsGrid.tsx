"use client";

import { useEffect, useState } from "react";
import { MotionFade, MotionSection } from "@/components/ui/motion";
import {
  ClientLogoCell,
  useRandomClientLogos,
} from "@/components/ClientLogoRotator";
import { cn } from "@/lib/utils";

const VISIBLE_COUNT = 12;
const PAGE_COUNT = 4;
const DOT_INTERVAL_MS = 6500;

export default function ClientsGrid() {
  const logos = useRandomClientLogos(VISIBLE_COUNT);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveDot((current) => (current + 1) % PAGE_COUNT);
    }, DOT_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <MotionSection className="site-container w-full bg-white py-20 font-sans text-[#1A2334]">
      <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <MotionFade className="lg:col-span-3">
          <h2 className="text-[36px] font-semibold leading-[44px] tracking-normal text-[#1A2334]">
            Clients
          </h2>
        </MotionFade>

        <MotionFade className="lg:col-span-5" delay={0.1}>
          <p className="max-w-[420px] text-[28px] font-normal leading-[34px] tracking-normal text-[#CBA64B]">
            Our clients are everything to us;
            <br />
            so are we to them.
          </p>
        </MotionFade>
      </div>

      <div className="overflow-hidden rounded-sm border-l border-t border-[#E8DDC3] bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {logos.map((logo, index) => (
            <ClientLogoCell
              key={index}
              logo={logo}
              className="h-[110px] border-r border-b border-[#E8DDC3] px-6 py-5"
              imageClassName="max-h-[54px] max-w-[140px] object-contain"
            />
          ))}
        </div>
      </div>

      <MotionFade className="mt-6 flex items-center justify-center gap-2" delay={0.2}>
        {Array.from({ length: PAGE_COUNT }, (_, dot) => (
          <span
            key={dot}
            className={cn(
              "h-2 w-2 rounded-full transition-colors duration-300",
              dot === activeDot ? "bg-[#1A2334]" : "bg-[#D9D9D9]"
            )}
          />
        ))}
      </MotionFade>
    </MotionSection>
  );
}
