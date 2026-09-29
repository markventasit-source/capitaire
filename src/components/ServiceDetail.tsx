"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";
import { MotionFade, MotionItem, MotionStagger } from "@/components/ui/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems, promisePoints } from "@/components/CommonQuestions";
import type { ServiceTopic } from "@/data/services";

const contacts = [
  { icon: "/mail.png", label: "info@capitaire.com", href: "mailto:info@capitaire.com" },
  { icon: "/calling.png", label: "+91 79072 67290", href: "tel:+917907267290" },
] as const;

type ServiceDetailProps = {
  heading: string;
  image: string;
  topics: readonly ServiceTopic[];
};

export default function ServiceDetail({ heading, image, topics }: ServiceDetailProps) {
  const [active, setActive] = useState(0);
  const topic = topics[active];

  return (
    <section className="w-full bg-[#F3F8FF] pb-14 pt-12 text-[#1A2334] md:pb-24 md:pt-20">
      <div className="site-container">
        <MotionFade>
          <h1 className="font-[family-name:var(--font-inter)] text-[32px] font-semibold leading-[40px] tracking-normal md:text-[48px] md:leading-[54.8px]">
            {heading}
          </h1>
        </MotionFade>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-8 xl:grid-cols-[316px_minmax(0,1fr)] xl:gap-x-12">
          <MotionStagger className="flex flex-col gap-3 lg:col-start-1 lg:row-start-1">
            {topics.map((item, index) => {
              const isActive = index === active;
              return (
                <MotionItem key={item.title}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex w-full cursor-pointer items-center justify-between gap-4 rounded-[4px] px-5 py-4 text-left font-[family-name:var(--font-inter)] text-[16px] leading-[22px] tracking-normal transition-colors duration-300 md:text-[18px] md:leading-[24px]",
                      isActive
                        ? "bg-[linear-gradient(90deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] font-semibold text-white"
                        : "bg-white font-normal text-[#1A2334] hover:bg-[#FFFCF6]",
                    )}
                  >
                    {item.title}
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px]",
                        isActive ? "border border-white text-white" : "bg-[#1A2334] text-white",
                      )}
                    >
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </button>
                </MotionItem>
              );
            })}
          </MotionStagger>

          <MotionFade
            delay={0.1}
            className="rounded-[8px] bg-white p-5 md:p-10 lg:col-start-2 lg:row-span-2 lg:row-start-1 xl:p-12"
          >
            <div className="relative aspect-[858/549] w-full overflow-hidden rounded-b-[12px] md:aspect-[858/420]">
              <Image
                src={image}
                alt=""
                fill
                priority
                sizes="(min-width: 1280px) 900px, (min-width: 1024px) 65vw, 100vw"
                className="object-cover object-top"
              />
            </div>

            <BlurFade key={topic.title} direction="up" duration={0.35} className="mt-8 md:mt-10">
              <h2 className="font-[family-name:var(--font-inter)] text-[30px] font-semibold leading-[38px] tracking-normal md:text-[44px] md:leading-[52px]">
                {topic.title}
              </h2>
              <p className="mt-4 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[24px] tracking-normal text-[#555454]">
                {topic.description}
              </p>
            </BlurFade>

            <div className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
              <div className="rounded-[4px] bg-[#F3F8FF] p-6 md:p-8">
                <span className="text-gradient-primary font-[family-name:var(--font-inter)] text-[14px] font-medium uppercase leading-5 tracking-normal">
                  Our Promise
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-inter)] text-[24px] font-medium leading-[30px] tracking-normal md:text-[28px] md:leading-[34px]">
                  A long-term advisory partner, not a one-time report.
                </h3>
                <p className="mt-6 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[22px] tracking-normal text-[#848EA3]">
                  Contact us today for a free consultation and let&apos;s build
                  something durable together
                </p>
                <ul className="mt-8 flex flex-col gap-4">
                  {promisePoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[20px] tracking-normal text-[#848EA3]"
                    >
                      <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rotate-45 bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <Accordion type="single" collapsible defaultValue="faq-0" className="gap-0">
                {faqItems.slice(0, 4).map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`faq-${index}`}
                    className="border-b border-[#D9DEE7] not-last:border-b"
                  >
                    <AccordionTrigger className="items-center gap-4 rounded-none py-5 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[24px] tracking-normal text-[#1A2334] no-underline hover:no-underline data-[state=open]:text-[18px] data-[state=open]:font-medium data-[state=open]:leading-[26px] **:data-[slot=accordion-trigger-icon]:hidden">
                      <span className="flex-1">{item.question}</span>
                      <Plus
                        aria-hidden
                        className="h-5 w-5 shrink-0 text-[#848EA3] group-aria-expanded/accordion-trigger:hidden"
                      />
                      <Minus
                        aria-hidden
                        className="hidden h-5 w-5 shrink-0 text-[#848EA3] group-aria-expanded/accordion-trigger:block"
                      />
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[22px] tracking-normal text-[#555454]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </MotionFade>

          <MotionFade
            delay={0.15}
            className="relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[4px] bg-navy p-8 text-white lg:col-start-1 lg:row-start-2 lg:self-start"
          >
            <Image
              src="/man.jpg"
              alt=""
              fill
              sizes="(min-width: 1280px) 316px, (min-width: 1024px) 280px, 100vw"
              className="-z-20 object-cover object-top"
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(26,35,52,0.72)_0%,rgba(26,35,52,0.86)_40%,#1A2334_72%)]"
            />

            <h2 className="font-[family-name:var(--font-inter)] text-[24px] font-semibold leading-[30px] tracking-normal">
              How can we help
            </h2>
            <p className="mt-3 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[22px] tracking-normal text-white/80">
              If you need any help, please feel free to contact us.
            </p>

            <ul className="mt-8 flex flex-col gap-5">
              {contacts.map((contact) => (
                <li key={contact.href}>
                  <Link
                    href={contact.href}
                    className="flex items-center gap-4 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-6 tracking-normal text-white transition-colors hover:text-[#DFD18D]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)]">
                      <Image
                        src={contact.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5 brightness-0 invert"
                      />
                    </span>
                    {contact.label}
                  </Link>
                </li>
              ))}
            </ul>
          </MotionFade>
        </div>
      </div>
    </section>
  );
}
