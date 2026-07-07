import HeroSection from "@/components/HeroSection";
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
      <QuestionsTimeline />
      <AdvisoryServicesTabs />
      <ReadinessLens />
      <WhyCapitaireGrid />
      <CommonQuestions />
      <ClientsGrid />
      <CtaSection />
      <FooterSection />
    </>
  );
}
