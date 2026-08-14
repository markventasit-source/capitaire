import HeroSection from "@/components/HeroSection";
import MobileServicesCards from "@/components/MobileServicesCards";
import MobileStatsGrid from "@/components/MobileStatsGrid";
import MobileClientsGrid from "@/components/MobileClientsGrid";
import MobileBlogsGrid from "@/components/MobileBlogsGrid";
import MobileFaqs from "@/components/MobileFaqs";
import MobileFooter from "@/components/MobileFooter";
import QuestionsTimeline from "@/components/QuestionsTimeline";
import AdvisoryServicesTabs from "@/components/AdvisoryServicesTabs";
import ReadinessLens from "@/components/ReadinessLens";
import WhyCapitaireGrid from "@/components/WhyCapitaireGrid";
import CommonQuestions from "@/components/CommonQuestions";
import ClientsGrid from "@/components/ClientsGrid";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MobileServicesCards />
      <MobileStatsGrid />
      <MobileClientsGrid />
      <MobileBlogsGrid />
      <MobileFaqs />
      <MobileFooter />
      {/* Desktop sections — hidden on compact mobile so sticky hero bg stays visible */}
      <div className="max-[589px]:hidden">
        <QuestionsTimeline />
        <AdvisoryServicesTabs />
        <ReadinessLens />
        <WhyCapitaireGrid />
        <CommonQuestions />
        <ClientsGrid />
        <CtaSection />
        <FooterSection />
      </div>
    </>
  );
}
