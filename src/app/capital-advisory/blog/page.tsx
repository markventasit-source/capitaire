import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import BlogGrid from "@/components/BlogGrid";
import FooterSection from "@/components/FooterSection";
import MobileFooter from "@/components/MobileFooter";
import { BLOG_PAGE_SIZE, blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs | CAPITAIRE",
  description: "Insights and tips on compliance, capital, and business structuring.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page: pageParam } = await searchParams;
  const totalPages = Math.max(1, Math.ceil(blogPosts.length / BLOG_PAGE_SIZE));
  const requested = Number(Array.isArray(pageParam) ? pageParam[0] : pageParam);
  const page = Number.isInteger(requested)
    ? Math.min(Math.max(requested, 1), totalPages)
    : 1;
  const posts = blogPosts.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE);

  return (
    <>
      <PageBanner title="Blogs" />
      <BlogGrid posts={posts} page={page} totalPages={totalPages} />
      <MobileFooter />
      <div className="max-[589px]:hidden">
        <FooterSection />
      </div>
    </>
  );
}
