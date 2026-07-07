'use client';
import React, { useState } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import {
  MotionFade,
  MotionItem,
  MotionScale,
  MotionSection,
  MotionStagger,
} from "@/components/ui/motion";

interface ServiceData {
  id: string;
  num: string;
  title: string;
  description: string;
  outputs: string;
  bestFor: string;
  investorLens: string;
  trackRecord: string;
  lensTitle: string;
  lensDesc: string;
}

export default function AdvisoryServicesTabs() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services: ServiceData[] = [
    {
      id: "01",
      num: "Service 01",
      title: "Business Valuations",
      description: "We establish a defensible view of worth and turn that number into a story investors can understand. The work connects business plan review, financial modelling, valuation methodology, and investor presentation.",
      outputs: "Valuation report, financial model, investor deck, assumptions note, and scenario logic.",
      bestFor: "Fundraising, partner entry, family settlement, exit discussions, acquisitions, or internal clarity.",
      investorLens: "The business becomes easier to price, compare, and underwrite.",
      trackRecord: "120+ business valuations across 26+ industries.",
      lensTitle: "A number investors can believe.",
      lensDesc: "A valuation is strongest when the assumptions, growth story, and return logic all speak the same language."
    },
    {
      id: "02",
      num: "Service 02",
      title: "Capital Structuring",
      description: "Designing corporate capitalization, equity-debt combinations, and clean balance sheets tailored for direct market financing or strategic investments.",
      outputs: "Capitalization tables, optimization matrix, dilute charts, instrument structuring briefs.",
      bestFor: "Early-to-mid stage scale-ups preparing to absorb massive investment blocks without ruining founder equity.",
      investorLens: "Assures immediate regulatory compliance and limits post-deal friction.",
      trackRecord: "150+ transactions strategically advised and deployed.",
      lensTitle: "Optimized for continuous growth.",
      lensDesc: "The proper foundation makes sure future capital rounds don't break your underlying corporate governance."
    },
    {
      id: "03",
      num: "Service 03",
      title: "Entity Structuring",
      description: "Aligning multi-firm or fragmented setups into organized holdings or simple consolidated operations ready for due diligence loops.",
      outputs: "Corporate restructuring blue-prints, share transfers, tax leakage evaluations.",
      bestFor: "Promoters operating via distinct LLPs, family-held agencies, or disjointed operational hubs.",
      investorLens: "Removes corporate complexity, presenting an absolute clear path to target ownership.",
      trackRecord: "Clean group transitions for leading family-managed enterprises.",
      lensTitle: "Clarity breeds confidence.",
      lensDesc: "Unified operational structures ensure asset value isn't leaking through hidden inter-company crossway pipelines."
    },
    {
      id: "04",
      num: "Service 04",
      title: "Cross-Border Advisory",
      description: "Navigating international funding entry via systematic routing methods honoring FEMA, RBI, FDI frameworks, and tax treaties.",
      outputs: "FDI compliant pathways, multi-jurisdiction reporting architectures, routing briefs.",
      bestFor: "Companies absorbing foreign direct investments or non-resident Indian (NRI) partner capital blocks.",
      investorLens: "Guarantees cross-border capital inflows are fully defensible and audit-ready from day zero.",
      trackRecord: "Flawless compliance track records on global inbound capital injections.",
      lensTitle: "Borders shouldn't stall momentum.",
      lensDesc: "Setting up correct legal funnels ensures global funds don't trigger unnecessary regulatory locks."
    },
    {
      id: "05",
      num: "Service 05",
      title: "Business Governance",
      description: "Introducing rigorous internal financial controls, board rhythms, KPI dashboards, and reporting cadences that separate founder dependencies from functional units.",
      outputs: "Internal control matrices, corporate governance rulebooks, executive reporting cadences.",
      bestFor: "Founders seeking to transition operational loads onto autonomous systems to maximize exit premium value.",
      investorLens: "Demonstrates high professional stability that operates efficiently without reliant daily founder supervision.",
      trackRecord: "60+ operational systems deployed across growth-focused brands.",
      lensTitle: "Systems elevate company value.",
      lensDesc: "Institutional frameworks secure repeatable output margins regardless of organizational shifts."
    },
    {
      id: "06",
      num: "Service 06",
      title: "Succession and Exit",
      description: "Mapping clean ownership transitions, founder retirements, second-generation inheritances, or complete company buyouts.",
      outputs: "Transition legal documentation, deal valuation targets, exit step-by-step timetables.",
      bestFor: "Maturing businesses mapping long-range longevity or final liquidation strategies.",
      investorLens: "Ensures seamless continuity during significant leadership restructures.",
      trackRecord: "Multigenerational wealth preservation plans reliably activated.",
      lensTitle: "Protect your hard-earned legacy.",
      lensDesc: "A masterfully drafted transition safeguards enterprise momentum through critical family or management hands."
    }
  ];

  return (
    <MotionSection className="site-container w-full bg-white py-20 font-sans text-navy">
      <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <MotionFade className="flex flex-col gap-3 lg:col-span-7">
          <span className="text-gradient-primary text-base font-medium leading-6 uppercase tracking-normal text-justify">
            What We Do
          </span>
          <h2 className="text-[36px] max-w-xl md:text-[48px] font-semibold leading-[44px] md:leading-[56px] text-[#1a2334]">
            A complete advisory <br />
            system for your <br />
            <span className="text-[#cba64b]">capital journey.</span>
          </h2>
        </MotionFade>
        <MotionFade className="lg:col-span-5 lg:pt-8" delay={0.1}>
          <p className="max-w-xl text-[16px] font-normal leading-[22.4px] tracking-normal text-[#555454] lg:ml-auto">
            Each service can stand alone, but the strongest outcomes happen when valuation, structure, contracts, compliance, and governance are treated as one connected plan.
          </p>
        </MotionFade>
      </div>

      <MotionScale className="grid grid-cols-1 overflow-hidden rounded-sm border border-[#E8DDC3] shadow-sm md:grid-cols-12">
        
        <MotionStagger className="flex flex-col border-b border-[#E8DDC3] bg-[#FFFCF6] md:col-span-3 md:border-r md:border-b-0">
          {services.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <MotionItem key={item.id}>
                <button
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "relative flex w-full cursor-pointer flex-col gap-2 border-b border-[#E8DDC3]/60 p-6 pl-7 text-left outline-none transition-all duration-200 select-none last:border-b-0",
                    isActive
                      ? "bg-[#1a2334] text-white"
                      : "text-[#1a2334] hover:bg-white hover:shadow-sm",
                  )}
                >
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-y-0 left-0 w-1.5 bg-primary"
                    />
                  )}
                  <span
                    className={cn(
                      "text-base font-medium leading-6 uppercase tracking-normal text-justify",
                      isActive ? "text-primary" : "text-gradient-primary",
                    )}
                  >
                    {item.id}
                  </span>
                  <span
                    className={cn(
                      "text-[18px] leading-none uppercase tracking-normal",
                      isActive
                        ? "font-bold text-white"
                        : "font-normal text-[#1a2334]",
                    )}
                  >
                    {item.title}
                  </span>
                </button>
              </MotionItem>
            );
          })}
        </MotionStagger>

        <div className="flex flex-col justify-between gap-8 bg-white p-8 md:col-span-6 lg:p-12">
          <BlurFade
            key={`service-content-${activeTab}`}
            direction="up"
            duration={0.35}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[18px] font-medium leading-none tracking-normal text-[black]">
                {services[activeTab].num}
              </span>
              <h3 className="text-[32px] font-semibold leading-none tracking-normal text-[#cba64b] md:text-[42px]">
                {services[activeTab].title}
              </h3>
              <p className="mt-2 text-[16px] font-normal leading-[22.4px] tracking-normal text-[#555454]">
                {services[activeTab].description}
              </p>
            </div>

            <div className="grid grid-cols-1 border-t border-l border-[#E8DDC3]/60 sm:grid-cols-2">
            <div className="flex flex-col gap-2 border-r border-b border-[#E8DDC3]/60 p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cba64b]">
                <span className="inline-block h-2 w-2 rotate-45 bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923]" />
                OUTPUTS
              </div>
              <p className="text-[14px] font-normal leading-5 tracking-normal text-[#555454]">
                {services[activeTab].outputs}
              </p>
            </div>

            <div className="flex flex-col gap-2 border-r border-b border-[#E8DDC3]/60 p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cba64b]">
                <span className="inline-block h-2 w-2 rotate-45 bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923]" />
                BEST FOR
              </div>
              <p className="text-[14px] font-normal leading-5 tracking-normal text-[#555454]">
                {services[activeTab].bestFor}
              </p>
            </div>

            <div className="flex flex-col gap-2 border-r border-b border-[#E8DDC3]/60 p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cba64b]">
                <span className="inline-block h-2 w-2 rotate-45 bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923]" />
                INVESTOR LENS
              </div>
              <p className="text-[14px] font-normal leading-5 tracking-normal text-[#555454]">
                {services[activeTab].investorLens}
              </p>
            </div>

            <div className="flex flex-col gap-2 border-r border-b border-[#E8DDC3]/60 p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cba64b]">
                <span className="inline-block h-2 w-2 rotate-45 bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923]" />
                TRACK RECORD
              </div>
              <p className="text-[14px] font-normal leading-5 tracking-normal text-[#555454]">
                {services[activeTab].trackRecord}
              </p>
            </div>
            </div>
          </BlurFade>
        </div>

        <div className="relative flex min-h-[380px] flex-col justify-between overflow-hidden bg-[#1a2334] p-8 text-white md:col-span-3">
          <div className="relative mx-auto mt-2 aspect-video w-full max-w-[200px] md:aspect-square">
            <Image
              src="/up.png"
              alt="Investor Lens Graphic"
              fill
              className="object-contain"
              priority
            />
          </div>

          <BlurFade
            key={`service-lens-${activeTab}`}
            direction="up"
            duration={0.35}
            className="relative z-10 mt-auto flex flex-col gap-3"
          >
            <div>
              <span className="rounded-sm bg-white/10 px-2 py-1 text-[16px] font-semibold leading-none uppercase tracking-normal text-white/90">
                Investor Lens
              </span>
            </div>
            <h4 className="text-[28px] font-medium leading-[30px] tracking-normal text-[#cba64b]">
              {services[activeTab].lensTitle}
            </h4>
            <p className="text-[16px] font-normal leading-[22.4px] tracking-normal text-[#A5ADBC]">
              {services[activeTab].lensDesc}
            </p>
          </BlurFade>
        </div>

      </MotionScale>
    </MotionSection>
  );
}