import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutJourney from "@/components/AboutJourney";
import AboutServices from "@/components/AboutServices";
import AboutAdvantage from "@/components/AboutAdvantage";
import AboutLeadership from "@/components/AboutLeadership";
import FooterSection from "@/components/FooterSection";
import MobileFooter from "@/components/MobileFooter";

export const metadata: Metadata = {
  title: "About Us | CAPITAIRE",
  description:
    "CAPITAIRE is a multidisciplinary Capital Advisory and Business Solutions firm.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutJourney />
      <AboutServices />
      <AboutAdvantage />
      <AboutLeadership />
      <MobileFooter />
      <div className="max-[589px]:hidden">
        <FooterSection />
      </div>
    </>
  );
}
