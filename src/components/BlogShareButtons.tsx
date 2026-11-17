"use client";

import { useState, useSyncExternalStore } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

type BlogShareButtonsProps = {
  title: string;
  className?: string;
};

type IconProps = { className?: string };

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function subscribe() {
  return () => {};
}

function usePageUrl() {
  return useSyncExternalStore(
    subscribe,
    () => window.location.href,
    () => "",
  );
}

function useCanNativeShare() {
  return useSyncExternalStore(
    subscribe,
    () => typeof navigator.share === "function",
    () => false,
  );
}

export default function BlogShareButtons({ title, className }: BlogShareButtonsProps) {
  const shareUrl = usePageUrl();
  const canNativeShare = useCanNativeShare();
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "LinkedIn",
      href: shareUrl
        ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
        : undefined,
      icon: LinkedInIcon,
    },
    {
      label: "Facebook",
      href: shareUrl
        ? `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        : undefined,
      icon: FacebookIcon,
    },
    {
      label: "X",
      href: shareUrl
        ? `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
        : undefined,
      icon: XIcon,
    },
  ] as const;

  async function copyLink() {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can fail in locked-down contexts; leave the button usable.
    }
  }

  async function nativeShare() {
    if (!shareUrl || !navigator.share) return;
    try {
      await navigator.share({ title, url: shareUrl });
    } catch {
      // User cancelled or share is unavailable.
    }
  }

  const buttonClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#E5E5E5] bg-white text-[#1A2334] transition-colors hover:border-[#CBA64B] hover:bg-[#FFFCF6] hover:text-[#CBA64B]";

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <span className="font-[family-name:var(--font-inter)] text-[14px] font-medium leading-none text-[#1A2334]">
        Share
      </span>
      <div className="flex flex-wrap items-center gap-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${link.label}`}
              className={cn(buttonClass, !link.href && "pointer-events-none opacity-50")}
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
        <button
          type="button"
          onClick={copyLink}
          aria-label={copied ? "Link copied" : "Copy link"}
          className={buttonClass}
        >
          {copied ? <Check className="h-4 w-4 text-[#CBA64B]" /> : <Copy className="h-4 w-4" />}
        </button>
        {canNativeShare && (
          <button
            type="button"
            onClick={nativeShare}
            aria-label="Share"
            className={cn(buttonClass, "max-[589px]:inline-flex sm:hidden")}
          >
            <Share2 className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
