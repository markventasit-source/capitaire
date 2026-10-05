"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
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
    href: "/capital-advisory/services/business-valuations",
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
    href: "/capital-advisory/services#capital-structuring",
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
    href: "/capital-advisory/services#entity-structuring",
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
    href: "/capital-advisory/services#cross-border-advisory",
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

// Covers the card's exit (0.4s) and entrance (0.6s) plus a beat to register the new title.
const MIN_SLIDE_MS = 1200;
const EASE = [0.22, 1, 0.36, 1] as const;
const PINNED_MEDIA = "(min-width: 1024px)";
const COMPACT_MEDIA = "(max-width: 589px)";
const NAV_HEIGHT = 88;
const COMPACT_NAV_HEIGHT = 80;
const COMPACT_BOTTOM_NAV_HEIGHT = 88;
// Room above the card for the tallest stack band (md:-top-32) plus a small gap.
const STACK_ROOM = 144;

type ScrollMetrics = { stickyTop: number; step: number; trackHeight: number };

const cardVariants: Variants = {
  enter: (direction: number) =>
    direction > 0
      ? { opacity: 0, y: -40, scale: 0.94 }
      : { opacity: 0, y: 40, scale: 1.02 },
  center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
  exit: (direction: number) => ({
    ...(direction > 0 ? { y: 40, scale: 1.02 } : { y: -40, scale: 0.94 }),
    opacity: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
  }),
};

const fadeVariants: Variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

// Ordered back to front. Bands end just under the card's top edge so they never show below it
// mid-transition. They overlap, so each strip nearer the card stacks every band behind it —
// keep the alphas low or the front strips turn dark.
const stackLayers = [
  { className: "inset-x-[14%] -top-20 md:-top-32", color: "rgba(246, 234, 210, 0.3)" },
  { className: "inset-x-[10.5%] -top-15 md:-top-24", color: "rgba(246, 234, 210, 0.25)" },
  { className: "inset-x-[6.5%] -top-10 md:-top-16", color: "rgba(233, 219, 191, 0.25)" },
  { className: "inset-x-[3%] -top-5 md:-top-8", color: "rgba(218, 203, 173, 0.3)" },
] as const;

const bandStyle = (color: string) => ({
  backgroundColor: color,
  bottom: "calc(100% - 1.5rem)",
});

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => null,
  );
}

