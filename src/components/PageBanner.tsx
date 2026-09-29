import Image from "next/image";
import { MotionHero } from "@/components/ui/motion";

export default function PageBanner({ title }: { title: string }) {
  return (
    <section className="w-full bg-navy">
      <div className="site-container flex h-[160px] items-end md:h-[200px]">
        <MotionHero className="flex items-center gap-5 md:gap-6">
          <Image
            src="/lines.png"
            alt=""
            width={220}
            height={101}
            aria-hidden
            className="h-auto w-[150px] md:w-[220px]"
          />
          <h1 className="font-[family-name:var(--font-inter)] text-[30px] pb-6 px-4 font-light leading-[100%] tracking-normal text-white md:text-[38px] md:pb-10 md:px-6">
            {title}
          </h1>
        </MotionHero>
      </div>
    </section>
  );
}
