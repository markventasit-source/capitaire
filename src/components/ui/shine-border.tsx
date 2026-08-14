"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the border in pixels
   * @default 1
   */
  borderWidth?: number
  /**
   * Duration of the animation in seconds
   * @default 14
   */
  duration?: number
  /**
   * Color of the border, can be a single color or an array of colors
   * @default "#000000"
   */
  shineColor?: string | string[]
  /**
   * Reverse animation direction
   * @default false
   */
  reverse?: boolean
  /**
   * Whether the shine gradient should animate
   * @default true
   */
  animate?: boolean
}

/**
 * Shine Border
 *
 * An animated background border effect component with configurable properties.
 */
export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor = "#000000",
  reverse = false,
  animate = true,
  className,
  style,
  ...props
}: ShineBorderProps) {
  const colors = Array.isArray(shineColor) ? shineColor.join(",") : shineColor

  return (
    <div
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          "--shine-direction": reverse ? "reverse" : "normal",
          backgroundImage: animate
            ? `radial-gradient(transparent,transparent, ${colors},transparent,transparent)`
            : undefined,
          backgroundColor: animate ? undefined : Array.isArray(shineColor) ? shineColor[0] : shineColor,
          backgroundSize: animate ? "300% 300%" : undefined,
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "var(--border-width)",
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 size-full rounded-[inherit]",
        animate && "shine-border-animate will-change-[background-position]",
        className
      )}
      {...props}
    />
  )
}
