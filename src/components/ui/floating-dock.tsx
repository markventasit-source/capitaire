"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

type DockItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

type FloatingDockProps = {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
  orientation?: "horizontal" | "vertical";
  itemClassName?: string;
};

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  orientation = "horizontal",
  itemClassName,
}: FloatingDockProps) => {
  const isVertical = orientation === "vertical";

  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        orientation={orientation}
        itemClassName={itemClassName}
      />
      {isVertical ? (
        <FloatingDockVerticalMobile
          items={items}
          className={mobileClassName}
          itemClassName={itemClassName}
        />
      ) : (
        <FloatingDockMobile items={items} className={mobileClassName} />
      )}
    </>
  );
};

const FloatingDockVerticalMobile = ({
  items,
  className,
  itemClassName,
}: {
  items: DockItem[];
  className?: string;
  itemClassName?: string;
}) => (
  <div className={cn("flex flex-col items-center gap-3 md:hidden", className)}>
    {items.map((item) => (
      <a
        key={item.title}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.title}
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary bg-navy/90 backdrop-blur-sm transition-colors hover:bg-navy",
          itemClassName,
        )}
      >
        {item.icon}
      </a>
    ))}
  </div>
);

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  orientation = "horizontal",
  itemClassName,
}: {
  items: DockItem[];
  className?: string;
  orientation?: "horizontal" | "vertical";
  itemClassName?: string;
}) => {
  const isVertical = orientation === "vertical";
  const mousePosition = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) =>
        mousePosition.set(isVertical ? e.pageY : e.pageX)
      }
      onMouseLeave={() => mousePosition.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex",
        isVertical
          ? "h-auto w-auto flex-col items-center gap-3 bg-transparent p-0"
          : "h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 dark:bg-neutral-900",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer
          mousePosition={mousePosition}
          key={item.title}
          orientation={orientation}
          itemClassName={itemClassName}
          {...item}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mousePosition,
  title,
  icon,
  href,
  orientation = "horizontal",
  itemClassName,
}: {
  mousePosition: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  orientation?: "horizontal" | "vertical";
  itemClassName?: string;
}) {
  const isVertical = orientation === "vertical";
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mousePosition, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };

    if (isVertical) {
      return val - bounds.y - bounds.height / 2;
    }

    return val - bounds.x - bounds.width / 2;
  });

  const hoverRange = isVertical ? [-60, 0, 60] : [-150, 0, 150];
  const sizeRange = isVertical ? [44, 48, 44] : [40, 80, 40];
  const iconSizeRange = isVertical ? [18, 20, 18] : [20, 40, 20];

  const widthTransform = useTransform(distance, hoverRange, sizeRange);
  const heightTransform = useTransform(distance, hoverRange, sizeRange);
  const widthTransformIcon = useTransform(distance, hoverRange, iconSizeRange);
  const heightTransformIcon = useTransform(distance, hoverRange, iconSizeRange);

  const springConfig = isVertical
    ? { mass: 0.1, stiffness: 200, damping: 20 }
    : { mass: 0.1, stiffness: 150, damping: 12 };

  const width = useSpring(widthTransform, springConfig);
  const height = useSpring(heightTransform, springConfig);
  const widthIcon = useSpring(widthTransformIcon, springConfig);
  const heightIcon = useSpring(heightTransformIcon, springConfig);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={title}>
      <motion.div
        ref={ref}
        style={isVertical ? { width, height } : { width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full",
          isVertical
            ? "border-2 border-primary bg-navy/90 backdrop-blur-sm"
            : "bg-gray-200 dark:bg-neutral-800",
          itemClassName,
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{
                opacity: 1,
                y: 0,
                x: isVertical ? 0 : "-50%",
              }}
              exit={{ opacity: 0, y: 2, x: isVertical ? 0 : "-50%" }}
              className={cn(
                "absolute w-fit rounded-md border border-primary/30 bg-navy px-2 py-0.5 text-xs whitespace-pre text-white",
                isVertical
                  ? "top-1/2 right-full mr-3 -translate-y-1/2"
                  : "-top-8 left-1/2",
              )}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
