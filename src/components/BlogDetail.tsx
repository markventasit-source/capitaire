"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogShareButtons from "@/components/BlogShareButtons";
import { MotionFade, MotionItem, MotionStagger } from "@/components/ui/motion";
import {
  sampleBlogSections,
  type BlogPost,
} from "@/data/blogs";

type BlogDetailProps = {
  post: BlogPost;
  related: readonly BlogPost[];
};

export default function BlogDetail({ post, related }: BlogDetailProps) {
  return (
    <section className="w-full bg-[#F3F8FF] pb-14 pt-6 text-[#1A2334] md:pb-24 md:pt-10">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-12">
          <MotionFade className="min-w-0">
            <article className="overflow-hidden rounded-[8px] bg-white">
              <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#1A2334]/5">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 md:p-10 xl:p-12">
                <p className="flex flex-wrap items-center gap-2 font-[family-name:var(--font-inter)] text-[13px] font-normal leading-none tracking-normal text-[#848EA3] md:text-[14px]">
                  By {post.author}
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#CBA64B]" />
                  {post.date}
                </p>

                <h1 className="mt-4 font-[family-name:var(--font-inter)] text-[28px] font-semibold leading-[36px] tracking-normal md:text-[40px] md:leading-[48px]">
                  {post.title}
                </h1>

                <BlogShareButtons title={post.title} className="mt-6 border-b border-[#E5E5E5] pb-6" />

                <div className="mt-8 flex flex-col gap-10">
                  {sampleBlogSections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-[104px]">
                      <h2 className="font-[family-name:var(--font-inter)] text-[22px] font-semibold leading-[30px] tracking-normal text-[#1A2334] md:text-[28px] md:leading-[36px]">
                        {section.title}
                      </h2>
                      <div className="mt-4 flex flex-col gap-4">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="whitespace-pre-line text-justify font-[family-name:var(--font-inter)] text-[15px] font-normal leading-[24px] tracking-normal text-[#555454] md:text-[16px] md:leading-[26px]"
                          >
                            {paragraph}
                          </p>
                        ))}
                        {section.list && (
                          <ul className="flex list-disc flex-col gap-2 pl-5 font-[family-name:var(--font-inter)] text-[15px] font-normal leading-[24px] tracking-normal text-[#555454] marker:text-[#CBA64B] md:text-[16px] md:leading-[26px]">
                            {section.list.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </article>
          </MotionFade>

          <aside className="lg:sticky lg:top-[104px] lg:self-start">
            <MotionFade delay={0.1} className="rounded-[8px] bg-white p-5 md:p-6">
              <h2 className="font-[family-name:var(--font-inter)] text-[16px] font-semibold leading-none tracking-normal text-[#1A2334]">
                Table of Contents
              </h2>
              <nav aria-label="Table of contents" className="mt-5">
                <ol className="flex flex-col gap-1 border-l border-[#E5E5E5]">
                  {sampleBlogSections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex items-start gap-3 border-l-2 border-transparent py-2.5 pl-4 -ml-px font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[20px] tracking-normal text-[#555454] transition-colors hover:border-[#CBA64B] hover:text-[#1A2334]"
                      >
                        <span className="mt-0.5 shrink-0 text-[12px] font-medium text-[#CBA64B]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </MotionFade>
          </aside>
        </div>

        {related.length > 0 && (
          <MotionFade delay={0.15} className="mt-14 md:mt-20">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-[family-name:var(--font-inter)] text-[13px] font-medium uppercase leading-none tracking-[0.1em] text-[#CBA64B]">
                  Keep Reading
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-inter)] text-[28px] font-semibold leading-[36px] tracking-normal md:text-[36px] md:leading-[44px]">
                  Related Blogs
                </h2>
              </div>
              <Link
                href="/capital-advisory/blog"
                className="hidden items-center gap-2 font-[family-name:var(--font-inter)] text-[14px] font-medium leading-none text-[#1A2334] underline-offset-4 hover:underline sm:inline-flex"
              >
                View all
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <MotionStagger className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <MotionItem key={item.slug}>
                  <Link
                    href={`/capital-advisory/blog/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[8px] bg-white transition-shadow hover:shadow-[0_12px_32px_rgba(26,35,52,0.08)]"
                  >
                    <div className="relative aspect-[386/220] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <p className="flex items-center gap-2 border-b border-[#E5E5E5] pb-4 font-[family-name:var(--font-inter)] text-[13px] font-normal leading-none text-[#848EA3]">
                        By {item.author}
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#CBA64B]" />
                        {item.date}
                      </p>
                      <h3 className="mt-4 flex-1 font-[family-name:var(--font-inter)] text-[18px] font-medium leading-[26px] tracking-normal text-[#1A2334] transition-colors group-hover:text-[#CBA64B] md:text-[20px] md:leading-[28px]">
                        {item.title}
                      </h3>
                      <span className="mt-5 inline-flex items-center gap-3 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-none text-[#1A2334]">
                        Read more
                        <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-[linear-gradient(135deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] text-white transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </span>
                      </span>
                    </div>
                  </Link>
                </MotionItem>
              ))}
            </MotionStagger>
          </MotionFade>
        )}
      </div>
    </section>
  );
}
