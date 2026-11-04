"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { MotionFade, MotionItem, MotionStagger } from "@/components/ui/motion";
import { blogPosts } from "@/data/blogs";

// Show exactly 4 posts on this section
const PREVIEW_COUNT = 4;
const posts = blogPosts.slice(0, PREVIEW_COUNT);

function BlogCard({
  post,
}: {
  post: (typeof posts)[number];
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[8px] bg-white">
      <div className="relative aspect-[386/220] w-full shrink-0 overflow-hidden">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 386px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="flex items-center gap-2 border-b border-[#E5E5E5] pb-4 font-[family-name:var(--font-inter)] text-[13px] font-normal leading-none text-[#848EA3]">
          By {post.author}
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#CBA64B]" />
          {post.date}
        </p>
        <h3 className="mt-4 flex-1 font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[24px] tracking-normal text-[#1A2334] md:text-[20px] md:leading-[28px] xl:text-[22px] xl:leading-[30px]">
          {post.title}
        </h3>
        <Link
          href="/capital-advisory/blog"
          className="group mt-5 flex w-fit items-center gap-3 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-none text-[#1A2334]"
        >
          Read more
          <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-[linear-gradient(135deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] text-white transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function HomeBlogsSection() {
  return (
    <section className="w-full bg-[#F3F8FF] py-14 text-[#1A2334] md:py-24">
      <div className="site-container">
        {/* Header */}
        <MotionFade className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-[family-name:var(--font-inter)] text-[13px] font-medium uppercase leading-none tracking-[0.1em] text-[#CBA64B]">
              Latest Insights
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-inter)] text-[28px] font-semibold leading-[36px] tracking-normal md:text-[40px] md:leading-[48px]">
              Read our Blog &amp; Tips
            </h2>
          </div>
          <Link
            href="/capital-advisory/blog"
            className="group hidden items-center gap-2 font-[family-name:var(--font-inter)] text-[14px] font-medium leading-none text-[#1A2334] underline-offset-4 hover:underline sm:flex"
          >
            View all articles
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </MotionFade>

        {/* Desktop grid — 4 columns, hidden on small screens */}
        <MotionStagger className="mt-10 hidden grid-cols-2 gap-5 md:mt-14 md:grid xl:grid-cols-4">
          {posts.map((post) => (
            <MotionItem key={post.slug}>
              <BlogCard post={post} />
            </MotionItem>
          ))}
        </MotionStagger>

        {/* Mobile carousel — 1-2 slides visible, shown below md */}
        <div className="mt-8 md:hidden">
          <Carousel
            opts={{ align: "start", loop: true, slidesToScroll: 1 }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {posts.map((post) => (
                <CarouselItem
                  key={post.slug}
                  className="basis-[82%] pl-3 sm:basis-[48%]"
                >
                  <BlogCard post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom prev/next below the cards */}
            <div className="mt-6 flex items-center justify-between">
              <Link
                href="/capital-advisory/blog"
                className="font-[family-name:var(--font-inter)] text-[14px] font-medium leading-none text-[#1A2334] underline underline-offset-4"
              >
                View all articles
              </Link>
              <div className="flex items-center gap-3">
                <CarouselPrevious
                  className="static h-10 w-10 translate-x-0 translate-y-0 rounded-full border border-[#D9DEE7] bg-white text-[#1A2334] shadow-none hover:bg-[#1A2334] hover:text-white disabled:opacity-30"
                />
                <CarouselNext
                  className="static h-10 w-10 translate-x-0 translate-y-0 rounded-full border border-[#D9DEE7] bg-white text-[#1A2334] shadow-none hover:bg-[#1A2334] hover:text-white disabled:opacity-30"
                />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
