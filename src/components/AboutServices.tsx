import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionFade, MotionItem, MotionStagger } from "@/components/ui/motion";

const offerings = [
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
] as const;

const stackLayers = [
  "inset-x-[3%] -top-5 opacity-30 md:-top-8",
  "inset-x-[6.5%] -top-10 opacity-20 md:-top-16",
  "inset-x-[10.5%] -top-15 opacity-10 md:-top-24",
] as const;

export default function AboutServices() {
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

        <MotionFade className="relative mt-16 md:mt-32" delay={0.1}>
          {stackLayers.map((layer) => (
            <div
              key={layer}
              aria-hidden
              className={`absolute bottom-0 rounded-[8px] bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923] ${layer}`}
            />
          ))}

          <div className="relative grid grid-cols-1 gap-8 rounded-[8px] bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923] p-6 md:p-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-10">
            <div className="flex flex-col">
              <h3 className="font-[family-name:var(--font-inter)] text-[28px] font-semibold leading-tight tracking-normal text-white md:text-[36px]">
                Business Valuations
              </h3>
              <p className="mt-3 max-w-[560px] font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[22px] tracking-normal text-white/90 md:text-[16px] md:leading-[24px]">
                Every business is in a unique position in the market. Financial
                reports, customer feedback, and shareholders&apos; insights tell
                a different story.
              </p>

              <MotionStagger className="mt-6 flex flex-col gap-3">
                {offerings.map((item) => (
                  <MotionItem
                    key={item.title}
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
                  </MotionItem>
                ))}
              </MotionStagger>

              <Link
                href="/services"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-[4px] bg-white px-5 py-3 font-[family-name:var(--font-inter)] text-[14px] font-medium leading-none text-[#1A2334] transition-colors hover:bg-[#FFFCF6]"
              >
                Learn More
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="relative aspect-[574/626] w-full overflow-hidden rounded-[8px] lg:aspect-auto lg:h-full">
              <Image
                src="/aboutsection.png"
                alt="Valuation reports, a laptop with charts, and a model building on a desk"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </MotionFade>
      </div>
    </section>
  );
}
