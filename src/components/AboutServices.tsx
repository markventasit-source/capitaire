"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import { MotionFade } from "@/components/ui/motion";

type Slide = {
  title: string;
  intro: string;
  href: string;
  image: string;
  imageAlt: string;
  offerings: readonly { title: string; description: string }[];
};

const slides: readonly Slide[] = [
  {
    title: "Business Valuations",
    intro:
      "Every business is in a unique position in the market. Financial reports, customer feedback, and shareholders' insights tell a different story.",
    href: "/services/business-valuations",
    image: "/aboutsection.png",
    imageAlt:
      "Valuation reports, a laptop with charts, and a model building on a desk",
    offerings: [
      {
        title: "Business Plan Review",
        description:
          "Identify business strengths, risks, value drivers, and growth opportunities.",
      },
      {
        title: "Financial Modelling & Projections",
        description:
          "Model financial scenarios, funding needs, profitability, and returns.",
      },
      {
        title: "Business Valuation",
        description:
          "Determine fair business value using recognised valuation methodologies.",
      },
      {
        title: "Investor Presentations",
        description:
          "Present your business, strategy, financials, and investment proposition with clarity.",
      },
    ],
  },
  {
    title: "Capital Structuring",
    intro:
      "The right capital structure balances growth, control, and risk. We help you raise and organise capital in a way that supports your long-term plans.",
    href: "/services#capital-structuring",
    image: "/blogimage.png",
    imageAlt:
      "Coins, a wooden house, and figures balanced on a seesaw under an umbrella",
    offerings: [
      {
        title: "Funding Strategy",
        description:
          "Plan the right mix of equity, debt, and internal funding for each stage of growth.",
      },
      {
        title: "Ownership & Shareholding",
        description:
          "Design shareholding that protects control and aligns founders, investors, and partners.",
      },
      {
        title: "ESOPs & Incentives",
        description:
          "Structure stock options and incentive plans that reward and retain key talent.",
      },
      {
        title: "Shareholder Agreements",
        description:
          "Set clear terms on rights, exits, and decision-making before conflicts arise.",
      },
    ],
  },
  {
    title: "Entity Structuring",
    intro:
      "The structure your business operates under shapes its tax, compliance, and ability to grow. We help you choose and build the right one.",
    href: "/services#entity-structuring",
    image: "/servicedetails.png",
    imageAlt: "An advisor presenting growth charts to a team in a meeting room",
    offerings: [
      {
        title: "Entity Selection",
        description:
          "Choose between LLP, private limited, partnership, and other structures for your goals.",
      },
      {
        title: "Group Restructuring",
        description:
          "Reorganise holding and subsidiary structures for efficiency and clarity.",
      },
      {
        title: "Mergers & Demergers",
        description:
          "Plan and execute consolidations, spin-offs, and business transfers.",
      },
      {
        title: "Compliance Alignment",
        description:
          "Keep your structure aligned with company law, tax, and regulatory requirements.",
      },
    ],
  },
  {
    title: "Cross-Border Advisory",
    intro:
      "Expanding, investing, or borrowing across borders brings new rules and risks. We help you structure international moves with confidence.",
    href: "/services#cross-border-advisory",
    image: "/aboutsection.png",
    imageAlt:
      "Valuation reports, a laptop with charts, and a model building on a desk",
    offerings: [
      {
        title: "Foreign Investment (FDI & ODI)",
        description:
          "Structure inbound and outbound investments in line with FEMA and RBI regulations.",
      },
      {
        title: "International Holdings",
        description:
          "Set up overseas holding structures that support growth and control.",
      },
      {
        title: "External Borrowings",
        description:
          "Plan cross-border borrowings, ECBs, and intercompany funding.",
      },
      {
        title: "Transfer Pricing",
        description:
          "Price related-party transactions fairly and document them for compliance.",
      },
    ],
  },
];

const ROTATE_MS = 3500;
const EASE = [0.22, 1, 0.36, 1] as const;

// Ordered back to front. Bands end just under the card's top edge so they never show below it
// mid-transition. They overlap, so each strip nearer the card stacks every band behind it —
// keep the alphas low or the front strips turn dark.
const stackLayers = [
  { className: "inset-x-[14%] -top-20 md:-top-32", color: "rgba(246, 234, 210, 0.3)" },
  { className: "inset-x-[10.5%] -top-15 md:-top-24", color: "rgba(246, 234, 210, 0.25)" },
  { className: "inset-x-[6.5%] -top-10 md:-top-16", color: "rgba(233, 219, 191, 0.25)" },
  { className: "inset-x-[3%] -top-5 md:-top-8", color: "rgba(218, 203, 173, 0.3)" },
] as const;

function SlideContent({ slide, animated }: { slide: Slide; animated: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-8 rounded-[8px] bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923] p-6 md:p-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-10">
      <div className="flex flex-col">
        <h3 className="font-[family-name:var(--font-inter)] text-[28px] font-semibold leading-tight tracking-normal text-white md:text-[36px]">
          {slide.title}
        </h3>
        <p className="mt-3 max-w-[560px] font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[22px] tracking-normal text-white/90 md:text-[16px] md:leading-[24px]">
          {slide.intro}
        </p>

        <ul className="mt-6 flex flex-col gap-3">
          {slide.offerings.map((item, index) => (
            <motion.li
              key={item.title}
              initial={animated ? { opacity: 0, x: -16 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.25 + index * 0.08, ease: EASE }}
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
                <p className="mt-1 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[20px] tracking-normal text-[#A5ADBC]">
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
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const inView = useInView(carouselRef, { amount: 0.3 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onVisibilityChange = () => setPageHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    if (paused || pageHidden || !inView) return;
    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % slides.length),
      ROTATE_MS,
    );
    return () => window.clearTimeout(timer);
  }, [active, paused, pageHidden, inView]);

  const slide = slides[active];

  return (
    <section className="w-full overflow-hidden bg-white pb-14 text-[#1A2334] md:pb-20">
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

        <MotionFade
          className="mt-28 md:mt-40"
          delay={0.1}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            ref={carouselRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Services"
            className="relative"
          >
            <AnimatePresence initial={false}>
              {stackLayers.map((layer, index) => (
                <motion.div
                  key={`${active}-${layer.className}`}
                  aria-hidden
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.85 + (stackLayers.length - 1 - index) * 0.14,
                      ease: EASE,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: 24,
                    transition: { duration: 0.25, delay: index * 0.04, ease: "easeIn" },
                  }}
                  className={`absolute rounded-[8px] ${layer.className}`}
                  style={{ backgroundColor: layer.color, bottom: "calc(100% - 1.5rem)" }}
                />
              ))}
            </AnimatePresence>

            <div className="relative grid">
              {/* Every slide sits invisibly in the same cell so the box keeps the tallest slide's height. */}
              {slides.map((item) => (
                <div
                  key={item.title}
                  aria-hidden
                  inert
                  className="invisible [grid-area:1/1]"
                >
                  <SlideContent slide={item} animated={false} />
                </div>
              ))}

              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={slide.title}
                  aria-roledescription="slide"
                  aria-label={`${active + 1} of ${slides.length}: ${slide.title}`}
                  initial={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -40, scale: 0.94 }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: EASE },
                  }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          y: 40,
                          scale: 1.02,
                          transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
                        }
                  }
                  className="origin-top [grid-area:1/1]"
                >
                  <SlideContent slide={slide} animated={!reduceMotion} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </MotionFade>
      </div>
    </section>
  );
}
