import React from "react";
import { ShineBorder } from "@/components/ui/shine-border";
import {
  MotionFade,
  MotionItem,
  MotionSection,
  MotionStagger,
} from "@/components/ui/motion";

interface TimelineItem {
  question: string;
  response: React.ReactNode;
}

export default function QuestionsTimeline() {
  const timelineData: TimelineItem[] = [
    {
      question: "“I need funds, but I do not know where to start or what my business is worth.”",
      response: (
        <>
          We build the foundation first: a credible valuation, a financial model that explains returns,
          and an investor narrative that connects your numbers to your ambition.{" "}
          <span className="text-primary font-normal">Valuation, model, deck, and readiness become one story.</span>
        </>
      ),
    },
    {
      question: "“If I take an investor, will I lose control of what I built?”",
      response: (
        <>
          Control is usually lost through poor terms, not through capital itself. We shape the instrument,
          equity percentage, reserved matters, promoter rights, and shareholder agreement so funding enters
          with <span className="text-primary font-normal">clear protection for decision-making and upside.</span>
        </>
      ),
    },
    {
      question: "“My business runs through multiple firms, LLPs, and related entities. Is that a problem?”",
      response: (
        <>
          Investors need visibility and clean entry. Fragmented structures create confusion, risk, and tax
          leakage. We consolidate or reorganise the group into an investor-ready entity with{" "}
          <span className="text-primary font-normal">clean ownership, clear transfers, and documented value movement.</span>
        </>
      ),
    },
    {
      question: "“NRI family or overseas partners want to invest. Can we just bring the money in?”",
      response: (
        <>
          Cross-border money needs the right route. We structure equity, debt, convertibles, or director
          contributions with FEMA, RBI, FDI, tax, and reporting in mind so every rupee is{" "}
          <span className="text-primary font-normal">compliant, traceable, and defensible.</span>
        </>
      ),
    },
    {
      question: "“The business still depends on me for every serious decision.”",
      response: (
        <>
          We build governance, internal financial controls, oversight rhythms, KPI dashboards, and reporting
          discipline. The goal is a company that runs on systems, not only on the promoter, making it{" "}
          <span className="text-primary font-normal">more valuable, fundable, and transferable.</span>
        </>
      ),
    },
  ];

  return (
    <MotionSection className="site-container w-full max-w-full overflow-x-clip bg-navy py-20 font-sans text-white">
      <div className="mb-20 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <MotionFade className="flex flex-col gap-3 lg:col-span-7">
          <span className="text-gradient-primary text-base font-medium leading-6 uppercase tracking-normal text-justify">
            Promoter Questions
          </span>
          <h2 className="text-[36px] md:text-[48px] font-semibold leading-[44px] md:leading-[56px]">
            The questions are familiar. <br />
            <span className="text-primary">The answers need structure.</span>
          </h2>
        </MotionFade>
        <MotionFade className="lg:col-span-5 lg:pt-8" delay={0.1}>
          <p className="text-[#848EA3] text-sm md:text-base leading-relaxed max-w-lg lg:ml-auto">
            CAPITAIRE turns the difficult parts of growth into clean decisions: what the business is worth, 
            how capital should enter, what control should stay protected, and what systems must exist before 
            an investor trusts the numbers.
          </p>
        </MotionFade>
      </div>

      <MotionStagger className="relative flex flex-col gap-12 lg:gap-16">
        {timelineData.map((item, index) => (
          <MotionItem
            key={index}
            className="relative grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] lg:gap-8"
          >
            
            {/* Left Card: Question */}
            <div className="flex">
              <div className="relative flex w-full flex-col justify-center gap-3 overflow-hidden rounded-sm border border-white/5 p-6 md:p-8">
                <ShineBorder borderWidth={1} duration={12} shineColor="#CBA64B" reverse />
                <span className="text-gradient-primary text-[15px] font-bold leading-none uppercase tracking-normal text-justify">
                  You might be thinking
                </span>
                <p className="text-[26px] text-[#A5ADBC] italic font-medium leading-[34.8px]">
                  {item.question}
                </p>
              </div>
            </div>

            {/* Middle Separator (Desktop only) */}
            <div className="relative hidden lg:flex lg:items-stretch lg:justify-center">
              <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-[#CBA64B]/75 to-white/10" />
              <div className="relative z-10 m-auto h-3 w-3 rotate-45 border border-[#CBA64B] bg-navy transition-transform duration-300 hover:scale-125" />
            </div>

            {/* Right Card: Response */}
            <div className="flex">
              <div className="relative flex w-full flex-col justify-center gap-3 overflow-hidden rounded-sm border border-white/5 bg-[#1F293D] p-6 md:p-8">
                <ShineBorder borderWidth={1} duration={12} shineColor="#CBA64B" />
                <span className="text-gradient-primary text-[15px] font-bold leading-none uppercase tracking-normal text-justify">
                  Capitaire Response
                </span>
                <p className="text-[18px] font-normal leading-[25px] tracking-normal text-[#A5ADBC]">
                  {item.response}
                </p>
              </div>
            </div>

          </MotionItem>
        ))}
      </MotionStagger>
    </MotionSection>
  );
}