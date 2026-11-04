import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { MotionFade, MotionItem, MotionScale, MotionStagger } from "@/components/ui/motion";

const contactItems = [
  {
    label: "Email",
    icon: "/mail.png",
    lines: ["info@capitaire.com"],
    href: "mailto:info@capitaire.com",
  },
  {
    label: "Phone",
    icon: "/calling.png",
    lines: ["+91 79072 67290"],
    href: "tel:+917907267290",
  },
  {
    label: "Address",
    icon: "/location.png",
    legalEntity: "Waxseal Fintech Private Limited",
    brand: "CAPITAIRE",
    lines: [
      "2nd Floor, Imperial Amity, NH Bypass,",
      "Vyttila, Kochi, Kerala – 682019, India",
    ],
  },
] as const;

export default function ContactSection() {
  return (
    <>
      <section className="relative isolate w-full bg-white pb-14 pt-12 text-[#1A2334] md:pb-24 md:pt-24">
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-[38%] bg-[#FFFCF6]"
        />

        <div className="site-container grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.75fr)] lg:gap-8">
          {/* Contact info — left column */}
          <MotionFade delay={0.1} className="flex flex-col">
            <h2 className="font-[family-name:var(--font-inter)] text-[32px] font-semibold leading-[40px] tracking-normal md:text-[38px] md:leading-[46px]">
              Get in Touch
            </h2>
            <p className="mt-5 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[24px] tracking-normal text-[#555454]">
              Have a question or feedback?
              <br />
              Fill out the form below, and we&apos;ll respond promptly!
            </p>

            <MotionStagger className="mt-10 flex flex-col gap-10 md:mt-14 md:gap-14">
              {contactItems.map((item) => (
                <MotionItem key={item.label} className="flex items-start gap-5">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] md:h-[76px] md:w-[76px]">
                    <Image
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="h-6 w-6 brightness-0 invert"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal leading-5 tracking-normal text-[#555454]">
                      {item.label}
                    </p>
                    {"href" in item ? (
                      <Link
                        href={item.href}
                        className="mt-1.5 block font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[24px] tracking-normal text-[#1A2334] transition-colors hover:text-[#CBA64B] md:text-[18px]"
                      >
                        {item.lines[0]}
                      </Link>
                    ) : (
                      <address className="mt-1.5 font-[family-name:var(--font-inter)] not-italic">
                        <span className="block text-[11px] font-medium uppercase leading-none tracking-widest text-[#CBA64B]">
                          Legal Entity
                        </span>
                        <span className="mt-1 block text-[13px] font-normal leading-[18px] tracking-normal text-[#555454]">
                          {"legalEntity" in item ? item.legalEntity : ""}
                        </span>
                        <span className="mt-2 block text-[16px] font-semibold leading-[22px] tracking-normal text-[#1A2334] md:text-[18px]">
                          {"brand" in item ? item.brand : ""}
                        </span>
                        {item.lines.map((line) => (
                          <span
                            key={line}
                            className="block text-[14px] font-normal leading-[22px] tracking-normal text-[#555454]"
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

          {/* Form — right, large column */}
          <MotionScale delay={0.05}>
            <ContactForm />
          </MotionScale>
        </div>
      </section>

      <section className="relative isolate w-full pb-14 min-[590px]:pb-0">
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[61%] bg-[#FFFCF6]" />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 hidden h-[19%] bg-navy min-[590px]:block"
        />

        <div className="site-container">
          <MotionFade className="relative overflow-hidden rounded-[4px] bg-navy">
            <div className="relative aspect-[4096/1103] w-full">
              <Image
                src="/contactpage.png"
                alt="Hands carefully balancing a stack of wooden blocks"
                fill
                sizes="(min-width: 1440px) 1344px, 100vw"
                className="object-cover object-left"
              />
            </div>
            <p className="px-6 pb-8 font-[family-name:var(--font-inter)] text-[24px] font-light leading-[32px] tracking-normal text-white md:absolute md:inset-y-0 md:right-0 md:flex md:w-[46%] md:items-center md:p-0 md:pr-10 md:text-[30px] md:leading-[38px] xl:text-[40px] xl:leading-[50px]">
              Are you structuring your deal right or setting up future conflict ?
            </p>
          </MotionFade>
        </div>
      </section>
    </>
  );
}
