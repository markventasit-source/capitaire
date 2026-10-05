import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ServicesGrid from "@/components/ServicesGrid";
import FooterSection from "@/components/FooterSection";
import MobileFooter from "@/components/MobileFooter";

export const metadata: Metadata = {
  title: "Services | CAPITAIRE",
  description:
    "Business valuations, capital and entity structuring, cross-border advisory, governance, and succession planning.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" />
      <ServicesGrid />
      <MobileFooter />
      <div className="max-[589px]:hidden">
        <FooterSection />
      </div>
    </>
  );
}
