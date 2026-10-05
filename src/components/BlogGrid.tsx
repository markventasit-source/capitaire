import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MotionFade, MotionItem, MotionStagger } from "@/components/ui/motion";
import type { BlogPost } from "@/data/blogs";

type BlogGridProps = {
  posts: readonly BlogPost[];
  page: number;
  totalPages: number;
};

function getPageItems(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = new Set([1, total, current - 1, current, current + 1]);
  if (current <= 3) [2, 3].forEach((p) => pages.add(p));
  if (current >= total - 2) [total - 2, total - 1].forEach((p) => pages.add(p));

  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const items: (number | "ellipsis")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) items.push("ellipsis");
    items.push(p);
  });
  return items;
}

const pageHref = (page: number) => (page === 1 ? "/capital-advisory/blog" : `/capital-advisory/blog?page=${page}`);

export default function BlogGrid({ posts, page, totalPages }: BlogGridProps) {
  const circle =
    "flex h-9 w-9 items-center justify-center rounded-full font-[family-name:var(--font-inter)] text-[14px] leading-none transition-colors";

  return (
    <section className="w-full bg-[#F3F8FF] py-14 text-[#1A2334] md:py-24">
      <div className="site-container">
        <MotionFade>
          <h2 className="text-center font-[family-name:var(--font-inter)] text-[32px] font-semibold leading-[40px] tracking-normal md:text-[48px] md:leading-[54.8px]">
            Read our Latest Blog <br className="hidden md:inline" />
            Insight &amp; Tips
          </h2>
        </MotionFade>

        <MotionStagger
          key={page}
          className="mt-10 grid grid-cols-1 gap-5 md:mt-14 lg:grid-cols-2"
        >
          {posts.map((post) => (
            <MotionItem
              key={post.slug}
              id={post.slug}
              className="flex scroll-mt-28 items-stretch gap-4 rounded-[4px] bg-white p-5 md:gap-6 md:p-7"
            >
              <div className="flex min-w-0 flex-1 flex-col">
                <p className="flex items-center gap-2 border-b border-[#E5E5E5] pb-4 font-[family-name:var(--font-inter)] text-[13px] font-normal leading-none tracking-normal text-[#1A2334] md:text-[14px]">
                  By {post.author}
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#CBA64B]" />
                  {post.date}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[24px] tracking-normal text-[#1A2334] md:text-[18px] md:leading-[26px]">
                  {post.title}
                </h3>
                <Link
                  href={`#${post.slug}`}
                  className="group mt-auto flex w-fit items-center gap-3 pt-6 font-[family-name:var(--font-inter)] text-[14px] font-normal leading-none tracking-normal text-[#1A2334] md:text-[16px]"
                >
                  Read more
                  <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-[linear-gradient(135deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </div>

              <div className="relative aspect-[269/243] w-[42%] max-w-[269px] shrink-0 self-center">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 269px, 42vw"
                  className="object-contain"
                />
              </div>
            </MotionItem>
          ))}
        </MotionStagger>

        {totalPages > 1 && (
          <nav aria-label="Blog pages" className="mt-10 flex items-center justify-center gap-2 md:mt-14">
            {page > 1 ? (
              <Link href={pageHref(page - 1)} aria-label="Previous page" className={cn(circle, "bg-[#1A2334] text-white hover:bg-[#2E4470]")}>
                <ChevronLeft className="h-4 w-4" aria-hidden />
              </Link>
            ) : (
              <span aria-hidden className={cn(circle, "bg-[#1A2334]/40 text-white")}>
                <ChevronLeft className="h-4 w-4" />
              </span>
            )}

            {getPageItems(page, totalPages).map((item, index) =>
              item === "ellipsis" ? (
                <span key={`ellipsis-${index}`} aria-hidden className={cn(circle, "bg-[#E4E7EC] text-[#1A2334]")}>
                  …
                </span>
              ) : (
                <Link
                  key={item}
                  href={pageHref(item)}
                  aria-current={item === page ? "page" : undefined}
                  className={cn(
                    circle,
                    item === page
                      ? "bg-[linear-gradient(135deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] font-medium text-white"
                      : "bg-[#E4E7EC] text-[#1A2334] hover:bg-[#D5DAE2]",
                  )}
                >
                  {item}
                </Link>
              ),
            )}

            {page < totalPages ? (
              <Link href={pageHref(page + 1)} aria-label="Next page" className={cn(circle, "bg-[#1A2334] text-white hover:bg-[#2E4470]")}>
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Link>
            ) : (
              <span aria-hidden className={cn(circle, "bg-[#1A2334]/40 text-white")}>
                <ChevronRight className="h-4 w-4" />
              </span>
            )}
          </nav>
        )}
      </div>
    </section>
  );
}
