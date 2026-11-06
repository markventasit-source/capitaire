"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { MotionFade } from "@/components/ui/motion";
import ScrollStack, { ScrollStackItem } from "@/components/ui/scroll-stack";

type Slide = {
  title: string;
  intro: string;
  href: string;
  image: string;
  imageAlt: string;
  offerings: readonly { title: string; description: string }[];
};

const EASE = [0.22, 1, 0.36, 1] as const;

const slides: readonly Slide[] = [
  {
    title: "Business Valuations",
    intro:
      "Every business is in a unique position in the market. Financial reports, customer feedback, and shareholders' insights tell a different story.",
    href: "/capital-advisory/services/business-valuations",
    image: "/aboutsection.png",
    imageAlt: "Valuation reports, a laptop with charts, and a model building on a desk",
    offerings: [
      { title: "Business Plan Review", description: "Identify business strengths, risks, value drivers, and growth opportunities." },
      { title: "Financial Modelling & Projections", description: "Model financial scenarios, funding needs, profitability, and returns." },
      { title: "Business Valuation", description: "Determine fair business value using recognised valuation methodologies." },
      { title: "Investor Presentations", description: "Present your business, strategy, financials, and investment proposition with clarity." },
    ],
  },
  {
    title: "Capital Structuring",
    intro:
      "The right capital structure balances growth, control, and risk. We help you raise and organise capital in a way that supports your long-term plans.",
    href: "/capital-advisory/services/capital-structuring",
    image: "/blogimage.png",
    imageAlt: "Coins, a wooden house, and figures balanced on a seesaw under an umbrella",
    offerings: [
      { title: "Shareholder Agreements", description: "Define ownership, governance, rights, responsibilities, and exit mechanisms." },
      { title: "Capital Instruments", description: "Structure debt, equity, and convertible instruments to meet funding needs." },
      { title: "Sweat Equity for Promoters", description: "Structure sweat equity to recognise promoter contributions and protect shareholders." },
      { title: "Employee Stock Ownership Plans (ESOPs)", description: "Align employee performance with long-term business value creation." },
    ],
  },
  {
    title: "Entity Structuring",
    intro:
      "The structure your business operates under shapes its tax, compliance, and ability to grow. We help you choose and build the right one.",
    href: "/capital-advisory/services/entity-structuring",
    image: "/servicedetails.png",
    imageAlt: "An advisor presenting growth charts to a team in a meeting room",
    offerings: [
      { title: "Corporate Reorganisation", description: "Simplify structures to improve efficiency, transparency, and investor readiness." },
      { title: "Business Transfer Advisory", description: "Structure business transfers while protecting operational continuity." },
      { title: "Business & Entity Formation", description: "Choose structures aligned with taxation, governance, scalability, and growth." },
    ],
  },
  {
    title: "Cross-Border Advisory",
    intro:
      "Expanding, investing, or borrowing across borders brings new rules and risks. We help you structure international moves with confidence.",
    href: "/capital-advisory/services/cross-border-advisory",
    image: "/aboutsection.png",
    imageAlt: "Valuation reports, a laptop with charts, and a model building on a desk",
    offerings: [
      { title: "International Holding Structures", description: "Design efficient structures for global ownership and operations." },
      { title: "Foreign Investment into India", description: "Structure foreign investments in India with regulatory compliance." },
      { title: "Outbound Investments", description: "Structure overseas investments for compliant and efficient expansion." },
      { title: "Cross-Border Borrowings", description: "Structure overseas borrowings within applicable regulatory frameworks." },
      { title: "Transfer Pricing", description: "Develop compliant transfer pricing frameworks for cross-border transactions." },
    ],
  },
  {
    title: "Business Governance",
    intro:
      "Strong governance turns a founder-dependent business into one that runs with discipline, accountability, and clear performance metrics.",
    href: "/capital-advisory/services/business-governance",
    image: "/servicedetails.png",
    imageAlt: "A team reviewing performance dashboards and governance reports",
    offerings: [
      { title: "Internal Financial Controls", description: "Strengthen accountability, reporting, and financial controls." },
      { title: "Governance Frameworks", description: "Build frameworks for effective decision-making, accountability, and oversight." },
      { title: "Internal Control Reviews", description: "Identify control gaps and strengthen business processes." },
      { title: "Performance Measurement", description: "Align KPIs with strategic objectives and business performance." },
    ],
  },
  {
    title: "Succession & Exit Advisory",
    intro:
      "Every business eventually faces a transition — in leadership, ownership, or both. We help you plan for it early so value is preserved and continuity secured.",
    href: "/capital-advisory/services/succession-exit-advisory",
    image: "/blogimage.png",
    imageAlt: "Two business leaders reviewing a succession roadmap together",
    offerings: [
      { title: "Business Succession Planning", description: "Plan ownership and leadership continuity across generations." },
      { title: "Ownership Transition", description: "Structure smooth ownership and leadership transitions." },
      { title: "Business Continuity", description: "Build frameworks that help businesses thrive beyond individual leadership." },
      { title: "Exit Planning", description: "Plan structured exits that preserve value and ensure a smooth ownership transition." },
    ],
  },
];

