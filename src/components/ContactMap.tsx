import { MotionFade } from "@/components/ui/motion";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.413847267614!2d76.31385187632512!3d9.982632190121844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d9817f6ed11%3A0xec5c9fa02da06fda!2sCAPITAIRE%20-%20KOCHI!5e0!3m2!1sen!2sin!4v1790682674824!5m2!1sen!2sin";

export default function ContactMap() {
  return (
    <section className="w-full bg-[#F3F8FF] py-14 md:py-20">
      <div className="site-container">
        <MotionFade className="h-[360px] w-full overflow-hidden rounded-[8px] md:h-[500px] lg:h-[560px]">
          <iframe
            src={MAP_EMBED_URL}
            title="CAPITAIRE Kochi office on Google Maps"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </MotionFade>
      </div>
    </section>
  );
}
