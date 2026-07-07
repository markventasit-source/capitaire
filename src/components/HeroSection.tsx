"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Threads from "@/components/Threads";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  MotionHero,
  MotionItem,
  MotionStagger,
} from "@/components/ui/motion";

const heroCards = [
  { icon: "/growth.png", label: "Grow", alt: "Grow Icon" },
  { icon: "/data.png", label: "Protect", alt: "Protect Icon" },
  { icon: "/opposite.png", label: "Transfer", alt: "Transfer Icon" },
];

const metrics = [
  { value: 260, label: "Businesses Empowered" },
  { value: 150, label: "Transactions Advised" },
  { value: 120, label: "Business Valuations" },
  { value: 60, label: "Investor Agreements" },
  { value: 8, label: "Years Track Record", span: "col-span-2 md:col-span-1" },
];

const threadColor: [number, number, number] = [132 / 255, 142 / 255, 163 / 255];
const threadColorLight: [number, number, number] = [165 / 255, 173 / 255, 188 / 255];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative flex w-full max-w-full min-h-[600px] flex-col justify-between overflow-x-clip bg-navy font-sans text-white selection:bg-primary/30"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        style={{
          maskImage: isMobile
            ? "linear-gradient(180deg, black 20%, rgba(0,0,0,0.4) 80%)"
            : "linear-gradient(315deg, black 20%, rgba(0,0,0,0.5) 70%)",
          WebkitMaskImage: isMobile
            ? "linear-gradient(180deg, black 20%, rgba(0,0,0,0.4) 80%)"
            : "linear-gradient(315deg, black 20%, rgba(0,0,0,0.5) 70%)",
        }}
      >
        <Threads
          color={threadColor}
          colorSecondary={threadColorLight}
          amplitude={isMobile ? 0.9 : 1.6}
          distance={isMobile ? 0.5 : 0.8}
          lineCount={isMobile ? 60 : 180}
          lineWidth={isMobile ? 3 : 6}
          lineBlur={isMobile ? 8 : 10}
          patternOffset={0.38}
          enableMouseInteraction={!isMobile}
          interactionTargetRef={heroRef}
          className="h-full min-h-full w-full"
        />
      </div>
      <main className="site-container relative z-10 grid w-full flex-grow grid-cols-1 items-center gap-12 pt-20 pb-12 lg:grid-cols-12">
        <MotionHero className="flex flex-col gap-6 lg:col-span-7" delay={0.1}>
          <h1 className="text-[40px] font-semibold leading-[48px] tracking-normal md:text-[60px] md:leading-[65px]">
            From uncertainty to <br className="hidden md:inline" />
            an investor-ready <br />
            business.
          </h1>

          <p className="max-w-xl text-base font-normal leading-6 text-[#A5ADBC]">
            We help promoters understand valuation, raise-ready structure,
            investor terms, cross-border capital, governance, and succession with
            one connected advisory journey.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="cursor-pointer rounded-sm bg-white px-6 py-3 text-sm font-medium tracking-wider text-navy uppercase transition-all hover:bg-white/90">
              Explore Services
            </button>
            <button className="cursor-pointer rounded-sm border border-[#cba64b]/40 px-6 py-3 text-sm font-medium tracking-wider text-primary uppercase transition-all hover:border-primary hover:bg-primary/10">
              Find Your Starting Point
            </button>
          </div>
        </MotionHero>

        <div className="grid w-full grid-cols-3 gap-2 sm:gap-4 lg:col-span-5">
          {heroCards.map((card, index) => (
            <BlurFade
              key={card.label}
              delay={index * 0.12}
              direction="up"
              className="group flex w-full flex-col items-center justify-center gap-2 rounded-[6px] border border-white/5 bg-[#1F293D] p-3 text-center backdrop-blur-sm transition-all hover:border-primary/20 sm:gap-6 sm:p-6 sm:h-[228.25px]"
            >
              <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110 sm:h-[115.5px] sm:w-[115.5px]">
                <Image src={card.icon} alt={card.alt} fill className="object-contain" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase sm:text-sm">{card.label}</span>
            </BlurFade>
          ))}
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#1F293D]/88 backdrop-blur-md">
        <MotionStagger className="site-container grid grid-cols-2 items-start gap-8 py-8 md:grid-cols-5">
          {metrics.map((metric) => (
            <MotionItem
              key={metric.label}
              className={`border-l border-white/20 pl-4 ${metric.span ?? ""}`}
            >
              <div className="mb-1 text-3xl font-semibold text-primary md:text-4xl">
                <NumberTicker value={metric.value} />+
              </div>
              <div className="text-xs leading-4 font-medium tracking-wider text-[#848EA3] uppercase">
                {metric.label}
              </div>
            </MotionItem>
          ))}
        </MotionStagger>
      </footer>
    </div>
  );
}