function SlideContent({ slide }: { slide: Slide }) {
  return (
    <div className="grid grid-cols-1 gap-8 rounded-[8px] bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923] p-6 md:p-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-10">
      <div className="flex flex-col">
        <h3 className="font-[family-name:var(--font-inter)] text-[28px] font-semibold leading-tight tracking-normal text-white md:text-[36px]">
          {slide.title}
        </h3>
        <p className="mt-3 max-w-[560px] text-justify font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[22px] tracking-normal text-white/90 md:text-[16px] md:leading-[24px]">
          {slide.intro}
        </p>

        <ul className="mt-6 flex flex-col gap-3">
          {slide.offerings.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + index * 0.07, ease: EASE }}
              className="flex items-start gap-4 rounded-[4px] bg-[#1A2334] p-4 md:p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white md:h-10 md:w-10">
                <Image
                  src="/briefcase-03.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              </span>
              <div>
                <h4 className="font-[family-name:var(--font-inter)] text-[16px] font-semibold leading-[24px] tracking-normal text-white md:text-[18px]">
                  {item.title}
                </h4>
                <p className="mt-1 text-justify font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[20px] tracking-normal text-[#A5ADBC]">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <Link
          href={slide.href}
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-[4px] bg-white px-5 py-3 font-[family-name:var(--font-inter)] text-[14px] font-medium leading-none text-[#1A2334] transition-colors hover:bg-[#FFFCF6]"
        >
          Learn More
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <div className="relative aspect-[574/626] w-full overflow-hidden rounded-[8px] lg:aspect-auto lg:h-full">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function AboutServices() {
  return (
    <section className="w-full overflow-x-clip bg-white pb-14 text-[#1A2334] md:pb-20">
      <div className="site-container relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[calc(3rem+(100%-6rem)*0.89)] right-0 top-0 hidden h-[55px] bg-[radial-gradient(#D9D9D9_1px,transparent_1px)] bg-[size:12px_12px] bg-fixed lg:block"
        />

        <MotionFade>
          <h2 className="text-center font-[family-name:var(--font-inter)] text-[32px] font-semibold leading-[40px] tracking-normal md:text-[48px] md:leading-[54.8px]">
            Services
          </h2>
        </MotionFade>
      </div>

      <div className="mt-16 md:mt-24">
        <ScrollStack
          useWindowScroll
          stackPosition="12%"
          itemDistance={140}
          itemStackDistance={22}
          itemScale={0.04}
          baseScale={0.92}
          dimAmount={0.2}
          holdDistance={180}
          smoothScroll
          className="site-container"
        >
          {slides.map((slide) => (
            <ScrollStackItem key={slide.title} itemClassName="rounded-[8px]">
              <SlideContent slide={slide} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
