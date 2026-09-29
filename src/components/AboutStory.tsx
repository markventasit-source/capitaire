import Image from "next/image";
import { MotionFade } from "@/components/ui/motion";

const leftParagraphs = [
  "After spending more than 15 years at leading consulting firms, our founders had the opportunity to advise businesses of every size\u2014from large multinational corporations to growing enterprises.",
  "Across different businesses, they found that advisory was exceptional and businesses valued advice, but many found technical, financial and advisory language difficult to translate into practical business decisions.",
  "Many conversations were filled with technical terminology, complex frameworks, and corporate language.",
];

const rightParagraphs = [
  "While business owners spoke about cash flow, customers, and business expansion in layman\u2019s terms, advisors often used language that was difficult to grasp.",
  "Furthermore, our founders observed another reality: Many business owners were either unaware of advisory solutions or believed they were only for large corporates. Thus, many important business decisions relating to finance, taxation, strategy, governance, restructuring, risk management, succession and business growth were made without the benefit of structured advisory support.",
];

export default function AboutStory() {
  return (
    <section className="w-full bg-white pb-14 md:pb-20">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-[12px] bg-[#FFFCF6] px-6 py-10 text-[#1A2334] md:px-12 md:py-12">
          <Image
            src="/lines2.png"
            alt=""
            width={153}
            height={101}
            aria-hidden
            className="pointer-events-none absolute right-6 top-0 h-auto w-[110px] md:right-12 md:w-[153px]"
          />

          <MotionFade className="relative flex flex-col gap-4 md:flex-row md:items-end md:gap-12 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
            <h2 className="font-[family-name:var(--font-inter)] text-[32px] font-semibold leading-[40px] tracking-normal text-[#1A2334] md:text-[48px] md:leading-[54.8px]">
              Where <br />
              it all began
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[20px] font-medium leading-[28px] tracking-normal text-[#1A2334] md:pb-1.5 md:text-[24px] md:leading-[32px]">
              CAPITAIRE began with a simple observation
            </p>
          </MotionFade>

          <MotionFade
            delay={0.1}
            className="mt-8 grid grid-cols-1 gap-5 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[24px] tracking-normal text-[#555454] lg:grid-cols-2 lg:gap-x-14"
          >
            <div className="flex flex-col gap-5">
              {leftParagraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {rightParagraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </MotionFade>

          <MotionFade delay={0.15} className="mt-10 md:mt-12">
            <Image
              src="/about.png"
              alt="Capitaire founders in a client advisory meeting"
              width={1203}
              height={410}
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="h-auto w-full rounded-[8px]"
            />
          </MotionFade>
        </div>
      </div>
    </section>
  );
}
