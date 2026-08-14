import Link from "next/link";

const footerLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT US", href: "/contact" },
] as const;

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "YouTube", href: "https://youtube.com", icon: YouTubeIcon },
] as const;

const addresses = [
  "2nd Floor, Imperial Amity, Chalikkavattom, NH Bypass, Vyttila, Kochi - 682019",
  "First Floor, Building No.55-3355B, Raveendran Road, Kadavanthra, Kochi - 682020",
] as const;

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14.5 22V13.2h2.96l.44-3.42H14.5V7.6c0-.99.27-1.66 1.7-1.66h1.81V2.88c-.31-.04-1.39-.13-2.64-.13-2.61 0-4.4 1.6-4.4 4.53v2.5H8.3v3.42h2.67V22h3.53Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 24 18" fill="currentColor" aria-hidden>
      <path d="M23.5 2.8A3 3 0 0 0 21.4.7C19.5.2 12 .2 12 .2s-7.5 0-9.4.5A3 3 0 0 0 .5 2.8 31.5 31.5 0 0 0 0 9a31.5 31.5 0 0 0 .5 6.2 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 9a31.5 31.5 0 0 0-.5-6.2ZM9.6 12.6V5.4L15.8 9l-6.2 3.6Z" />
    </svg>
  );
}

export default function MobileFooter() {
  return (
    <footer className="relative z-10 hidden w-full bg-transparent px-5 pb-6 pt-4 max-[489px]:block">
      <div className="grid min-w-0 grid-cols-[0.4fr_0.6fr] border-t border-white/15">
        <nav className="flex min-w-0 flex-col gap-5 border-r border-white/15 py-6 pr-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-inter)] text-[16px] font-medium leading-none tracking-normal text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex min-w-0 flex-col gap-4 py-6 pl-4">
          <div className="flex w-full min-w-0 flex-nowrap items-center justify-between">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-full border border-[#CBA64B] text-[#CBA64B]"
              >
                <social.icon />
              </Link>
            ))}
          </div>

          <div className="flex min-w-0 flex-col gap-2">
            <Link
              href="mailto:info@capitaire.com"
              className="break-all font-[family-name:var(--font-inter)] text-[16px] font-medium leading-none tracking-normal text-white"
            >
              info@capitaire.com
            </Link>
            <Link
              href="tel:+917907267290"
              className="font-[family-name:var(--font-inter)] text-[16px] font-medium leading-none tracking-normal text-white"
            >
              +91 79072 67290
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 border-t border-white/15 py-6 pr-[20px]">
        {addresses.map((address) => (
          <p
            key={address}
            className="font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[24px] tracking-normal text-white"
          >
            {address}
          </p>
        ))}
      </div>

      <p className="border-t border-white/15 py-5 text-center font-[family-name:var(--font-inter)] text-[13px] font-normal leading-none tracking-normal text-white/80">
        Copyright © 2025 Capitaire. All rights reserved.
      </p>
    </footer>
  );
}