function SlideContent({
  slide,
  animated,
  imageY,
}: {
  slide: Slide;
  animated: boolean;
  imageY?: MotionValue<string>;
}) {
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
        {/* The parallax layer overhangs the frame so its drift never exposes an edge. */}
        <motion.div
          className="absolute inset-x-0"
          style={imageY ? { top: "-6%", bottom: "-6%", y: imageY } : { top: 0, bottom: 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Desktop: the card pins below the navbar and scrolling swaps slides in place. Scroll only sets a
 * target slide; the card walks to it one slide at a time, and the page is held inside the pinned
 * stretch until it catches up, so fast scrolling can neither skip a service nor leave early.
 */
function PinnedServices() {
  const [{ active, direction }, setSlideState] = useState({ active: 0, direction: 1 });
  const [target, setTarget] = useState(0);
  const [metrics, setMetrics] = useState<ScrollMetrics | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const lastChangeRef = useRef(0);
  const lastPositionRef = useRef<number | null>(null);
  const metricsRef = useRef<ScrollMetrics | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const goTo = useCallback((index: number) => {
    if (index === activeRef.current) return;
    setSlideState({ active: index, direction: index > activeRef.current ? 1 : -1 });
    activeRef.current = index;
    lastChangeRef.current = performance.now();
  }, []);

  const syncToScroll = useCallback(() => {
    const current = metricsRef.current;
    const track = trackRef.current;
    if (!current || !track) return;

    // Position through the pinned stretch in slides: 0 when pinning starts, slides.length at the end.
    let position = (current.stickyTop - track.getBoundingClientRect().top) / current.step;
    const last = lastPositionRef.current;
    const engaged = last !== null && last >= -1 && last <= slides.length + 1;

    if (engaged) {
      const shown = activeRef.current;
      const settled = performance.now() - lastChangeRef.current >= MIN_SLIDE_MS;
      const lastIndex = slides.length - 1;
      // The page may leave the pinned stretch only once the end slide has had its full turn.
      const lower = shown === 0 ? (settled ? -Infinity : 0) : shown - 1;
      const upper =
        shown === lastIndex ? (settled ? Infinity : slides.length - 0.001) : shown + 1.999;
      const held = clamp(position, lower, upper);
      if (held !== position) {
        window.scrollTo({
          top: window.scrollY + (held - position) * current.step,
          behavior: "instant",
        });
        position = held;
      }
    }
    lastPositionRef.current = position;

    const bounded = clamp(position, 0, slides.length - 0.0001);
    const index = Math.floor(bounded);
    setTarget(index);
    // Off-screen jumps (reloads, anchor links) settle instantly instead of walking.
    if (!engaged) goTo(index);
  }, [goTo]);

  useEffect(() => {
    if (active === target) return;
    const wait = Math.max(0, MIN_SLIDE_MS - (performance.now() - lastChangeRef.current));
    const timer = window.setTimeout(
      () => goTo(activeRef.current + Math.sign(target - activeRef.current)),
      wait,
    );
    return () => window.clearTimeout(timer);
  }, [active, target, goTo]);

  useEffect(() => {
    const measure = () => {
      const sticky = stickyRef.current;
      if (!sticky) return;
      const height = sticky.offsetHeight;
      const step = Math.max(420, window.innerHeight * 0.75);
      const next = {
        stickyTop: Math.min(NAV_HEIGHT + STACK_ROOM, window.innerHeight - height - 24),
        step,
        trackHeight: height + slides.length * step,
      };
      metricsRef.current = next;
      setMetrics(next);
      syncToScroll();
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (stickyRef.current) observer.observe(stickyRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [syncToScroll]);

  useMotionValueEvent(scrollY, "change", syncToScroll);

  const slide = slides[active];

  return (
    <div
      ref={trackRef}
      className="mt-28 md:mt-40"
      style={metrics ? { height: metrics.trackHeight } : undefined}
    >
      <div
        ref={stickyRef}
        style={metrics ? { position: "sticky", top: metrics.stickyTop } : undefined}
      >
        <MotionFade delay={0.1}>
          <div
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
                  style={bandStyle(layer.color)}
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

              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.div
                  key={slide.title}
                  aria-roledescription="slide"
                  aria-label={`${active + 1} of ${slides.length}: ${slide.title}`}
                  custom={direction}
                  variants={reduceMotion ? fadeVariants : cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="origin-top [grid-area:1/1]"
                >
                  <SlideContent slide={slide} animated={!reduceMotion} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </MotionFade>
      </div>
    </div>
  );
}

/**
 * Card in the small-screen stack. It scrolls fully into view, sticks with its bottom above the
 * fold, then shrinks and fades back as the next card slides up over it.
 */
function StackedCard({ slide, index }: { slide: Slide; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const viewProgress = useMotionValue(0);
  const coverProgress = useMotionValue(0);
  const imageY = useTransform(viewProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(coverProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(coverProgress, [0, 1], [1, 0.35]);

  const track = useCallback(() => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const viewport = window.innerHeight;
    viewProgress.set(clamp((viewport - rect.top) / (viewport + rect.height), 0, 1));
    const next = card.nextElementSibling;
    if (next) {
      const nextTop = next.getBoundingClientRect().top;
      coverProgress.set(clamp((viewport - nextTop) / Math.max(viewport - rect.top, 1), 0, 1));
    }
  }, [viewProgress, coverProgress]);

  useEffect(() => {
    const compact = window.matchMedia(COMPACT_MEDIA);
    const measure = () => {
      const card = ref.current;
      if (!card) return;
      const navHeight = compact.matches ? COMPACT_NAV_HEIGHT : NAV_HEIGHT;
      const bottomInset = compact.matches ? COMPACT_BOTTOM_NAV_HEIGHT : 0;
      setTop(
        Math.min(
          navHeight + 16,
          window.innerHeight - bottomInset - card.offsetHeight - 16,
        ),
      );
      track();
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (ref.current) observer.observe(ref.current);
    window.addEventListener("resize", measure);
    compact.addEventListener("change", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      compact.removeEventListener("change", measure);
    };
  }, [track]);

  useMotionValueEvent(scrollY, "change", track);

  return (
    <div
      ref={ref}
      className={index > 0 ? "mt-6" : undefined}
      style={top !== null ? { position: "sticky", top } : undefined}
    >
      <motion.div
        className="origin-top"
        style={reduceMotion ? undefined : { scale, opacity }}
      >
        <SlideContent
          slide={slide}
          animated={false}
          imageY={reduceMotion ? undefined : imageY}
        />
      </motion.div>
    </div>
  );
}

function StackedServices() {
  return (
    <MotionFade delay={0.1} className="mt-28 md:mt-40">
      <div role="region" aria-label="Services" className="relative">
        {stackLayers.map((layer) => (
          <div
            key={layer.className}
            aria-hidden
            className={`absolute rounded-[8px] ${layer.className}`}
            style={bandStyle(layer.color)}
          />
        ))}
        {slides.map((slide, index) => (
          <StackedCard key={slide.title} slide={slide} index={index} />
        ))}
      </div>
    </MotionFade>
  );
}

export default function AboutServices() {
  const pinned = useMediaQuery(PINNED_MEDIA);

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

        {pinned === false ? <StackedServices /> : <PinnedServices />}
      </div>
    </section>
  );
}
