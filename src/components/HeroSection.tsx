"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Threads from "@/components/Threads";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { ShinyButton } from "@/components/ui/shiny-button";
import MobileHeroGraphic from "@/components/MobileHeroGraphic";
import {
  MotionHero,
  MotionItem,
  MotionStagger,
} from "@/components/ui/motion";

export const mobileHeroTitles = [
  "Capital Structuring",
  "Cross-Border Advisory",
  "Business Governance",
  "Business Succession",
] as const;

const heroCards = [
  { icon: "/growth.png", label: "Grow", alt: "Grow Icon" },
  { icon: "/data.png", label: "Protect", alt: "Protect Icon" },
  { icon: "/opposite.png", label: "Transfer", alt: "Transfer Icon" },
];

const metrics = [
  { value: 260, label: "Businesses Empowered" },
  { value: 150, label: "Transactions Advised" },
  { value: 120, label: "Business Valuations" },
  { value: 100, label: "Investor Onboardings" },
  {
    value: 60,
    label: "Companies' IFC Processes Implemented",
    span: "col-span-2 md:col-span-1",
  },
];

const threadColor: [number, number, number] = [132 / 255, 142 / 255, 163 / 255];
const threadColorLight: [number, number, number] = [165 / 255, 173 / 255, 188 / 255];

function MobileHero() {
  return (
    <section className="relative z-10 hidden min-h-[calc(100dvh-80px-76px)] w-full flex-col items-center justify-center bg-transparent px-6 pb-8 pt-4 text-center max-[589px]:flex">
      <div className="relative mb-8">
        <MobileHeroGraphic />
      </div>

      <MotionHero className="flex flex-col items-center mt-12 gap-2" delay={0.12}>
        <p className="font-sans text-[20px] font-normal leading-[100%] tracking-normal text-white/95">
          Your Trusted Partner in:
        </p>
        <TypingAnimation
          as="h1"
          words={mobileHeroTitles.map((title) => `${title}!`)}
          delay={400}
          typeSpeed={60}
          deleteSpeed={35}
          pauseDelay={1400}
          loop
          className="min-h-[30px] font-sans text-[30px] font-semibold leading-[100%] tracking-normal text-white"
        />
      </MotionHero>

      <MotionHero delay={0.22} className="mt-8">
        <ShinyButton
          href="/capital-advisory/services"
          className="rounded-full border-0 bg-[linear-gradient(90deg,#22314C_0%,#2E4470_100%)] px-8 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] dark:bg-[linear-gradient(90deg,#22314C_0%,#2E4470_100%)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] [&>span:first-child]:flex [&>span:first-child]:items-center [&>span:first-child]:gap-2 [&>span:first-child]:font-sans [&>span:first-child]:text-[20px] [&>span:first-child]:font-medium [&>span:first-child]:capitalize [&>span:first-child]:leading-[100%] [&>span:first-child]:tracking-normal [&>span:first-child]:text-white [&>span:last-child]:hidden"
        >
          Explore Services
          <Image
            src="/arrow.svg"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
            aria-hidden
          />
        </ShinyButton>
      </MotionHero>
    </section>
  );
}

function DesktopHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={heroRef}
      className="relative hidden w-full max-w-full min-h-[600px] flex-col justify-between overflow-x-clip bg-navy font-sans text-white selection:bg-primary/30 min-[590px]:flex"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        style={{
          maskImage: "linear-gradient(315deg, black 20%, rgba(0,0,0,0.5) 70%)",
          WebkitMaskImage:
            "linear-gradient(315deg, black 20%, rgba(0,0,0,0.5) 70%)",
        }}
      >
        <Threads
          color={threadColor}
          colorSecondary={threadColorLight}
          amplitude={1.6}
          distance={0.8}
          lineCount={180}
          lineWidth={6}
          lineBlur={10}
          patternOffset={0.38}
          enableMouseInteraction
          interactionTargetRef={heroRef}
          className="h-full min-h-full w-full"
        />
      </div>
      <main className="site-container relative z-10 grid w-full flex-grow grid-cols-1 items-center gap-8 pt-20 pb-12 lg:gap-8 xl:gap-12 lg:grid-cols-12">
        <MotionHero className="flex flex-col gap-6 lg:col-span-6" delay={0.1}>
          <h1 className="font-[family-name:var(--font-inter)]  text-[40px] font-bold leading-[48px] tracking-normal md:text-[55px] md:leading-[65px]">
            From your <span className="text-primary">first</span> business plan <br className="hidden md:inline" />
            to <span className="text-primary">final</span> business succession.
          </h1>

          <p className="w-full text-justify text-base font-normal leading-6 text-[#A5ADBC]">
            We help promoters raise capital the right way through valuation, structuring, investor terms and onboarding compliances. What you need next is to protect that capital with strong processes, governance and Financial Controls, and when the time comes, plan succession or a transfer of the business. One connected journey with one advisory partner – CAPITAIRE
          </p>

          <p className="font-[family-name:var(--font-inter)] italic text-[28px] leading-[36px] md:text-[36px] md:leading-[44px]">
           <span className="text-primary">Capital advice </span> 
           for every stage of your business.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/capital-advisory/services"
              className="cursor-pointer rounded-sm bg-white px-6 py-3 text-sm font-medium tracking-wider text-navy uppercase transition-all hover:bg-white/90"
            >
              Explore Services
            </Link>
            <Link
              href="/capital-advisory/contact"
              className="cursor-pointer rounded-sm border border-[#cba64b]/40 px-6 py-3 text-sm font-medium tracking-wider text-primary uppercase transition-all hover:border-primary hover:bg-primary/10"
            >
              Talk to Us
            </Link>
          </div>
        </MotionHero>

        <div className="grid w-full grid-cols-3 gap-2 sm:gap-3 lg:col-span-6 xl:gap-4">
          {heroCards.map((card, index) => (
            <BlurFade
              key={card.label}
              delay={index * 0.12}
              direction="up"
              className="group relative flex aspect-square w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-[6px] border border-white/5 bg-[#1F293D] p-3 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_28px_rgba(203,166,75,0.25)] sm:gap-3 sm:p-4 lg:gap-2.5 lg:p-3 xl:gap-5 xl:p-6 before:absolute before:inset-0 before:rounded-[6px] before:bg-[radial-gradient(ellipse_at_center,rgba(203,166,75,0.07)_0%,transparent_70%)] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
            >
              <div className="relative aspect-square w-[50%] max-h-[115.5px] max-w-[115.5px] transition-transform duration-300 group-hover:scale-110">
                <Image src={card.icon} alt={card.alt} fill className="object-contain" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase sm:text-xs xl:text-sm">
                {card.label}
              </span>
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

export default function HeroSection() {
  return (
    <>
      <MobileHero />
      <DesktopHero />
    </>
  );
}
