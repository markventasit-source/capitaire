import type { Metadata } from "next";
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

  return (
    <>
      <PageBanner title="Services" />
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
