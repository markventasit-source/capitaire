"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";

type GlowContextValue = {
  glow: string | null;
  setGlow: (color: string | null) => void;
};

const GlowContext = createContext<GlowContextValue>({
  glow: null,
  setGlow: () => {},
});

export function MobileGlowProvider({ children }: { children: ReactNode }) {
  const [glow, setGlowState] = useState<string | null>(null);
  const setGlow = useCallback((color: string | null) => {
    setGlowState(color);
  }, []);
  const value = useMemo(() => ({ glow, setGlow }), [glow, setGlow]);

  return <GlowContext.Provider value={value}>{children}</GlowContext.Provider>;
}

export function useMobileGlow() {
  return useContext(GlowContext);
}

function hexToRgb(hex: string) {
  const value = hex.replace("#", "");
  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
  };
}

function ThemedWash({ color }: { color: string }) {
  const { r, g, b } = hexToRgb(color);

  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{ background: `rgba(${r}, ${g}, ${b}, 0.16)` }}
      />
      <div
        className="absolute left-1/2 top-[32%] h-[250vw] w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(${r}, ${g}, ${b}, 0.58) 0%, rgba(${r}, ${g}, ${b}, 0.22) 42%, transparent 70%)`,
        }}
      />
      <div
        className="absolute left-[8%] top-[58%] h-[100vw] w-[100vw] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(${r}, ${g}, ${b}, 0.32) 0%, transparent 65%)`,
        }}
      />
      <div
        className="absolute right-[-12%] top-[72%] h-[90vw] w-[90vw] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(${r}, ${g}, ${b}, 0.26) 0%, transparent 65%)`,
        }}
      />
    </div>
  );
}

/**
 * Fixed hero backdrop for the compact mobile shell (< 490px).
 * Stays locked to the viewport so it remains visible behind
 * the service cards (and other transparent mobile sections) while scrolling.
 * Theme wash follows the in-view service card color.
 */
export default function MobileStickyGradient() {
  const { glow } = useMobileGlow();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden max-[489px]:block"
    >
      <div className="absolute inset-0 bg-[#0B1220]" />

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: glow ? 0.22 : 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
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
      </motion.div>

      <AnimatePresence>
        {glow ? (
          <motion.div
            key={glow}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ThemedWash color={glow} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
