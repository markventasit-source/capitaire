import Image from "next/image";
import Link from "next/link";
import { MotionFade } from "@/components/ui/motion";
import { blogPosts } from "@/data/blogs";
import { services } from "@/data/services";

const navLinks = [
  { label: "Home", href: "/capital-advisory" },
  { label: "About Us", href: "/capital-advisory/about" },
  { label: "Services", href: "/capital-advisory/services" },
  { label: "Blog", href: "/capital-advisory/blog" },
  { label: "Contact Us", href: "/capital-advisory/contact" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Disclaimer", href: "#" },
] as const;

const addresses = [
  "2nd Floor, Imperial Amity, Chalikkavattom, NH Bypass, Vyttila, Kochi - 682019",
  "First Floor, Building No.55-3355B, Raveendran Road, Kadavanthra, Kochi - 682020",
] as const;

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "/linkedin.svg" },
  { label: "Instagram", href: "https://instagram.com", icon: "/instagram.svg" },
  { label: "Facebook", href: "https://facebook.com", icon: "/fb.png" },

] as const;

// Show first 4 blog posts as quick links
const blogLinks = blogPosts.slice(0, 4);

// Show first 6 services
const serviceLinks = services.slice(0, 6);

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#1A2334] font-[family-name:var(--font-inter)] text-white">
      {/* Main grid */}
      <div className="site-container grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] lg:gap-12 xl:gap-16">

        {/* Col 1 — Brand */}
        <MotionFade className="flex flex-col gap-7">
          <Link href="/capital-advisory" aria-label="CAPITAIRE home">
            <Image
              src="/logo.png"
              alt="CAPITAIRE"
              width={160}
              height={48}
              className="h-auto w-[140px] object-contain brightness-0 invert"
            />
          </Link>

          <p className="max-w-[300px] text-[14px] font-normal leading-[22px] tracking-normal text-[#A5ADBC]">
            Building businesses for the future — strategy, capital, governance,
            and succession advisory for growth-stage companies.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 p-2 transition-colors hover:border-[#CBA64B] hover:bg-[#CBA64B]/10"
              >
                <Image
                  src={s.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain brightness-0 invert"
                />
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <Link
              href="mailto:info@capitaire.com"
              className="flex items-center gap-3 text-[14px] font-normal leading-none text-[#A5ADBC] transition-colors hover:text-white"
            >
              <Image src="/mail.png" alt="" width={16} height={16} className="h-4 w-4 object-contain opacity-60" />
              info@capitaire.com
            </Link>
            <Link
              href="tel:+917907267290"
              className="flex items-center gap-3 text-[14px] font-normal leading-none text-[#A5ADBC] transition-colors hover:text-white"
            >
              <Image src="/calling.png" alt="" width={16} height={16} className="h-4 w-4 object-contain opacity-60" />
              +91 79072 67290
            </Link>
          </div>
        </MotionFade>

        {/* Col 2 — Quick links */}
        <MotionFade delay={0.05} className="flex flex-col gap-6">
          <h3 className="text-[13px] font-semibold uppercase leading-none tracking-[0.1em] text-[#CBA64B]">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[14px] font-normal leading-none text-[#A5ADBC] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </MotionFade>

        {/* Col 3 — Services */}
        <MotionFade delay={0.1} className="flex flex-col gap-6">
          <h3 className="text-[13px] font-semibold uppercase leading-none tracking-[0.1em] text-[#CBA64B]">
            Services
          </h3>
          <ul className="flex flex-col gap-4">
            {serviceLinks.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/capital-advisory/services/${service.slug}`}
                  className="text-[14px] font-normal leading-[20px] text-[#A5ADBC] transition-colors hover:text-white"
                >
                  {service.title.join(" ")}
                </Link>
              </li>
            ))}
          </ul>
        </MotionFade>

        {/* Col 4 — Address + latest blogs */}
        <MotionFade delay={0.15} className="flex flex-col gap-8">
          {/* Address */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[13px] font-semibold uppercase leading-none tracking-[0.1em] text-[#CBA64B]">
              Our Offices
            </h3>
            {addresses.map((addr) => (
              <p
                key={addr}
                className="flex gap-3 text-[13px] font-normal leading-[20px] text-[#A5ADBC]"
              >
                <Image
                  src="/location.png"
                  alt=""
                  width={14}
                  height={14}
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 object-contain opacity-60"
                />
                {addr}
              </p>
            ))}
          </div>

          {/* Latest blogs */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[13px] font-semibold uppercase leading-none tracking-[0.1em] text-[#CBA64B]">
              Latest Blogs
            </h3>
            <ul className="flex flex-col gap-4">
              {blogLinks.map((post) => (
                <li key={post.slug}>
                  <Link
                    href="/capital-advisory/blog"
                    className="flex items-start gap-3 group"
                  >
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-[#CBA64B]" />
                    <span className="text-[13px] font-normal leading-[20px] text-[#A5ADBC] transition-colors group-hover:text-white">
                      {post.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </MotionFade>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <MotionFade className="site-container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-[13px] font-normal leading-none text-[#848EA3]">
            Copyright © {new Date().getFullYear()} Capitaire. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-5">
            {legalLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-5">
                {i > 0 && <span aria-hidden className="h-3 w-px bg-white/20" />}
                <Link
                  href={link.href}
                  className="text-[13px] font-normal leading-none text-[#848EA3] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
        </MotionFade>
      </div>
    </footer>
  );
}
