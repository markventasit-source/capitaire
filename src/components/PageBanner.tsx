import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MotionHero } from "@/components/ui/motion";

type BreadcrumbItem = { label: string; href?: string };

type PageBannerProps = {
  title: string;
  breadcrumb?: BreadcrumbItem[];
};

export default function PageBanner({ title, breadcrumb }: PageBannerProps) {
  return (
    <section className="w-full bg-navy">
      <div className="site-container flex flex-col justify-end pb-6 pt-0 md:pb-10" style={{ minHeight: breadcrumb ? 200 : 160 }}>
        <MotionHero className="flex items-center gap-5 md:gap-6">
          <Image
            src="/lines.png"
            alt=""
            width={220}
            height={101}
            aria-hidden
            className="h-auto w-[150px] md:w-[220px]"
          />
          <h1 className="font-[family-name:var(--font-inter)] text-[30px] font-light leading-[100%] tracking-normal text-white md:text-[38px]">
            {title}
          </h1>
        </MotionHero>

        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mt-3 ml-1">
            <ol className="flex items-center gap-1.5 font-[family-name:var(--font-inter)] text-[13px]">
              {breadcrumb.map((item, i) => (
                <li key={item.label} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <ChevronRight className="h-3 w-3 shrink-0 text-white/40" aria-hidden />
                  )}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-normal text-white/60 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-white" aria-current="page">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
