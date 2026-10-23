"use client";

import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  { value: 260, suffix: "+", label: "Businesses Empowered" },
  { value: 120, suffix: "+", label: "Business Valuations" },
  { value: 100, suffix: "+", label: "Investor Onboardings" },
  { value: 60, suffix: "+", label: "Companies' IFC Processes Implemented" },
] as const;

export default function MobileStatsGrid() {
  return (
    <section className="relative z-10 hidden w-full bg-transparent px-5 pb-12 pt-4 max-[589px]:block">
      <div className="grid grid-cols-2 gap-x-5 gap-y-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-l border-[#606D88] pl-3"
            style={{ borderLeftWidth: "1px" }}
          >
            <p className="font-[family-name:var(--font-inter)] text-[28px] font-medium leading-[42px] tracking-normal text-[#CBA64B]">
              <NumberTicker
                value={stat.value}
                className="font-[family-name:var(--font-inter)] text-[28px] font-medium tracking-normal text-[#CBA64B]"
              />
              {stat.suffix}
            </p>
            <p className="mt-1 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[19px] tracking-normal text-white">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
