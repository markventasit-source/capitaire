"use client";

import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";

const socialLinks = [
  {
    title: "Instagram",
    href: "https://instagram.com",
    icon: "/instagram.png",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/linkedin.png",
  },
  {
    title: "Facebook",
    href: "https://facebook.com",
    icon: "/facebook.png",
  },
  {
    title: "YouTube",
    href: "https://youtube.com",
    icon: "/youtube.png",
  },
] as const;

export default function SocialFloatingDock() {
  const items = socialLinks.map((link) => ({
    title: link.title,
    href: link.href,
    icon: (
      <Image
        src={link.icon}
        alt={link.title}
        width={20}
        height={20}
        className="h-5 w-5 object-contain"
      />
    ),
  }));

  return (
    <div className="pointer-events-none fixed right-5 bottom-6 z-40 md:right-6 md:bottom-8">
      <FloatingDock
        items={items}
        orientation="vertical"
        desktopClassName="pointer-events-auto"
        mobileClassName="pointer-events-auto"
        itemClassName="hover:bg-navy"
      />
    </div>
  );
}
