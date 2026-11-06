'use client';

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MotionFade, MotionSection } from "@/components/ui/motion";
import ScrollStack, { ScrollStackItem } from "@/components/ui/scroll-stack";

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
  image: string;
}

const services: ServiceData[] = [
  {
    id: "01",
    num: "Service 01",
    title: "Business Valuations",
    description:
      "We establish a defensible view of worth and turn that number into a story investors can understand. The work connects business plan review, financial modelling, valuation methodology, and investor presentation.",
    outputs:
      "Valuation report, financial model, investor deck, assumptions note, and scenario logic.",
    bestFor:
      "Fundraising, partner entry, family settlement, exit discussions, acquisitions, benchmarking or internal clarity.",
    investorLens:
      "The business becomes easier to price, compare, and underwrite.",
    trackRecord: "120+ business valuations across 26+ industries.",
    lensTitle: "A number investors can believe.",
    lensDesc:
      "A valuation is strongest when the assumptions, growth story, and return logic all speak the same language.",
    image: "/ups.webp",
  },
  {
    id: "02",
    num: "Service 02",
    title: "Capital Structuring",
    description:
      "Designing corporate capitalization, equity-debt combinations, and clean balance sheets tailored for direct market financing or strategic investments.",
    outputs:
      "Capitalization tables, optimization matrix, dilute charts, instrument structuring briefs.",
    bestFor:
      "Early-to-mid stage scale-ups preparing to absorb massive investment blocks without ruining founder equity.",
    investorLens:
      "Assures immediate regulatory compliance and limits post-deal friction.",
    trackRecord: "150+ transactions strategically advised and deployed.",
    lensTitle: "Optimized for continuous growth.",
    lensDesc:
      "The proper foundation makes sure future capital rounds don't break your underlying corporate governance.",
    image: "/ups2.webp",
  },
  {
    id: "03",
    num: "Service 03",
    title: "Entity Structuring",
    description:
      "Aligning multi-firm or fragmented setups into organized holdings or simple consolidated operations ready for due diligence loops.",
    outputs:
      "Corporate restructuring blue-prints, share transfers, tax leakage evaluations.",
    bestFor:
      "Promoters operating via distinct LLPs, family-held agencies, or disjointed operational hubs.",
    investorLens:
      "Removes corporate complexity, presenting an absolute clear path to target ownership.",
    trackRecord:
      "Clean group transitions for leading family-managed enterprises.",
    lensTitle: "Clarity breeds confidence.",
    lensDesc:
      "Unified operational structures ensure asset value isn't leaking through hidden inter-company crossway pipelines.",
    image: "/ups3.webp",
  },
  {
    id: "04",
    num: "Service 04",
    title: "Cross-Border Advisory",
    description:
      "Navigating international funding entry via systematic routing methods honoring FEMA, RBI, FDI frameworks, and tax treaties.",
    outputs:
      "FDI compliant pathways, multi-jurisdiction reporting architectures, routing briefs.",
    bestFor:
      "Companies absorbing foreign direct investments or non-resident Indian (NRI) partner capital blocks.",
    investorLens:
      "Guarantees cross-border capital inflows are fully defensible and audit-ready from day zero.",
    trackRecord:
      "Flawless compliance track records on global inbound capital injections.",
    lensTitle: "Borders shouldn't stall momentum.",
    lensDesc:
      "Setting up correct legal funnels ensures global funds don't trigger unnecessary regulatory locks.",
    image: "/ups4.webp",
  },
  {
    id: "05",
    num: "Service 05",
    title: "Business Governance",
    description:
      "Introducing rigorous internal financial controls, board rhythms, KPI dashboards, and reporting cadences that separate founder dependencies from functional units.",
    outputs:
      "Internal control matrices, corporate governance rulebooks, executive reporting cadences.",
    bestFor:
      "Founders seeking to transition operational loads onto autonomous systems to maximize exit premium value.",
    investorLens:
      "Demonstrates high professional stability that operates efficiently without reliant daily founder supervision.",
    trackRecord: "60+ companies' IFC processes implemented.",
    lensTitle: "Systems elevate company value.",
    lensDesc:
      "Institutional frameworks secure repeatable output margins regardless of organizational shifts.",
    image: "/ups5.webp",
  },
  {
    id: "06",
    num: "Service 06",
    title: "Succession and Exit",
    description:
      "Mapping clean ownership transitions, founder retirements, second-generation inheritances, or complete company buyouts.",
    outputs:
      "Transition legal documentation, deal valuation targets, exit step-by-step timetables.",
    bestFor:
      "Maturing businesses mapping long-range longevity or final liquidation strategies.",
    investorLens:
      "Ensures seamless continuity during significant leadership restructures.",
    trackRecord: "Multigenerational wealth preservation plans reliably activated.",
    lensTitle: "Protect your hard-earned legacy.",
    lensDesc:
      "A masterfully drafted transition safeguards enterprise momentum through critical family or management hands.",
    image: "/ups6.webp",
  },
];

