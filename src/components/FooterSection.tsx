import Image from "next/image";
import Link from "next/link";
import {
  MotionFade,
  MotionItem,
  MotionScale,
  MotionStagger,
} from "@/components/ui/motion";

const contactItems = [
  {
    icon: "/location.png",
    label: "Location 1",
    lines: [
      "2nd Floor, Imperial Amity, Chalikkavattom, NH Bypass, Vyttila, Kochi - 682019",
    ],
  },
  {
    icon: "/location.png",
    label: "Location 2",
    lines: [
      "First Floor, Building No.55-3355B, Raveendran Road, Kadavanthra, Kochi - 682020",
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

const capitalNeeds = [
  "Business valuation",
  "Fundraising readiness",
  "Capital structuring",
  "Entity structuring",
  "Cross-border advisory",
  "Governance and succession",
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-navy font-sans text-white">
      <div className="site-container grid grid-cols-1 gap-12 py-20 lg:grid-cols-12 lg:gap-16">
        <MotionFade className="flex flex-col gap-10 lg:col-span-5">
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

                <div className="flex flex-col gap-3">
                  {item.lines.map((line) =>
                    "href" in item && item.href ? (
                      <Link
                        key={line}
                        href={item.href}
                        className="text-[16px] font-normal leading-[22.4px] tracking-normal text-[#A5ADBC] transition-colors hover:text-white"
                      >
                        {line}
                      </Link>
                    ) : (
                      <p
                        key={line}
                        className="text-[16px] font-normal leading-[22.4px] tracking-normal text-[#A5ADBC]"
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </MotionFade>

        <MotionScale className="lg:col-span-7" delay={0.1}>
          <form className="rounded-sm border border-white/10 bg-[#1F293D] p-6 md:p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-[14px] font-normal leading-5 text-[#A5ADBC]">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="rounded-sm border border-white/10 bg-[#1A2334] px-4 py-3 text-[14px] text-white outline-none placeholder:text-[#848EA3] focus:border-[#cba64b]/50"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[14px] font-normal leading-5 text-[#A5ADBC]">
                  Business Name
                </span>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Choose one..."
                  className="rounded-sm border border-white/10 bg-[#1A2334] px-4 py-3 text-[14px] text-white outline-none placeholder:text-[#848EA3] focus:border-[#cba64b]/50"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[14px] font-normal leading-5 text-[#A5ADBC]">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@testmail.com"
                  className="rounded-sm border border-white/10 bg-[#1A2334] px-4 py-3 text-[14px] text-white outline-none placeholder:text-[#848EA3] focus:border-[#cba64b]/50"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[14px] font-normal leading-5 text-[#A5ADBC]">
                  Phone
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 9995 1235 4565"
                  className="rounded-sm border border-white/10 bg-[#1A2334] px-4 py-3 text-[14px] text-white outline-none placeholder:text-[#848EA3] focus:border-[#cba64b]/50"
                />
              </label>

              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-[14px] font-normal leading-5 text-[#A5ADBC]">
                  Capital Need
                </span>
                <select
                  name="capitalNeed"
                  defaultValue="Business valuation"
                  className="rounded-sm border border-white/10 bg-[#1A2334] px-4 py-3 text-[14px] text-white outline-none focus:border-[#cba64b]/50"
                >
                  {capitalNeeds.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="text-[14px] font-normal leading-5 text-[#A5ADBC]">
                  Context
                </span>
                <textarea
                  name="context"
                  rows={4}
                  placeholder="A short note about your current situation"
                  className="resize-none rounded-sm border border-white/10 bg-[#1A2334] px-4 py-3 text-[14px] text-white outline-none placeholder:text-[#848EA3] focus:border-[#cba64b]/50"
                />
              </label>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="submit"
                className="rounded-sm bg-[linear-gradient(90deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              >
                Send Enquiry
              </button>
              <Link
                href="mailto:info@capitaire.com"
                className="inline-flex items-center justify-center rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Email Directly
              </Link>
            </div>
          </form>
        </MotionScale>
      </div>

      <div className="border-t border-white/10">
        <MotionFade className="site-container py-6">
          <p className="text-[14px] font-normal leading-5 text-[#848EA3]">
            Copyright © 2025 Capitaire. All rights reserved.
          </p>
        </MotionFade>
      </div>
    </footer>
  );
}
