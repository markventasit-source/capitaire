import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import FooterSection from "@/components/FooterSection";
import MobileFooter from "@/components/MobileFooter";
import { getService, services } from "@/data/services";
import PageBanner from "@/components/PageBanner";

export const dynamicParams = false;

export function generateStaticParams() {
  return services
    .filter((service) => service.detail)
    .map((service) => ({ slug: service.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  return {
    title: service?.detail
      ? `${service.detail.heading} | CAPITAIRE`
      : "Services | CAPITAIRE",
    description: service?.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = getService(slug)?.detail;

  if (!detail) notFound();

  const service = getService(slug)!;

  return (
    <>
      <PageBanner title="Services" />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="w-full bg-white border-b border-[#E5E5E5]"
      >
        <div className="site-container flex items-center gap-2 py-3 font-[family-name:var(--font-inter)] text-[13px] text-[#848EA3]">
          <Link
            href="/capital-advisory/services"
            className="transition-colors hover:text-[#1A2334]"
          >
            All Services
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="text-[#1A2334] font-medium">
            {service.title.join(" ")}
          </span>
        </div>
      </nav>

      <ServiceDetail
        heading={detail.heading}
        image={detail.image}
        topics={detail.topics}
      />
      <MobileFooter />
      <div className="max-[589px]:hidden">
        <FooterSection />
      </div>
    </>
  );
}
