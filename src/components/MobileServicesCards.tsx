"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { GlowEllipse } from "@/components/GlowEllipse";
import {
  SERVICE_GLOW,
  useMobileGlow,
} from "@/components/MobileStickyGradient";

export const mobileServiceTitles = [
  "Business Valuations",
  "Capital Structuring",
  "Entity Structuring",
  "Cross-Border Advisory",
  "Business Governance",
  "Succession & Exit Advisory",
] as const;

const services = [
  {
    title: mobileServiceTitles[0],
    description:
      "Evaluate business value, financial potential, and growth opportunities.",
    icon: "/i1.svg",
  },
  {
    title: mobileServiceTitles[1],
    description:
      "Structure funding, ownership, incentives, and shareholder arrangements.",
    icon: "/i2.svg",
  },
  {
    title: mobileServiceTitles[2],
    description:
      "Optimise business structures for efficiency, compliance, and growth.",
    icon: "/i3.svg",
  },
  {
    title: mobileServiceTitles[3],
    description:
      "Structure international investments, borrowings, holdings, and transfer pricing.",
    icon: "/i4.svg",
  },
  {
    title: mobileServiceTitles[4],
    description:
      "Strengthen governance, controls, accountability, and business performance.",
    icon: "/i5.svg",
  },
  {
    title: mobileServiceTitles[5],
    description:
      "Plan succession, transitions, continuity, and value-preserving exits.",
    icon: "/i6.svg",
  },
] as const;

const GOLD = { r: 203, g: 166, b: 75 };

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const { activeTitle } = useMobileGlow();
  const active = activeTitle === service.title;

  return (
    <article data-service-title={service.title} className="relative bg-transparent">
      <GlowEllipse
        color={SERVICE_GLOW}
        className="absolute -right-6 -top-14 z-0 h-[260px] w-[112px]"
      />
      <GlowEllipse
        color={SERVICE_GLOW}
        className="absolute -bottom-14 -left-6 z-0 h-[260px] w-[112px] rotate-180"
      />

      <motion.div
        className="relative z-10 h-[267px] overflow-hidden rounded-[20px] border border-white/10 p-6"
        initial={false}
        animate={{
          borderColor: active
            ? `rgba(${GOLD.r}, ${GOLD.g}, ${GOLD.b}, 0.95)`
            : "rgba(255, 255, 255, 0.1)",
          boxShadow: active
            ? `inset 0 1px 0 rgba(255,255,255,0.16), 0 0 0 1px rgba(${GOLD.r}, ${GOLD.g}, ${GOLD.b}, 0.45), 0 10px 32px rgba(${GOLD.r}, ${GOLD.g}, ${GOLD.b}, 0.22)`
            : "inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: "rgba(63, 67, 79, 0.42)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-[20px]"
          initial={false}
          animate={{
            opacity: active ? 1 : 0.16,
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: `linear-gradient(165deg, rgba(${GOLD.r}, ${GOLD.g}, ${GOLD.b}, 0.55) 0%, rgba(${GOLD.r}, ${GOLD.g}, ${GOLD.b}, 0.22) 48%, rgba(${GOLD.r}, ${GOLD.g}, ${GOLD.b}, 0.08) 100%)`,
          }}
        />

        <div className="relative z-10">
          <div className="relative mb-5 h-[56px] w-[56px]">
            <Image
              src={service.icon}
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <h3 className="mb-2 font-[family-name:var(--font-inter)] text-[24px] font-semibold leading-[30px] tracking-normal text-white">
            {service.title}
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[26px] tracking-normal text-white/90">
            {service.description}
          </p>
        </div>
      </motion.div>
    </article>
  );
}

export default function MobileServicesCards() {
  const { setActiveTitle } = useMobileGlow();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const compact = window.matchMedia("(max-width: 589px)");
    const cards = Array.from(
      section.querySelectorAll<HTMLElement>("[data-service-title]")
    );
    const ratios = new Map<string, number>();

    const pickActive = () => {
      if (!compact.matches) {
        setActiveTitle(null);
        return;
      }

      let bestTitle: string | null = null;
      let bestRatio = 0.18;

      for (const [title, ratio] of ratios) {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestTitle = title;
        }
      }

      setActiveTitle(bestTitle);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const title = entry.target.getAttribute("data-service-title");
          if (!title) continue;
          ratios.set(title, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        pickActive();
      },
      {
        threshold: [0, 0.12, 0.24, 0.36, 0.5, 0.65, 0.8, 1],
        rootMargin: "-22% 0px -38% 0px",
      }
    );

    for (const card of cards) observer.observe(card);
    compact.addEventListener("change", pickActive);

    return () => {
      observer.disconnect();
      compact.removeEventListener("change", pickActive);
      setActiveTitle(null);
    };
  }, [setActiveTitle]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 hidden w-full bg-transparent px-4 pb-12 pt-2 max-[589px]:block"
    >
      <div className="flex flex-col gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
