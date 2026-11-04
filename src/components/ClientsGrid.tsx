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

// Split into two rows and shuffle the second row for variety
const row1 = clientLogos.slice(0, 8);
const row2 = [...clientLogos.slice(8), ...clientLogos.slice(0, 7)];

function LogoCard({ src }: { src: string }) {
  return (
    <div className="flex h-[90px] w-[160px] shrink-0 items-center justify-center rounded-[6px] border border-[#E8DDC3] bg-white px-6 py-4 transition-shadow duration-300 hover:shadow-md xl:h-[100px] xl:w-[180px]">
      <img
        src={src}
        alt="Client logo"
        className="block h-auto max-h-[50px] w-auto max-w-[120px] object-contain grayscale transition-all duration-300 hover:grayscale-0"
      />
    </div>
  );
}

export default function ClientsGrid() {
  return (
    <MotionSection className="relative w-full overflow-hidden bg-white py-20 font-sans text-[#1A2334]">
      <div className="site-container mb-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
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

      {/* Row 1 — scrolls left */}
      <Marquee
        pauseOnHover
        className="[--duration:35s] [--gap:1rem]"
      >
        {row1.map((logo, i) => (
          <LogoCard key={i} src={logo} />
        ))}
      </Marquee>

      {/* Row 2 — scrolls right (reverse) */}
      <Marquee
        reverse
        pauseOnHover
        className="mt-4 [--duration:40s] [--gap:1rem]"
      >
        {row2.map((logo, i) => (
          <LogoCard key={i} src={logo} />
        ))}
      </Marquee>

      {/* Soft edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"
      />
    </MotionSection>
  );
}
