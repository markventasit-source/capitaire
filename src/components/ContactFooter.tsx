import Image from "next/image";
import Link from "next/link";
import {
  MotionFade,
  MotionItem,
  MotionStagger,
} from "@/components/ui/motion";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.413847267614!2d76.31385187632512!3d9.982632190121844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d9817f6ed11%3A0xec5c9fa02da06fda!2sCAPITAIRE%20-%20KOCHI!5e0!3m2!1sen!2sin!4v1790682674824!5m2!1sen!2sin";

const contactItems = [
  {
    icon: "/location.png",
    label: "Location 1",
    legalEntity: "Waxseal Fintech Private Limited",
    brand: "CAPITAIRE",
    lines: [
      "2nd Floor, Imperial Amity, Chalikkavattom,",
      "NH Bypass, Vyttila, Kochi - 682019",
    ],
  },
  {
    icon: "/location.png",
    label: "Location 2",
    legalEntity: "Waxseal Fintech Private Limited",
    brand: "CAPITAIRE",
    lines: [
      "First Floor, Building No.55-3355B,",
      "Raveendran Road, Kadavanthra, Kochi - 682020",
    ],
  },
  {
    icon: "/mail.png",
    label: "Email",
    lines: ["info@capitaire.com"],
    href: "mailto:info@capitaire.com",
  },
  {
    icon: "/calling.png",
    label: "Phone",
    lines: ["+91 79072 67290"],
    href: "tel:+917907267290",
  },
] as const;

export default function ContactFooter() {
  return (
    <footer className="w-full bg-navy font-sans text-white">
      <div className="site-container grid grid-cols-1 gap-12 py-20 lg:grid-cols-12 lg:gap-16">

        {/* Contact info — left column */}
        <MotionFade delay={0.1} className="flex flex-col gap-10 lg:col-span-5">
          <div className="flex flex-col gap-3">
            <span className="text-gradient-primary text-base font-medium leading-6 uppercase tracking-normal">
              Get in Touch
            </span>
            <h2 className="text-[36px] font-semibold leading-[44px] tracking-normal md:text-[48px] md:leading-[56px]">
              Let us understand your{" "}
              <span className="text-[#cba64b]">CAPITAL journey.</span>
            </h2>
          </div>

          <MotionStagger className="flex flex-col">
            {contactItems.map((item) => (
              <MotionItem
                key={item.label}
                className="flex gap-4 border-b border-white/10 py-5 first:pt-0"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 p-2">
                  <Image
                    src={item.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] object-contain mix-blend-lighten"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  {"href" in item ? (
                    <Link
                      href={item.href}
                      className="text-[16px] font-normal leading-[22.4px] tracking-normal text-[#A5ADBC] transition-colors hover:text-white"
                    >
                      {item.lines[0]}
                    </Link>
                  ) : (
                    <address className="not-italic">
                      <span className="block text-[11px] font-medium uppercase leading-none tracking-widest text-[#CBA64B]">
                        Legal Entity
                      </span>
                      <span className="mt-1 block text-[13px] font-normal leading-[18px] tracking-normal text-[#A5ADBC]">
                        {item.legalEntity}
                      </span>
                      <span className="mt-2 block text-[15px] font-semibold leading-[20px] tracking-normal text-white">
                        {item.brand}
                      </span>
                      {item.lines.map((line) => (
                        <span
                          key={line}
                          className="block text-[13px] font-normal leading-[20px] tracking-normal text-[#A5ADBC]"
                        >
                          {line}
                        </span>
                      ))}
                    </address>
                  )}
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </MotionFade>

        {/* Map — right, large column */}
        <MotionFade
          className="h-[360px] w-full overflow-hidden rounded-[4px] lg:col-span-7 lg:h-full lg:min-h-[560px]"
        >
          <iframe
            src={MAP_EMBED_URL}
            title="CAPITAIRE Kochi office on Google Maps"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </MotionFade>
      </div>

      <div className="border-t border-white/10">
        <MotionFade className="site-container py-6">
          <p className="text-[14px] font-normal leading-5 text-[#848EA3]">
            Copyright © {new Date().getFullYear()} Capitaire. All rights reserved.
          </p>
        </MotionFade>
      </div>
    </footer>
  );
}
