"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const SERVICE_GLOW = "#CBA64B";

type GlowContextValue = {
  activeTitle: string | null;
  setActiveTitle: (title: string | null) => void;
};

const GlowContext = createContext<GlowContextValue>({
  activeTitle: null,
  setActiveTitle: () => {},
});

export function MobileGlowProvider({ children }: { children: ReactNode }) {
  const [activeTitle, setActiveTitleState] = useState<string | null>(null);
  const setActiveTitle = useCallback((title: string | null) => {
    setActiveTitleState(title);
  }, []);
  const value = useMemo(
    () => ({ activeTitle, setActiveTitle }),
    [activeTitle, setActiveTitle]
  );

  return <GlowContext.Provider value={value}>{children}</GlowContext.Provider>;
}

export function useMobileGlow() {
  return useContext(GlowContext);
}

/**
 * Fixed hero backdrop for the compact mobile shell (< 590px).
 * Stays locked to the viewport so it remains visible behind
 * the service cards (and other transparent mobile sections) while scrolling.
 */
export default function MobileStickyGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden max-[589px]:block"
    >
      <div className="absolute inset-0 bg-[#0B1220]" />

      <div
        className="absolute left-1/2 top-[28%] h-[250vw] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(72, 98, 150, 0.55) 0%, rgba(40, 58, 100, 0.28) 42%, transparent 68%)",
        }}
      />
      <div
        className="absolute left-[15%] top-[55%] h-[90vw] w-[90vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(45, 70, 120, 0.3) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute right-[-10%] top-[70%] h-[80vw] w-[80vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(55, 80, 140, 0.22) 0%, transparent 65%)",
        }}
      />
    </div>
  );
}
