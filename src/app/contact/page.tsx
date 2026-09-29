import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import MobileFooter from "@/components/MobileFooter";

export const metadata: Metadata = {
  title: "Contact Us | CAPITAIRE",
  description:
    "Get in touch with CAPITAIRE in Kochi by email, phone, or at our Vyttila office.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <ContactSection />
      <MobileFooter />
      <div className="max-[589px]:hidden">
        <FooterSection />
      </div>
    </>
  );
}
