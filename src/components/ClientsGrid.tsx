import { MotionFade, MotionSection } from "@/components/ui/motion";
import { Marquee } from "@/components/ui/marquee";

const clientLogos = [
  "/c1.jpg",
  "/c2.png",
  "/c3.png",
  "/c4.jpg",
  "/c5.jpg",
  "/c6.png",
  "/c7.png",
  "/c8.jpg",
  "/c9.png",
  "/c10.png",
  "/c11.png",
  "/c12.png",
  "/c13.jpg",
  "/c14.png",
  "/c15.png",
] as const;

// Two rows — second row offset for variety
const row1 = [...clientLogos];
const row2 = [...clientLogos.slice(5), ...clientLogos.slice(0, 5)];

function LogoCell({ src }: { src: string }) {
  return (
    <div className="flex h-[110px] w-[180px] shrink-0 items-center justify-center border-r border-b border-[#E8DDC3] px-6 py-5">
      <img
        src={src}
        alt="Client logo"
        className="block h-auto max-h-[54px] w-auto max-w-[140px] object-contain"
      />
    </div>
  );
}

export default function ClientsGrid() {
  return (
    <MotionSection className="relative w-full overflow-hidden bg-white py-20 font-sans text-[#1A2334]">
      <div className="site-container mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <MotionFade className="lg:col-span-3">
          <h2 className="text-[36px] font-semibold leading-[44px] tracking-normal text-[#1A2334]">
            Clients
          </h2>
        </MotionFade>

        <MotionFade className="lg:col-span-5" delay={0.1}>
          <p className="max-w-[420px] text-[28px] font-normal leading-[34px] tracking-normal text-[#CBA64B]">
            Our clients are everything to us;
            <br />
            so are we to them.
          </p>
        </MotionFade>
      </div>

      {/* Scrolling rows — border-l and border-t on the wrapper to close the grid border */}
      <div className="border-l border-t border-[#E8DDC3]">
        {/* Row 1 — scrolls left */}
        <Marquee pauseOnHover className="[--duration:40s] [--gap:0px]">
          {row1.map((logo, i) => (
            <LogoCell key={i} src={logo} />
          ))}
        </Marquee>

        {/* Row 2 — scrolls right */}
        <Marquee reverse pauseOnHover className="[--duration:45s] [--gap:0px]">
          {row2.map((logo, i) => (
            <LogoCell key={i} src={logo} />
          ))}
        </Marquee>
      </div>

      {/* Edge fades */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
    </MotionSection>
  );
}
