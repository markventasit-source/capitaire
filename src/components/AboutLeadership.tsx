import Image from "next/image";
import { MotionFade } from "@/components/ui/motion";

export default function AboutLeadership() {
  return (
    <section className="w-full bg-white pb-14 text-[#1A2334] min-[590px]:pb-0">
      <div className="site-container">
        <MotionFade className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-[32px] font-semibold leading-[40px] tracking-normal md:text-[48px] md:leading-[54.8px]">
            Meet Our Leadership
          </h2>
          <p className="mt-5 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[24px] tracking-normal text-[#555454] md:mt-6">
            Capitaire is built on a team of professionals and managers with
            experience from leading consulting firms and corporations like EY,
            KPMG, Deloitte, Reliance, Grant Thornton and others. Our
            multidisciplinary team combines expertise across finance, law,
            taxation, operations, and governance to deliver tailored strategic
            solutions to businesses.
          </p>
        </MotionFade>

        <div className="relative mt-8 md:mt-10">
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 hidden h-[24%] w-screen -translate-x-1/2 bg-navy min-[590px]:block"
          />
          <MotionFade className="relative" delay={0.1}>
            <Image
              src="/team.png"
              alt="The CAPITAIRE team standing together on stage"
              width={1320}
              height={403}
              sizes="(min-width: 1440px) 1344px, 100vw"
              className="h-auto w-full rounded-[8px]"
            />
          </MotionFade>
        </div>
      </div>
    </section>
  );
}
