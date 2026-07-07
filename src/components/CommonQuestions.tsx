"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MotionFade,
  MotionItem,
  MotionSection,
  MotionStagger,
} from "@/components/ui/motion";

interface FaqItem {
  question: string;
  answer: string;
}

const promisePoints = [
  "Free initial discovery conversation",
  "Experience across 26+ industries",
  "Support for Kerala businesses and NRI-linked capital",
  "Built for valuation, funding, governance, and succession",
];

const faqItems: FaqItem[] = [
  {
    question: "We already have a CA firm. Why do we need CAPITAIRE?",
    answer:
      "Your CA firm handles compliance, tax filings, and audit. CAPITAIRE focuses on capital-specific decisions: valuation, investor readiness, ownership terms, entity restructuring, FEMA routes, governance, and succession. We often work alongside existing advisors.",
  },
  {
    question: "Is this only for startups?",
    answer:
      "No. We work with family businesses, growth-stage companies, and mature promoters preparing for capital, restructuring, governance upgrades, or succession planning.",
  },
  {
    question: "How long does a valuation or capital readiness engagement take?",
    answer:
      "Timelines depend on complexity, but most readiness paths move through discovery, modelling, documentation, and review in a structured sequence so you know what is needed before investor conversations begin.",
  },
  {
    question: "Can CAPITAIRE help with investor conversations?",
    answer:
      "Yes. We help shape the valuation story, readiness materials, and term logic so promoters enter investor discussions with clarity on value, structure, and protection.",
  },
  {
    question: "What if I am not sure which service I need?",
    answer:
      "That is common. We start with a discovery conversation to identify whether the immediate need is valuation, structuring, governance, cross-border routing, or a broader capital readiness path.",
  },
];

export default function CommonQuestions() {
  return (
    <MotionSection className="site-container w-full bg-navy py-20 font-sans text-white">
      <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <MotionFade className="flex flex-col gap-3 lg:col-span-7">
          <span className="text-gradient-primary text-base font-medium leading-6 uppercase tracking-normal text-justify">
            Common Questions
          </span>
          <h2 className="text-[36px] font-semibold max-w-xl leading-[44px] md:text-[48px] md:leading-[56px]">
            Clear answers before the{" "}
            <span className="text-[#cba64b]">first meeting.</span>
          </h2>
        </MotionFade>
        <MotionFade className="lg:col-span-5 lg:pt-8" delay={0.1}>
          <p className="max-w-xl text-[16px] font-normal leading-[22.4px] tracking-normal text-[#A5ADBC] lg:ml-auto">
            The goal is not to sell a complicated service. It is to help you
            understand what decision you are actually facing and what needs to be
            made ready before capital enters.
          </p>
        </MotionFade>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <MotionFade className="rounded-sm border border-white/10 bg-[#1F293D] p-8 lg:col-span-4">
          <span className="text-gradient-primary text-base font-medium leading-6 uppercase tracking-normal">
            Our Promise
          </span>
          <h3 className="mt-4 text-[28px] font-medium leading-[30px] tracking-normal text-white">
            A long-term advisory partner, not a one-time report.
          </h3>
          <p className="mt-4 text-[16px] font-normal leading-[22.4px] tracking-normal text-[#A5ADBC]">
            Contact us today for a free consultation and let&apos;s build
            something durable together
          </p>

          <MotionStagger className="mt-8 flex flex-col gap-4">
            {promisePoints.map((point) => (
              <MotionItem
                key={point}
                className="flex items-start gap-3 text-[16px] font-normal leading-[22.4px] tracking-normal text-[#A5ADBC]"
              >
                <span className="mt-2 inline-block h-2 w-2 shrink-0 rotate-45 bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923]" />
                {point}
              </MotionItem>
            ))}
          </MotionStagger>
        </MotionFade>

        <MotionFade className="lg:col-span-8" delay={0.15}>
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="gap-0"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="border-b border-white/10"
              >
                <AccordionTrigger className="items-center py-6 text-[18px] font-medium leading-none tracking-normal text-[#A5ADBC] no-underline hover:no-underline data-[state=open]:text-white **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-[#A5ADBC] data-[state=open]:**:data-[slot=accordion-trigger-icon]:text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[16px] font-normal leading-[22.4px] tracking-normal text-[#A5ADBC]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionFade>
      </div>
    </MotionSection>
  );
}
