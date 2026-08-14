"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqItems } from "@/components/CommonQuestions";

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      className={direction === "left" ? "rotate-180" : undefined}
    >
      <path
        d="M6.5 3.5 12 9l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MobileFaqs() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const item = faqItems[index];

  const goTo = (delta: number) => {
    setDirection(delta);
    setIndex((current) => (current + delta + faqItems.length) % faqItems.length);
  };

  return (
    <section className="relative z-10 hidden w-full bg-transparent px-5 pb-10 pt-6 max-[489px]:block">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="font-[family-name:var(--font-inter)] text-[36px] font-semibold leading-none tracking-[-0.015em] text-white">
          FAQs..
        </h2>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-label="Previous question"
            onClick={() => goTo(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white"
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next question"
            onClick={() => goTo(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1A2334]"
          >
            <Chevron direction="right" />
          </button>
        </div>
      </div>

      <div className="relative min-h-[220px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={item.question}
            custom={direction}
            initial={{ opacity: 0, x: direction * 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -28 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-[family-name:var(--font-inter)] text-[22px] font-medium leading-[30px] tracking-normal text-white">
              {item.question}
            </h3>
            <p className="mt-4 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[22px] tracking-normal text-[#606D88]">
              {item.answer}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
