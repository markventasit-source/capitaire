export type ServiceTopic = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: readonly [string, string];
  description: string;
  icon: string;
  detail?: {
    heading: string;
    image: string;
    topics: readonly ServiceTopic[];
  };
};

export const services: readonly Service[] = [
  {
    slug: "business-valuations",
    title: ["Business", "Valuations"],
    description:
      "Evaluate business value, financial potential, and growth opportunities.",
    icon: "/i1.svg",
    detail: {
      heading: "Business Valuations & Investor Readiness",
      image: "/servicedetails.png",
      topics: [
        {
          title: "Business Review",
          description:
            "Every business is in a unique position in the market. Financial reports, customer feedback, and shareholders' insights tell a different story. Our professionals evaluate the value of your business through the eyes of investors, lenders, customers, management, and shareholders. These insights help to identify strengths, risks, value drivers and growth opportunities for sustainable growth.",
        },
        {
          title: "Financial Modelling & Projections",
          description:
            "Model financial scenarios, funding needs, profitability, and returns.",
        },
        {
          title: "Business Valuation",
          description:
            "Determine fair business value using recognised valuation methodologies.",
        },
        {
          title: "Investor Presentations",
          description:
            "Present your business, strategy, financials, and investment proposition with clarity.",
        },
      ],
    },
  },
  {
    slug: "capital-structuring",
    title: ["Capital", "Structuring"],
    description:
      "Structure funding, ownership, incentives, and shareholder arrangements.",
    icon: "/briefcase-dollar.png",
  },
  {
    slug: "entity-structuring",
    title: ["Entity", "Structuring"],
    description:
      "Optimise business structures for efficiency, compliance, and growth.",
    icon: "/setup-01.png",
  },
  {
    slug: "cross-border-advisory",
    title: ["Cross-Border", "Advisory"],
    description:
      "Structure international investments, borrowings, holdings, and transfer pricing.",
    icon: "/user-switch.png",
  },
  {
    slug: "business-governance",
    title: ["Business", "Governance"],
    description:
      "Strengthen governance, controls, accountability, and business performance.",
    icon: "/justice-scale-01.png",
  },
  {
    slug: "succession-exit-advisory",
    title: ["Succession", "& Exit Advisory"],
    description:
      "Plan succession, transitions, continuity, and value-preserving exits.",
    icon: "/message-user-02.png",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
