"use client"

import { motion, useScroll, useTransform, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

interface ScrollProgressProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof MotionProps
> {
  ref?: React.Ref<HTMLDivElement>
  placement?: "top" | "bottom"
}

export function ScrollProgress({
  className,
  ref,
  placement = "top",
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, (value) => `${value * 100}%`)

  if (placement === "bottom") {
    return (
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[2px] bg-white/10">
        <motion.div
          ref={ref}
          className={cn(
            "h-full bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923]",
            className
          )}
          style={{ width }}
          {...props}
        />
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-[#DFD18D] via-[#CBA64B] to-[#8A5923]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  )
}
