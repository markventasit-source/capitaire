import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MobileStickyGradient, {
  MobileGlowProvider,
} from "@/components/MobileStickyGradient";
import MobileBottomNav from "@/components/MobileBottomNav";
import SocialFloatingDock from "@/components/SocialFloatingDock";

export const metadata: Metadata = {
  title: "Capital Advisory | CAPITAIRE",
};

export default function CapitalAdvisoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MobileGlowProvider>
      <MobileStickyGradient />
      <Navbar />
      <main className="no-scrollbar relative z-10 flex-1 overflow-x-clip bg-transparent pt-[88px] max-[589px]:pt-[80px] max-[589px]:pb-[88px]">
        {children}
      </main>
      <SocialFloatingDock />
      <MobileBottomNav />
    </MobileGlowProvider>
  );
}