const FIELDS = [
  ["OUTPUTS", "outputs"],
  ["BEST FOR", "bestFor"],
  ["INVESTOR LENS", "investorLens"],
  ["TRACK RECORD", "trackRecord"],
] as const;

function ServiceCard({ item, index }: { item: ServiceData; index: number }) {
  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-sm border border-[#E8DDC3] bg-white shadow-sm md:grid-cols-12">
      {/* content */}
      <div className="flex flex-col gap-8 bg-white p-8 md:col-span-9 lg:p-12">
        <BlurFade direction="up" duration={0.35}>
          <div className="flex flex-col gap-4">
            <span className="text-[18px] font-medium leading-none tracking-normal text-black">
              {item.num}
            </span>
            <h3 className="text-[32px] font-semibold leading-none tracking-normal text-[#cba64b] md:text-[42px]">
              {item.title}
            </h3>
            <p className="mt-2 text-[16px] font-normal leading-[22.4px] tracking-normal text-[#555454]">
              {item.description}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 border-l border-t border-[#E8DDC3]/60 sm:grid-cols-2">
            {FIELDS.map(([label, key]) => (
              <div
                key={key}
                className="flex flex-col gap-2 border-r border-b border-[#E8DDC3]/60 p-5"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cba64b]">
                  <span className="inline-block h-2 w-2 rotate-45 bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923]" />
                  {label}
                </div>
                <p className="text-[14px] font-normal leading-5 tracking-normal text-[#555454]">
                  {item[key]}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>

      {/* image + lens panel */}
      <div className="relative flex min-h-[380px] flex-col justify-end overflow-hidden bg-[#1a2334] p-8 text-white md:col-span-3">
        <Image
          src={item.image}
          alt={`${item.title} graphic`}
          fill
          className="object-cover object-top"
          priority={index === 0}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#1a2334] via-[#1a2334]/60 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 mt-auto flex flex-col gap-3">
          <span className="w-fit rounded-sm bg-white/10 px-2 py-1 text-[14px] font-semibold uppercase leading-none tracking-normal text-white/90">
            Investor Lens
          </span>
          <h4 className="text-[24px] font-medium leading-[30px] tracking-normal text-[#cba64b]">
            {item.lensTitle}
          </h4>
          <p className="text-[14px] font-normal leading-[22px] tracking-normal text-[#A5ADBC]">
            {item.lensDesc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AdvisoryServicesTabs() {
  return (
    <MotionSection className="w-full bg-white py-20 font-sans text-navy">
      <div className="site-container mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <MotionFade className="flex flex-col gap-3 lg:col-span-7">
          <span className="text-gradient-primary text-base font-medium uppercase leading-6 tracking-normal">
            What We Do
          </span>
          <h2 className="max-w-xl text-[36px] font-semibold leading-[44px] text-[#1a2334] md:text-[48px] md:leading-[56px]">
            A complete advisory <br />
            system for your <br />
            <span className="text-[#cba64b]">capital journey.</span>
          </h2>
        </MotionFade>
        <MotionFade className="lg:col-span-5 lg:pt-8" delay={0.1}>
          <p className="max-w-xl text-[16px] font-normal leading-[22.4px] tracking-normal text-[#555454] lg:ml-auto">
            Each service can stand alone, but the strongest outcomes happen when
            valuation, structure, contracts, compliance, and governance are
            treated as one connected plan.
          </p>
        </MotionFade>
      </div>

      {/* ScrollStack — useWindowScroll so page scroll drives the stack */}
      <ScrollStack
        useWindowScroll
        stackPosition="10%"
        itemDistance={120}
        itemStackDistance={20}
        itemScale={0.04}
        baseScale={0.92}
        dimAmount={0.18}
        holdDistance={160}
        smoothScroll
        className="site-container"
      >
        {services.map((item, index) => (
          <ScrollStackItem
            key={item.id}
            itemClassName="rounded-sm"
          >
            <ServiceCard item={item} index={index} />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </MotionSection>
  );
}
