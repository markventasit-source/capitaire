export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
};

export type BlogSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  list?: readonly string[];
};

const samplePosts = [
  { title: "Limited Liability Partnership (LLP) Compliance Manual", image: "/b2.png" },
  { title: "Sole Proprietorship Compliance Manual", image: "/b4.png" },
  { title: "Partnership Firm Compliance Manual", image: "/b3.png" },
  { title: "Private Limited Company Compliance Manual", image: "/b1.png" },
] as const;

// Placeholder list until real posts are available.
export const blogPosts: readonly BlogPost[] = Array.from({ length: 30 }, (_, index) => {
  const post = samplePosts[index % samplePosts.length];
  return {
    slug: `post-${index + 1}`,
    title: post.title,
    author: "admin",
    date: "May 19, 2026",
    image: post.image,
  };
});

export const BLOG_PAGE_SIZE = 6;

/** Shared sample body used for every post until real content is available. */
export const sampleBlogSections: readonly BlogSection[] = [
  {
    id: "dear-reader",
    title: "Dear Reader",
    paragraphs: [
      "We are existing in a rapidly changing business environment. The pace of change has significantly expanded the business risk canvass forcing regulators and legislators to enforce stringent compliance norms. While the intention of regulators is to manage and mitigate business risks and drive business integrity, the stakeholders are often challenged with a task of monitoring, adhering and managing these compliances to sustain business.",
    ],
  },
  {
    id: "compliance-landscape",
    title: "The Changing Compliance Landscape",
    paragraphs: [
      "India has undergone significant changes in tax and regulatory legislations and stakeholders (Corporates and Non-Corporates) are often under pressure to ensure compliances on time. Not meeting compliance could result in stringent liabilities on the Corporates and on Non-Corporates and lead to severe penalties and reputational risks.",
    ],
  },
  {
    id: "key-laws",
    title: "Key Laws Covered",
    paragraphs: [
      "In this insight document, we have taken a reasonable attempt to consolidate significant tax and regulatory compliances and their consequences under the following Laws:",
    ],
    list: [
      "The Income-tax Act, 1961",
      "The Goods and Services Tax Acts",
      "The Limited Liability Partnership Act, 2008",
    ],
  },
  {
    id: "how-to-use",
    title: "How to Use This Guide",
    paragraphs: [
      "We hope this docket works as a quick reference manual to guide you in managing your statutory compliance initiatives. We do not claim that this is a total compliance management handbook and recommend to use this hand-out as a guidance document only.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    paragraphs: [
      "Therefore, readers of this publication are advised to seek their own professional advice before taking any course of action or decision, for which they are entirely responsible, based on the contents of this publication.",
      "Regards,\n\nCAPITAIRE",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, count = 3) {
  const index = blogPosts.findIndex((post) => post.slug === slug);
  if (index === -1) return blogPosts.slice(0, count);
  return [...blogPosts.slice(index + 1), ...blogPosts.slice(0, index)].slice(0, count);
}
