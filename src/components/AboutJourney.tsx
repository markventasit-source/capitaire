import Image from "next/image";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  MotionFade,
  MotionItem,
  MotionStagger,
} from "@/components/ui/motion";

const stats = [
  { value: 35, label: ["Years of collective", "consulting experience"] },
  { value: 200, label: ["Businesses", "supported"] },
  { value: 30, label: ["Professionals", "& experts"] },
  { value: 500, label: ["Advisory", "engagements"] },
] as const;

const pillars = [
  {
    title: "Our Mission",
    icon: "/vission.png",
    description:
      "Empowering business transformation through practical, integrated solutions that create lasting value.",
  },
  {
    title: "Our Vision",
    icon: "/mission.png",
    description:
      "To become the most trusted and leading business and capital advisory firm, delivering strategic solutions that drive sustainable growth.",
  },
  {
    title: "Our Values",
    icon: "/values.png",
    values: [
      "Integrity & Transparency",
      "Commitment to Client Success",
      "Respect & Empathy",
      "Social & Environmental Responsibility",
    ],
  },
] as const;

export default function AboutJourney() {
  return (
    <section className="w-full overflow-hidden bg-white pb-14 text-[#1A2334] md:pb-20">
      <div className="site-container">
        <MotionFade className="flex flex-col gap-10 border-b border-[#E5E5E5] pb-12 lg:pb-16 xl:flex-row xl:items-start xl:gap-16">
          <h2 className="shrink-0 font-[family-name:var(--font-inter)] text-[32px] font-semibold leading-[40px] tracking-normal md:text-[48px] md:leading-[54.8px]">
            Our Journey <br />
            So Far
          </h2>

          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 xl:flex xl:flex-1 xl:justify-between xl:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label.join(" ")}
                className="border-l border-[#E5E5E5] pl-5 md:pl-6"
              >
                <p className="font-[family-name:var(--font-inter)] text-[36px] font-semibold leading-none text-[#CBA64B] md:text-[44px]">
                  <NumberTicker value={stat.value} className="tracking-normal" />
                  +
                </p>
                <p className="mt-3 font-[family-name:var(--font-inter)] text-[14px] font-normal uppercase leading-[22px] tracking-normal text-[#555454] md:text-[16px] md:leading-[24px]">
                  {stat.label[0]}
                  <br />
                  {stat.label[1]}
                </p>
              </div>
            ))}
          </div>
        </MotionFade>

        <div className="relative mt-16 md:mt-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-12 left-[89%] top-[18%] hidden bg-[radial-gradient(#D9D9D9_1px,transparent_1px)] bg-[size:12px_12px] bg-fixed lg:block"
          />

          <MotionStagger className="relative grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <MotionItem
                key={pillar.title}
                className="flex flex-col rounded-[4px] bg-[#FFFCF6] p-8 md:p-10"
              >
                <Image
                  src={pillar.icon}
                  alt=""
                  width={75}
                  height={75}
                  aria-hidden
                  className="h-[75px] w-[75px]"
                />
                <h3 className="mt-9 font-[family-name:var(--font-inter)] text-[28px] font-semibold leading-[36px] tracking-normal text-[#CBA64B] md:text-[32px] md:leading-[40px]">
                  {pillar.title}
                </h3>
                {"values" in pillar ? (
                  <ul className="mt-4 flex list-disc flex-col gap-1 pl-5 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[24px] tracking-normal text-[#555454] marker:text-[#1A2334]">
                    {pillar.values.map((value) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[24px] tracking-normal text-[#555454]">
                    {pillar.description}
                  </p>
                )}
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
