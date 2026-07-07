"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  MotionFade,
  MotionItem,
  MotionScale,
  MotionSection,
  MotionStagger,
} from "@/components/ui/motion";

interface ReadinessItem {
  id: string;
  category: string;
  prompt: string;
  focusLabel: string;
  focusTitle: string;
  focusDescription: string;
  focusPoints: string[];
  pathBadge: string;
  pathTitle: string;
}

export default function ReadinessLens() {
  const [activeTab, setActiveTab] = useState(0);

  const readinessItems: ReadinessItem[] = [
    {
      id: "funding",
      category: "Funding",
      prompt: "I need to raise money or bring in an investor.",
      focusLabel: "Recommended focus",
      focusTitle: "Turn fundraising into a prepared capital conversation.",
      focusDescription:
        "Investors respond to clarity on value, use of funds, and return logic. We help you build the numbers, narrative, and readiness path before outreach begins.",
      focusPoints: [
        "Financial model and valuation",
        "Investor narrative and fund use",
        "Readiness and capital strategy",
      ],
      pathBadge: "Primary Advisory Path",
      pathTitle: "Valuation + capital strategy",
    },
    {
      id: "control",
      category: "Control",
      prompt: "I am worried about losing control if I bring in capital.",
      focusLabel: "Recommended focus",
      focusTitle: "Protect decision rights while capital enters cleanly.",
      focusDescription:
        "Control is usually lost through weak terms, not through funding itself. We shape instruments, reserved matters, and shareholder protections before money moves.",
      focusPoints: [
        "Equity and instrument design",
        "Reserved matters and promoter rights",
        "Shareholder agreement structure",
      ],
      pathBadge: "Primary Advisory Path",
      pathTitle: "Capital structuring + governance",
    },
    {
      id: "structure",
      category: "Structure",
      prompt: "My business runs through multiple entities and related firms.",
      focusLabel: "Recommended focus",
      focusTitle: "Consolidate complexity into an investor-ready structure.",
      focusDescription:
        "Fragmented setups create confusion, tax leakage, and diligence friction. We reorganise ownership and transfers so investors see one clear entry point.",
      focusPoints: [
        "Group consolidation planning",
        "Clean ownership and transfers",
        "Documented value movement",
      ],
      pathBadge: "Primary Advisory Path",
      pathTitle: "Entity structuring",
    },
    {
      id: "global",
      category: "Global",
      prompt: "NRI family or overseas partners want to invest across borders.",
      focusLabel: "Recommended focus",
      focusTitle: "Route cross-border capital through the right compliance path.",
      focusDescription:
        "International money needs the correct FEMA, RBI, FDI, and tax treatment from day one. We structure entry so every rupee is traceable and defensible.",
      focusPoints: [
        "FDI and FEMA compliant routing",
        "Tax and reporting architecture",
        "Cross-border documentation",
      ],
      pathBadge: "Primary Advisory Path",
      pathTitle: "Cross-border advisory",
    },
    {
      id: "future",
      category: "Future",
      prompt: "I need to plan succession, exit, or long-term continuity.",
      focusLabel: "Recommended focus",
      focusTitle: "Design a transition that protects value and momentum.",
      focusDescription:
        "Succession and exit work best when ownership, governance, and valuation are aligned early. We map the steps so the business stays fundable and transferable.",
      focusPoints: [
        "Succession and exit roadmap",
        "Ownership transition design",
        "Value preservation planning",
      ],
      pathBadge: "Primary Advisory Path",
      pathTitle: "Succession and exit",
    },
  ];

  const active = readinessItems[activeTab];

  return (
    <MotionSection className="site-container w-full bg-[#F3ECDE] py-20 font-sans text-navy">
      <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <MotionFade className="flex flex-col gap-3 lg:col-span-7">
          <span className="text-gradient-primary text-base font-medium leading-6 uppercase tracking-normal text-justify">
            Readiness Lens
          </span>
          <h2 className="text-[36px] font-semibold leading-[44px] max-w-xl text-[#1a2334] md:text-[48px] md:leading-[56px]">
            Start with the situation that feels{" "}
            <span className="text-[#cba64b]">closest to yours.</span>
          </h2>
        </MotionFade>
        <MotionFade className="lg:col-span-5 lg:pt-8" delay={0.1}>
          <p className="text-[16px] font-normal max-w-xl leading-[22.4px] tracking-normal text-[#555454] lg:ml-auto">
            Choose the starting point that matches your current pressure. We will
            map the advisory path, the documents, and the sequence that gets you
            from uncertainty to investor-ready structure.
          </p>
        </MotionFade>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
  <MotionStagger className="flex flex-col gap-3 md:col-span-3">
    {readinessItems.map((item, idx) => {
      const isActive = activeTab === idx;

      return (
        <MotionItem key={item.id}>
        <button
          type="button"
          onClick={() => setActiveTab(idx)}
          className={`flex w-full cursor-pointer flex-col gap-2 rounded-sm p-6 text-left outline-none transition-all select-none border border-[#E8DDC3]/60 shadow-sm ${
            isActive
              ? "bg-[#1a2334] text-white border-[#1a2334]"
              : "bg-white text-[#1a2334] hover:bg-white/90"
          }`}
        >
          <span className="text-gradient-primary text-base font-medium leading-6 uppercase tracking-normal text-justify">
            {item.category}
          </span>
          <span
            className={`tracking-normal ${
              isActive
                ? "text-[18px] font-bold leading-none text-white"
                : "text-[16px] font-normal leading-none text-[#555454]"
            }`}
          >
            {item.prompt}
          </span>
        </button>
        </MotionItem>
      );
    })}
  </MotionStagger>

  <MotionScale className="grid grid-cols-1 overflow-hidden rounded-sm border border-[#E8DDC3] shadow-sm md:col-span-9 md:grid-cols-12">
    
    <div className="flex flex-col justify-between gap-8 bg-white p-8 md:col-span-8 lg:p-12">
      <BlurFade
        key={`readiness-content-${activeTab}`}
        direction="up"
        duration={0.35}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-4">
          <span className="text-[18px] font-medium leading-none tracking-normal text-[#1a2334]">
            {active.focusLabel}
          </span>
          <h3 className="text-[32px] font-semibold leading-none tracking-normal text-[#cba64b] md:text-[42px]">
            {active.focusTitle}
          </h3>
          <p className="mt-2 text-[16px] font-normal leading-[22.4px] tracking-normal text-[#555454]">
            {active.focusDescription}
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {active.focusPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 text-[18px] font-medium leading-none tracking-normal text-[#1A2334]"
            >
              <span className="inline-block h-2 w-2 shrink-0 rotate-45 bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923]" />
              {point}
            </li>
          ))}
        </ul>
      </BlurFade>
    </div>

    <div className="relative flex min-h-[380px] flex-col justify-between overflow-hidden bg-[#1a2334] p-8 text-white md:col-span-4">
      <div className="relative mx-auto mt-2 aspect-video w-full max-w-[220px] md:aspect-square">
        <Image
          src="/loan.png"
          alt="Readiness advisory path illustration"
          fill
          className="object-contain"
          priority
        />
      </div>

      <BlurFade
        key={`readiness-path-${activeTab}`}
        direction="up"
        duration={0.35}
        className="relative z-10 mt-auto flex flex-col gap-4"
      >
        <span className="w-fit rounded-sm bg-white/10 px-2 py-1 text-[16px] font-semibold leading-none uppercase tracking-normal text-white/90">
          {active.pathBadge}
        </span>
        <h4 className="text-[28px] font-medium leading-[30px] tracking-normal text-[#cba64b]">
          {active.pathTitle}
        </h4>
        <ShinyButton
          href="/contact"
          className="flex w-full items-center justify-center rounded-sm border-0 bg-[linear-gradient(90deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] px-5 py-3 text-center shadow-none hover:shadow-none dark:hover:shadow-none [&>span:first-child]:mx-auto [&>span:first-child]:text-[15px] [&>span:first-child]:font-semibold [&>span:first-child]:leading-none [&>span:first-child]:tracking-normal [&>span:first-child]:text-white [&>span:first-child]:uppercase"
        >
          Discuss This
        </ShinyButton>
      </BlurFade>
    </div>

  </MotionScale>
</div>
    </MotionSection>
  );
}
