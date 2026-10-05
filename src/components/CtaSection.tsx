"use client";

import { useRef } from "react";
import Link from "next/link";
import Threads from "@/components/Threads";
import {
  MotionFade,
  MotionSection,
} from "@/components/ui/motion";

export default function CtaSection() {
  const ctaRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={ctaRef} className="relative w-full overflow-x-clip">
      <MotionSection className="relative w-full bg-[#CBA64B] py-20 font-sans text-white">
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-30">
        <Threads
  color={[1, 1, 1]}
  colorSecondary={[0.85, 0.85, 0.85]}
  amplitude={1.2}        // ↓ from 1.6, calmer motion
  distance={0.6}         // ↓ from 0.8
  lineCount={100}        // ↓ from 180, less visual noise
  lineWidth={3}          // ↓ from 6, thinner/subtler
  lineBlur={18}          // ↑ from 10, softer edges
  patternOffset={0.38}
  enableMouseInteraction
  interactionTargetRef={ctaRef}
  className="h-full min-h-full w-full"
/>
        </div>

        <div className="site-container relative z-10 flex flex-col items-center gap-8 text-center">
          <h2 className="text-center uppercase tracking-normal">
            <MotionFade delay={0.05}>
              <span className="block text-[65px] font-light leading-[66.8px]">
                Capital should be a strength,
              </span>
            </MotionFade>
            <MotionFade delay={0.15}>
              <span className="block text-[65px] font-thin leading-[66.8px]">
                not a stress.
              </span>
            </MotionFade>
          </h2>

          <MotionFade delay={0.25}>
            <p className="max-w-2xl text-center text-[16px] font-normal leading-[22.4px] tracking-normal text-white">
              Bring your question. CAPITAIRE will help you turn it into a clear
              route, a clean structure, and a practical next decision.
            </p>
          </MotionFade>

          <MotionFade delay={0.35}>
            <Link
              href="/capital-advisory/contact"
              className="mt-2 inline-block rounded-sm bg-[#1A2334] px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-[#1A2334]/90"
            >
              Start the Conversation
            </Link>
          </MotionFade>
        </div>
      </MotionSection>
    </div>
  );
}
