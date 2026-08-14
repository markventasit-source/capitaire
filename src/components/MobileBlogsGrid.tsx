"use client";

import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import { ShinyButton } from "@/components/ui/shiny-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { mobileHeroTitles } from "@/components/HeroSection";

const posts = [
  {
    title: "Limited Liability Partnership (LLP) Compliance Manual",
    category: "Blog",
    date: "July 2026",
    image: "/blogimage.png",
    href: "/blog",
  },
  {
    title: "Limited Liability Partnership (LLP) Compliance Manual",
    category: "Blog",
    date: "July 2026",
    image: "/blogimage.png",
    href: "/blog",
  },
  {
    title: "Limited Liability Partnership (LLP) Compliance Manual",
    category: "Blog",
    date: "July 2026",
    image: "/blogimage.png",
    href: "/blog",
  },
  {
    title: "Limited Liability Partnership (LLP) Compliance Manual",
    category: "Blog",
    date: "July 2026",
    image: "/blogimage.png",
    href: "/blog",
  },
] as const;

function ReadMoreArrow() {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M7.2.8 11 5 7.2 9.2M11 5H.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MobileBlogsGrid() {
  return (
    <section className="relative z-10 hidden w-full bg-transparent pb-12 pt-4 max-[489px]:block">
      <Marquee className="w-full overflow-hidden p-0 [--duration:18s] [--gap:1.25rem]">
        {mobileHeroTitles.map((item) => (
          <span
            key={item}
            className="flex shrink-0 items-center gap-5 whitespace-nowrap font-[family-name:var(--font-inter)] text-[32px] font-semibold leading-none tracking-normal text-[#CBA64B]"
          >
            {item}
            <span
              aria-hidden
              className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#CBA64B]"
            />
          </span>
        ))}
      </Marquee>

      <div className="mt-8 grid grid-cols-2 gap-3 px-5">
        {posts.map((post, index) => (
          <BlurFade
            key={`${post.title}-${index}`}
            inView
            delay={index * 0.08}
            direction="up"
          >
            <Link
              href={post.href}
              className="block overflow-hidden rounded-[12px] bg-[#2A3448]"
            >
              <div className="relative h-[108px] w-full">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-3 pb-3.5 pt-3">
                <p className="font-[family-name:var(--font-inter)] text-[12px] font-normal leading-none tracking-normal text-white">
                  {post.category} • {post.date}
                </p>
                <h3 className="font-[family-name:var(--font-inter)] text-[14px] font-medium leading-[17px] tracking-normal text-white">
                  {post.title}
                </h3>
                <span className="mt-0.5 inline-flex items-center gap-1.5 font-[family-name:var(--font-inter)] text-[12px] font-normal leading-none tracking-normal text-[#CBA64B]">
                  Read More
                  <ReadMoreArrow />
                </span>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>

      <div className="mt-8 flex justify-center px-5">
        <ShinyButton
          href="/blog"
          className="rounded-full border-0 bg-[linear-gradient(90deg,#22314C_0%,#2E4470_100%)] px-8 py-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] [&>span:first-child]:flex [&>span:first-child]:items-center [&>span:first-child]:gap-2 [&>span:first-child]:font-sans [&>span:first-child]:text-[20px] [&>span:first-child]:font-medium [&>span:first-child]:normal-case [&>span:first-child]:leading-[100%] [&>span:first-child]:tracking-normal [&>span:first-child]:text-white"
        >
          Read All Our Blogs
          <Image
            src="/arrow.svg"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
            aria-hidden
          />
        </ShinyButton>
      </div>
    </section>
  );
}
