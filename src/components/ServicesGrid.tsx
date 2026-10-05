import Image from "next/image";
import Link from "next/link";
import { MotionItem, MotionStagger } from "@/components/ui/motion";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="w-full bg-[#F3F8FF] py-14 text-[#1A2334] md:py-24">
      <MotionStagger className="site-container grid grid-cols-1 gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <MotionItem
            key={service.slug}
            id={service.slug}
            className="group flex scroll-mt-28 items-center gap-4 rounded-[4px] bg-white p-5 transition-colors duration-300 hover:bg-[#CBA64B] focus-within:bg-[#CBA64B] md:gap-6 md:p-7"
          >
            <div className="flex min-w-0 flex-1 flex-col items-start">
              <span className="flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#CBA64B] [clip-path:polygon(0_0,72%_0,100%_28%,100%_100%,28%_100%,0_72%)]">
                <Image
                  src={service.icon}
                  alt=""
                  width={24}
                  height={24}
                  className={`h-6 w-6 ${service.icon.endsWith(".svg") ? "brightness-0 invert" : ""}`}
                />
              </span>

              <h2 className="mt-8 font-[family-name:var(--font-inter)] text-[20px] font-semibold leading-[26px] tracking-normal text-[#1A2334] transition-colors duration-300 group-hover:text-white group-focus-within:text-white md:mt-10 md:text-[24px] md:leading-[30px]">
                {service.title[0]}
                <br />
                {service.title[1]}
              </h2>

              <p className="mt-3 max-w-[240px] font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[22px] tracking-normal text-[#555454] transition-colors duration-300 group-hover:text-white/90 group-focus-within:text-white/90 md:mt-4">
                {service.description}
              </p>

              <Link
                href={service.detail ? `/capital-advisory/services/${service.slug}` : `#${service.slug}`}
                className="mt-8 inline-flex items-center rounded-[2px] bg-[linear-gradient(90deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] px-4 py-3 font-[family-name:var(--font-inter)] text-[12px] font-medium uppercase leading-none tracking-wide text-white transition-colors duration-300 group-hover:bg-none group-hover:bg-white group-hover:text-[#1A2334] group-focus-within:bg-none group-focus-within:bg-white group-focus-within:text-[#1A2334] md:mt-10 md:px-5 md:text-[13px]"
              >
                Explore Services
              </Link>
            </div>

            <div className="relative aspect-[262/335] w-[40%] max-w-[262px] shrink-0">
              <Image
                src="/servicepage.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 262px, 40vw"
                className="object-contain"
              />
            </div>
          </MotionItem>
        ))}
      </MotionStagger>
    </section>
  );
}
