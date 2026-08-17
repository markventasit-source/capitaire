import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import MobileStickyGradient, {
  MobileGlowProvider,
} from "@/components/MobileStickyGradient";
import MobileBottomNav from "@/components/MobileBottomNav";
import SocialFloatingDock from "@/components/SocialFloatingDock";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CAPITAIRE",
  description: "Integrated Value Delivery",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("no-scrollbar h-full overflow-x-clip", "antialiased", inter.variable, "font-sans", geist.variable)}
    >
      <body className="no-scrollbar relative flex min-h-full w-full max-w-full flex-col overflow-x-clip bg-navy font-sans text-white max-[589px]:bg-transparent">
        <MobileGlowProvider>
          <MobileStickyGradient />
          <Navbar />
          <main className="no-scrollbar relative z-10 flex-1 overflow-x-clip bg-transparent pt-[88px] max-[589px]:pt-[80px] max-[589px]:pb-[88px]">
            {children}
          </main>
          <SocialFloatingDock />
          <MobileBottomNav />
        </MobileGlowProvider>
      </body>
    </html>
  );
}
