"use client";

import { useEffect, useRef, useState } from "react";
import { MotionFade, MotionSection } from "@/components/ui/motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clientLogos = [
  "/c1.jpg",    "/c2.png",    "/c3.png",    "/c4.jpg",    "/c5.jpg",
  "/c6.png",    "/c7.png",    "/c8.jpg",    "/c9.png",    "/c10.png",
  "/c11.png",   "/c12.png",   "/c13.jpg",   "/c14.png",   "/c15.png",
  "/logo1.png", "/logo2.jpeg","/logo3.jpeg","/logo4.png", "/logo5.jpeg",
  "/logo6.png", "/logo7.jpeg","/logo8.jpeg","/logo10.jpeg","/logo11.png",
];

const ROW_SIZE = Math.ceil(clientLogos.length / 3);
const rows = [
  clientLogos.slice(0, ROW_SIZE),
  clientLogos.slice(ROW_SIZE, ROW_SIZE * 2),
  clientLogos.slice(ROW_SIZE * 2),
];

/* ── Desktop marquee (pure CSS, exact px) ── */
const CELL_W = 200;

function MarqueeRow({ logos, duration, reverse = false, isLast = false }: {
  logos: string[]; duration: number; reverse?: boolean; isLast?: boolean;
}) {
  const items    = [...logos, ...logos];
  const loopPx   = logos.length * CELL_W;
  const animName = reverse ? "scroll-right" : "scroll-left";

  return (
    <div className={`overflow-hidden${isLast ? "" : " border-b border-[#E8DDC3]"}`}>
      <style>{`
        @keyframes scroll-left  { from { transform: translateX(0); } to { transform: translateX(-${loopPx}px); } }
        @keyframes scroll-right { from { transform: translateX(-${loopPx}px); } to { transform: translateX(0); } }
      `}</style>
      <div
        className="flex"
        style={{ animation: `${animName} ${duration}s linear infinite`, willChange: "transform" }}
      >
        {items.map((logo, i) => (
          <div key={i} style={{ width: CELL_W }}
            className="flex h-[130px] shrink-0 items-center justify-center border-r border-[#E8DDC3] px-6"
          >
            <img src={logo} alt="Client logo" loading="eager"
              className="h-auto max-h-[70px] w-auto max-w-[150px] object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Mobile carousel (3×3 pages, sliding) ── */
const MOBILE_SLOTS = 9;
const AUTOPLAY_MS  = 4000;
const SWIPE_MIN_PX = 40;
const totalPages   = Math.ceil(clientLogos.length / MOBILE_SLOTS);

// Every page has exactly 9 logos; the last page wraps around to fill its empty cells.
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

  // Autoplay (skipped when paused or when the user prefers reduced motion)
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
      {/* Sliding track */}
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

      {/* Controls */}
      <div className="flex items-center justify-between border-t border-[#E8DDC3] px-4 py-3">
        <button
          onClick={prev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8DDC3] text-[#1A2334] transition hover:border-[#CBA64B] hover:text-[#CBA64B]"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex gap-1.5">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === page ? "w-5 bg-[#CBA64B]" : "w-1.5 bg-[#D9D9D9]"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8DDC3] text-[#1A2334] transition hover:border-[#CBA64B] hover:text-[#CBA64B]"
          aria-label="Next"
        >
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
      <div className="max-sm:block hidden">
        <div className="overflow-hidden rounded-sm border border-[#E8DDC3]">
          <MobileCarousel />
        </div>
      </div>

      {/* Desktop */}
      <div className="max-sm:hidden overflow-hidden rounded-sm border border-[#E8DDC3]">
        <MarqueeRow logos={rows[0]} duration={18} />
        <MarqueeRow logos={rows[1]} duration={14} reverse />
        <MarqueeRow logos={rows[2]} duration={22} isLast />
      </div>
    </MotionSection>
  );
}