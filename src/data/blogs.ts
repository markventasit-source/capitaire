export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
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
