"use client";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/data/blogs";
import PageBanner from "@/components/PageBanner";
import FooterSection from "@/components/FooterSection";
import MobileFooter from "@/components/MobileFooter";
import { ArrowRight } from "lucide-react";

// Static blog content (placeholder for now)
const BLOG_CONTENT = `Dear Reader,

We are existing in a rapidly changing business environment. The pace of change has significantly expanded the business risk canvass forcing regulators and legislators to enforce stringent compliance norms. While the intention of regulators is to manage and mitigate business risks and drive business integrity, the stakeholders are often challenged with a task of monitoring, adhering and managing these compliances to sustain business.

India has undergone significant changes in tax and regulatory legislations and stakeholders (Corporates and Non-Corporates) are often under pressure to ensure compliances on time. Not meeting compliance could result in stringent liabilities on the Corporates and on Non-Corporates and lead to severe penalties and reputational risks.

In this insight document, we have taken a reasonable attempt to consolidate significant tax and regulatory compliances and their consequences under the following Laws:

- The Income-tax Act, 1961
- The Goods and Services Tax Acts
- The Limited Liability Partnership Act, 2008

We hope this docket works as a quick reference manual to guide you in managing your statutory compliance initiatives. We do not claim that this is a total compliance management handbook and recommend to use this hand-out as a guidance document only.

Therefore, readers of this publication are advised to seek their own professional advice before taking any course of action or decision, for which they are entirely responsible, based on the contents of this publication.

Regards,

CAPITAIRE`;

// Simple TOC based on headings we will add manually
const TOC = [
  { id: "overview", title: "Overview" },
  { id: "laws", title: "Key Laws Covered" },
  { id: "disclaimer", title: "Disclaimer" },
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog – Not found", description: "" };
  return {
    title: `${post.title} | CAPITAIRE`,
    description: `Read the blog "${post.title}" by ${post.author}`,
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
    return null;
  }

  // Related posts – pick three others (excluding current)
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <PageBanner title={post.title} />
      <section className="site-container max-w-4xl mx-auto py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={200}
            height={200}
            className="rounded-md object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-sm text-gray-600">By {post.author} • {post.date}</p>
          </div>
        </div>

        {/* Table of contents */}
        <nav className="mb-8 border-l-4 border-[#CBA64B] pl-4">
          <h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
          <ul className="space-y-2">
            {TOC.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content sections */}
        <article className="prose prose-lg max-w-none mb-12">
          <section id="overview" className="mb-8">
            <h2>{TOC[0].title}</h2>
            <p>{BLOG_CONTENT.split("\n\n")[0]}</p>
          </section>
          <section id="laws" className="mb-8">
            <h2>{TOC[1].title}</h2>
            <ul className="list-disc pl-5">
              <li>The Income-tax Act, 1961</li>
              <li>The Goods and Services Tax Acts</li>
              <li>The Limited Liability Partnership Act, 2008</li>
            </ul>
            <p>{BLOG_CONTENT.split("\n\n")[2]}</p>
          </section>
          <section id="disclaimer" className="mb-8">
            <h2>{TOC[2].title}</h2>
            <p>{BLOG_CONTENT.split("\n\n")[3]}</p>
            <p>{BLOG_CONTENT.split("\n\n")[4]}</p>
          </section>
        </article>

        {/* Share options */}
        <div className="flex items-center space-x-4 mb-12">
          <span className="font-medium">Share:</span>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            LinkedIn
          </a>
        </div>

        {/* Related blogs */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">Related Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a
                key={r.slug}
                href={`/capital-advisory/blog/${r.slug}`}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Image
                  src={r.image}
                  alt={r.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-medium text-lg group-hover:text-[#CBA64B] transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-500">{r.author} • {r.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <MobileFooter />
      <div className="max-[589px]:hidden">
        <FooterSection />
      </div>
    </>
  );
}
