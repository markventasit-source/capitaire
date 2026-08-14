"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

const clients = [
  { name: "Client 1", logo: "/c1.jpg" },
  { name: "Client 2", logo: "/c2.png" },
  { name: "Client 3", logo: "/c3.png" },
  { name: "Client 4", logo: "/c4.jpg" },
  { name: "Client 5", logo: "/c5.jpg" },
  { name: "Client 6", logo: "/c6.png" },
  { name: "Client 7", logo: "/c7.png" },
  { name: "Client 8", logo: "/c8.jpg" },
  { name: "Client 9", logo: "/c9.png" },
  { name: "Client 10", logo: "/c10.png" },
  { name: "Client 11", logo: "/c11.png" },
  { name: "Client 12", logo: "/c12.png" },
] as const;

export default function MobileClientsGrid() {
  return (
    <section className="relative z-10 hidden w-full bg-transparent px-5 pb-12 pt-6 max-[589px]:block">
      <h2 className="mb-5 font-[family-name:var(--font-inter)] text-[36px] font-semibold leading-none tracking-[-0.015em] text-white">
        Clients
      </h2>

      <div className="overflow-hidden rounded-[16px] bg-white">
        <div className="grid grid-cols-3">
          {clients.map((client, index) => {
            const isLastCol = (index + 1) % 3 === 0;
            const isLastRow = index >= 9;

            return (
              <BlurFade
                key={client.logo}
                inView
                delay={index * 0.06}
                direction="up"
                className={`flex h-[88px] items-center justify-center px-3 py-4 ${
                  !isLastCol ? "border-r border-[#E8DDC3]" : ""
                } ${!isLastRow ? "border-b border-[#E8DDC3]" : ""}`}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={100}
                  height={48}
                  className="max-h-10 w-auto max-w-[90px] object-contain"
                />
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
