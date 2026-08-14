import { cn } from "@/lib/utils";

type GlowEllipseProps = {
  color: string;
  className?: string;
};

/**
 * Figma "Ellipse 3.png" glow.
 * Uses the PNG alpha as a mask so the soft blur shape stays exact,
 * while `color` tints it.
 */
export function GlowEllipse({ color, className }: GlowEllipseProps) {
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none block", className)}
      style={{
        backgroundColor: color,
        WebkitMaskImage: "url('/ellipse-3.png')",
        maskImage: "url('/ellipse-3.png')",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
