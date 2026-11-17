import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import BlogDetail from "@/components/BlogDetail";
import FooterSection from "@/components/FooterSection";
import MobileFooter from "@/components/MobileFooter";
import {
  blogPosts,
  getBlogPost,
  getRelatedBlogPosts,
} from "@/data/blogs";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return {
    title: post ? `${post.title} | CAPITAIRE` : "Blog | CAPITAIRE",
    description: post
      ? `Insights from CAPITAIRE: ${post.title}`
      : "Insights and tips on compliance, capital, and business structuring.",
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <>
      <PageBanner
        title="Blogs"
        breadcrumb={[
          { label: "Blogs", href: "/capital-advisory/blog" },
          { label: post.title },
        ]}
      />
      <BlogDetail post={post} related={getRelatedBlogPosts(post.slug)} />
      <MobileFooter />
      <div className="max-[589px]:hidden">
        <FooterSection />
      </div>
    </>
  );
}
