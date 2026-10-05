import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Threads from "@/components/Threads";
import { MotionHero } from "@/components/ui/motion";

const threadColor: [number, number, number] = [72 / 255, 84 / 255, 112 / 255];
const threadColorLight: [number, number, number] = [110 / 255, 122 / 255, 150 / 255];

const divisions: { title: [string, string]; href: string }[] = [
  { title: ["Capital", "Advisory"], href: "/capital-advisory" },
  { title: ["Risk and Growth", "Management"], href: "/risk-and-growth-management" },
];

function DivisionCard({ title, href }: (typeof divisions)[number]) {
  return (
    <Link
      href={href}
      className="group flex min-h-[172px] w-full flex-col justify-center rounded-[10px] bg-[linear-gradient(90deg,#C9A74C_0%,#B08A3E_55%,#7F5223_100%)] px-[25px] py-7 shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1"
    >
      <h2 className="text-[24px] font-semibold leading-[30px] tracking-normal text-white">
        {title[0]}
        <br />
        {title[1]}
      </h2>
      <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-[6px] bg-navy px-5 py-2.5 text-[15px] font-medium leading-none text-white transition-colors group-hover:bg-[#121A2A]">
        Explore
        <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
      </span>
    </Link>
  );
}

export default function LandingPage() {
  return (
    <div className="relative isolate flex min-h-dvh w-full flex-col items-center overflow-hidden bg-navy px-6 pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[8%] -z-10 h-[70%]"
        style={{
          maskImage: "linear-gradient(180deg, transparent 0%, black 30%, black 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 30%, black 65%, transparent 100%)",
        }}
      >
        <Threads
          color={threadColor}
          colorSecondary={threadColorLight}
          amplitude={1.2}
          distance={0.6}
          lineCount={120}
          lineWidth={4}
          lineBlur={8}
          patternOffset={0.38}
          className="h-full w-full opacity-70"
        />
      </div>

      <MotionHero className="pt-7">
        <Image
          src="/logo.png"
          alt="Capitaire - Integrated Value Delivery"
          width={180}
          height={48}
          priority
          className="h-auto w-[142px]"
        />
      </MotionHero>

      <div className="flex w-full flex-1 flex-col items-center justify-center py-16">
        <MotionHero delay={0.1}>
          <h1 className="text-center text-[32px] font-light leading-[42px] tracking-normal text-white sm:text-[40px] sm:leading-[48px]">
            Unleash your business <br className="hidden sm:inline" />
            potential with the <br className="hidden sm:inline" />
            best business consultants
          </h1>
        </MotionHero>

        <MotionHero
          delay={0.22}
          className="mt-20 grid w-full max-w-[544px] grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {divisions.map((division) => (
            <DivisionCard key={division.title.join(" ")} {...division} />
          ))}
        </MotionHero>
      </div>
    </div>
  );
}
