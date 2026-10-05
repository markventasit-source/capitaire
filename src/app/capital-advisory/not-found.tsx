import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
import { MotionHero } from "@/components/ui/motion";
import FooterSection from "@/components/FooterSection";
import MobileFooter from "@/components/MobileFooter";

export default function CapitalAdvisoryNotFound() {
  return (
    <>
      <title>Page Not Found | CAPITAIRE</title>
      <section className="w-full bg-navy max-[589px]:bg-transparent">
        <div className="site-container flex min-h-[calc(100dvh-88px)] flex-col items-center justify-center py-20 text-center max-[589px]:min-h-[calc(100dvh-80px-88px)]">
          <MotionHero>
            <p className="text-gradient-primary text-[120px] font-semibold leading-none tracking-tight md:text-[180px]">
              404
            </p>
          </MotionHero>

          <MotionHero delay={0.1} className="mt-6 flex flex-col items-center gap-4">
            <h1 className="font-[family-name:var(--font-inter)] text-[30px] font-light leading-[100%] tracking-normal text-white md:text-[38px]">
              Page not found
            </h1>
            <p className="max-w-md text-base leading-6 text-[#A5ADBC]">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved. Let&apos;s get you back on track.
            </p>
          </MotionHero>

          <MotionHero delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ShinyButton
              href="/capital-advisory"
              className="rounded-md border-0 bg-[linear-gradient(90deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] px-6 py-3 shadow-none hover:shadow-none dark:hover:shadow-none [&>span:first-child]:text-[15px] [&>span:first-child]:font-semibold [&>span:first-child]:leading-none [&>span:first-child]:text-white [&>span:first-child]:uppercase [&>span:first-child]:tracking-normal"
            >
              Back to Home
            </ShinyButton>
            <Link
              href="/capital-advisory/contact"
              className="rounded-md border border-[#cba64b]/40 px-6 py-3 text-[15px] font-semibold leading-none text-primary uppercase transition-all hover:border-primary hover:bg-primary/10"
            >
              Contact Us
            </Link>
          </MotionHero>
        </div>
      </section>
      <MobileFooter />
      <div className="max-[589px]:hidden">
        <FooterSection />
      </div>
    </>
  );
}
