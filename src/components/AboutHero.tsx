import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { MotionFade } from "@/components/ui/motion";

export default function AboutHero() {
  return (
    <>
      <PageBanner title="About Us" />

      <section className="w-full bg-white py-14 text-[#1A2334] md:py-20">
        <div className="site-container grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-6">
          <MotionFade className="flex flex-col gap-6">
            <h2 className="font-[family-name:var(--font-inter)] text-[32px] font-semibold leading-[40px] tracking-normal text-[#1A2334] md:text-[48px] md:leading-[54.8px] lg:text-[40px] lg:leading-[46px] xl:text-[48px] xl:leading-[54.8px]">
              Multidisciplinary <br className="hidden md:inline" />
              Expertise For Complex <br className="hidden md:inline" />
              Business Challenges.
            </h2>

            <div className="flex mr-12 max-w-[760px] flex-col gap-5 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[24px] tracking-normal text-[#555454]">
              <p>
                CAPITAIRE is a multidisciplinary Capital Advisory and Business
                Solutions firm that helps businesses address complex challenges
                through strategic thinking and practical implementation.
              </p>
              <p>
                We bring together professionals across key business functions
                Strategy, Capital Advisory, Finance, Taxation, Risk, Compliance,
                Operations, Technology, and Business Transformation who work
                closely with clients while maintaining an independent perspective
                to understand their business, develop practical solutions, and
                address financial, operational, regulatory, and capital-related
                challenges at every stage of the journey.
              </p>
            </div>
          </MotionFade>

          <MotionFade
            delay={0.1}
            className="relative aspect-[633/428] w-full overflow-hidden rounded-[8px] lg:aspect-auto lg:h-full"
          >
            <Image
              src="/aboutusvideo.png"
              alt="About Capitaire video"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </MotionFade>
        </div>
      </section>
    </>
  );
}
