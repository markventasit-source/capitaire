import { MotionFade, MotionSection } from "@/components/ui/motion";

const DESKTOP_VISIBLE_COUNT = 15;
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

export default function ClientsGrid() {
  const logos = clientLogos.slice(0, DESKTOP_VISIBLE_COUNT);

  return (
    <MotionSection className="site-container w-full bg-white py-20 font-sans text-[#1A2334]">
      <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
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

      <div className="overflow-hidden rounded-sm border-l border-t border-[#E8DDC3] bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex h-[110px] items-center justify-center border-r border-b border-[#E8DDC3] px-6 py-5"
            >
              <img
                src={logo}
                alt="Client logo"
                className="block h-auto max-h-[54px] w-auto max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <MotionFade className="mt-6 flex items-center justify-center gap-2" delay={0.2}>
        {Array.from({ length: 4 }, (_, dot) => (
          <span
            key={dot}
            className={`h-2 w-2 rounded-full ${
              dot === 0 ? "bg-[#1A2334]" : "bg-[#D9D9D9]"
            }`}
          />
        ))}
      </MotionFade>
    </MotionSection>
  );
}
