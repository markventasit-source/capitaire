"use client";

import { useState, useRef, useEffect } from "react";
import { MotionFade, MotionSection } from "@/components/ui/motion";
import { Marquee } from "@/components/ui/marquee";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clientLogos = [
  "/c1.jpg",    "/c2.png",    "/c3.png",    "/c4.jpg",    "/c5.jpg",
  "/c6.png",    "/c7.png",    "/c8.jpg",    "/c9.png",    "/c10.png",
  "/c11.png",   "/c12.png",   "/c13.jpg",   "/c14.png",   "/c15.png",
  "/logo1.png", "/logo2.jpeg","/logo3.jpeg","/logo4.png", "/logo5.jpeg",
  "/logo6.png", "/logo7.jpeg","/logo8.jpeg","/logo10.jpeg","/logo11.png",
  "/logo12.png","/logo13.jpeg","/logo14.png","/logo15.jpeg","/logo16.png",
  "/logo17.jpeg","/logo18.jpeg","/logo19.jpeg","/logo20.png",
];

const ROW_SIZE = Math.ceil(clientLogos.length / 3);
const rows = [
  clientLogos.slice(0, ROW_SIZE),
  clientLogos.slice(ROW_SIZE, ROW_SIZE * 2),
  clientLogos.slice(ROW_SIZE * 2),
];

function LogoCell({ src }: { src: string }) {
  return (
    <div className="flex h-[110px] w-[220px] shrink-0 items-center justify-center border-r border-[#E8DDC3] px-8 py-4">
      <img
        src={src}
        alt="Client logo"
        loading="eager"
        className="h-auto max-h-[70px] w-auto max-w-[160px] object-contain"
      />
    </div>
  );
}

/* ── Mobile carousel (3×3 pages) ── */
const MOBILE_SLOTS = 9;
const AUTOPLAY_MS  = 4000;
const SWIPE_MIN_PX = 40;
const totalPages   = Math.ceil(clientLogos.length / MOBILE_SLOTS);

const pages = Array.from({ length: totalPages }, (_, p) =>
  Array.from({ length: MOBILE_SLOTS }, (_, i) =>
    clientLogos[(p * MOBILE_SLOTS + i) % clientLogos.length]
  )
);

function MobileCarousel() {
  const [page, setPage]     = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX         = useRef<number | null>(null);

  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [page, paused]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current !== null) {
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(delta) > SWIPE_MIN_PX) (delta < 0 ? next : prev)();
    }
    touchStartX.current = null;
    setPaused(false);
  }

  return (
    <div>
      <div
        className="overflow-hidden"
        style={{ touchAction: "pan-y" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${page * 100}%)`, willChange: "transform" }}
        >
          {pages.map((logos, p) => (
            <div key={p} className="grid w-full shrink-0 grid-cols-3" aria-hidden={p !== page}>
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className={[
                    "flex h-[100px] items-center justify-center px-4 py-3",
                    i % 3 !== 2 ? "border-r border-[#E8DDC3]" : "",
                    i < 6       ? "border-b border-[#E8DDC3]" : "",
                  ].join(" ")}
                >
                  <img src={logo} alt="Client logo" loading="eager" draggable={false}
                    className="h-auto max-h-[52px] w-auto max-w-[90px] select-none object-contain" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[#E8DDC3] px-4 py-3">
        <button onClick={prev} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8DDC3] text-[#1A2334] transition hover:border-[#CBA64B] hover:text-[#CBA64B]" aria-label="Previous">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-1.5">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => setPage(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === page ? "w-5 bg-[#CBA64B]" : "w-1.5 bg-[#D9D9D9]"}`}
              aria-label={`Page ${i + 1}`} />
          ))}
        </div>
        <button onClick={next} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8DDC3] text-[#1A2334] transition hover:border-[#CBA64B] hover:text-[#CBA64B]" aria-label="Next">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

/* ── Main ── */
export default function ClientsGrid() {
  return (
    <MotionSection className="site-container w-full bg-white py-20 font-sans text-[#1A2334]">
      <div className="mb-16 flex flex-col items-center text-center">
        <MotionFade>
          <div className="relative inline-block">
            <span className="absolute -top-6 -left-4 font-serif text-[72px] leading-none text-[#CBA64B] select-none">&ldquo;</span>
            <p className="relative z-10 px-10 text-[28px] font-normal leading-[38px] tracking-normal text-[#CBA64B] md:text-[32px] md:leading-[44px]">
              Our clients are everything to us;<br />so are we to them.
            </p>
            <span className="absolute -bottom-10 -right-4 font-serif text-[72px] leading-none text-[#CBA64B] select-none">&rdquo;</span>
          </div>
        </MotionFade>
      </div>

      {/* Mobile */}
      <div className="block sm:hidden">
        <div className="overflow-hidden rounded-sm border border-[#E8DDC3]">
          <MobileCarousel />
        </div>
      </div>

      {/* Desktop — Marquee component for seamless infinite loop */}
      <div className="hidden overflow-hidden rounded-sm border border-[#E8DDC3] sm:block">
        {/* Row 1 — left */}
        <div className="border-b border-[#E8DDC3]">
          <Marquee pauseOnHover className="[--duration:30s] [--gap:0px]">
            {rows[0].map((logo, i) => <LogoCell key={i} src={logo} />)}
          </Marquee>
        </div>
        {/* Row 2 — right */}
        <div className="border-b border-[#E8DDC3]">
          <Marquee reverse pauseOnHover className="[--duration:25s] [--gap:0px]">
            {rows[1].map((logo, i) => <LogoCell key={i} src={logo} />)}
          </Marquee>
        </div>
        {/* Row 3 — left */}
        <Marquee pauseOnHover className="[--duration:35s] [--gap:0px]">
          {rows[2].map((logo, i) => <LogoCell key={i} src={logo} />)}
        </Marquee>
      </div>
    </MotionSection>
  );
}
