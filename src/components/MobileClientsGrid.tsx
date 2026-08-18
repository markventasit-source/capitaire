"use client";

import {
  ClientLogoCell,
  useRandomClientLogos,
} from "@/components/ClientLogoRotator";

const VISIBLE_COUNT = 12;

export default function MobileClientsGrid() {
  const logos = useRandomClientLogos(VISIBLE_COUNT);

  return (
    <section className="relative z-10 hidden w-full bg-transparent px-5 pb-12 pt-6 max-[589px]:block">
      <h2 className="mb-5 font-[family-name:var(--font-inter)] text-[36px] font-semibold leading-none tracking-[-0.015em] text-white">
        Clients
      </h2>

      <div className="overflow-hidden rounded-[16px] bg-white">
        <div className="grid grid-cols-3">
          {logos.map((logo, index) => {
            const isLastCol = (index + 1) % 3 === 0;
            const isLastRow = index >= 9;

            return (
              <ClientLogoCell
                key={index}
                logo={logo}
                className={`h-[88px] px-3 py-4 ${
                  !isLastCol ? "border-r border-[#E8DDC3]" : ""
                } ${!isLastRow ? "border-b border-[#E8DDC3]" : ""}`}
                imageClassName="max-h-10 w-auto max-w-[90px] object-contain"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
