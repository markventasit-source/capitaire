import Image from "next/image";
import {
  MotionFade,
  MotionItem,
  MotionSection,
  MotionStagger,
} from "@/components/ui/motion";
import { TextAnimate } from "@/components/ui/text-animate";

interface FeatureCard {
  imgSrc: string;
  title: string;
  description: string;
}

export default function WhyCapitaireGrid() {
  const features: FeatureCard[] = [
    {
      imgSrc: "/1.png",
      title: "Capital-Only Focus",
      description:
        "No audit distraction and no routine compliance positioning. The work is centred on capital, control, structure, and promoter outcomes.",
    },
    {
      imgSrc: "/2.png",
      title: "Multi-Disciplinary Depth",
      description:
        "Finance, tax, law, corporate, regulatory, and transaction thinking sit together, because capital problems are never one-dimensional.",
    },
    {
      imgSrc: "/3.png",
      title: "Kerala Market Context",
      description:
        "Local promoter realities, NRI links, family ownership, and regional business structures are treated as core context, not side notes.",
    },
    {
      imgSrc: "/4.png",
      title: "Investor-Grade Clarity",
      description:
        "The end output is designed for decisions: valuation reports, decks, agreements, entity maps, and governance systems that survive scrutiny.",
    },
  ];

  return (
    <MotionSection className="site-container w-full bg-white py-20 font-sans text-[#1a2334]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-8">
        <MotionFade className="flex h-full flex-col justify-between border-l border-[#cba64b] py-2 pl-8 lg:col-span-5">
          <TextAnimate
            as="p"
            by="word"
            animation="blurInUp"
            once
            className="max-w-[270px] text-[28px] font-normal italic leading-[40px] tracking-normal text-[#cba64b] md:text-[36px] md:leading-[50.8px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {"\u201CPromoters create value through years of work. Our role is to convert that value into clarity, capital, and long-term wealth.\u201D"}
          </TextAnimate>

          <div className="mt-8 flex flex-col gap-1">
            <span
              className="text-sm font-medium italic tracking-wide text-[#cba64b] md:text-base"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Chairman&apos;s Note
            </span>
            <strong
              className="text-lg font-bold italic tracking-normal text-[#1a2334] md:text-xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              CA. Sreejith Kuniyil
            </strong>
          </div>
        </MotionFade>

        <div className="flex h-full flex-col gap-8 lg:col-span-7">
          <MotionFade delay={0.1}>
            <span className="text-gradient-primary mb-2 block text-base font-medium leading-6 uppercase tracking-normal">
              Why Capitaire
            </span>
            <h2 className="text-[36px] font-semibold leading-[42px] text-[#1a2334] md:text-[48px] md:leading-[56px]">
              Built for serious <br />
              promoter decisions.
            </h2>
          </MotionFade>

          <MotionStagger className="grid grid-cols-1 overflow-hidden rounded-sm border border-[#E8DDC3]/60 md:grid-cols-2">
            {features.map((item, index) => (
              <MotionItem
                key={item.title}
                className={`flex flex-col items-start gap-4 bg-white p-8 ${
                  index % 2 === 0 ? "md:border-r md:border-[#E8DDC3]/60" : ""
                } ${index < 2 ? "border-b border-[#E8DDC3]/60" : ""}`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#DFD18D] via-[#CBA64B] to-[#8A5923] p-3">
                  <div className="relative h-full w-full">
                    <Image
                      src={item.imgSrc}
                      alt={`${item.title} icon`}
                      fill
                      className="object-contain mix-blend-lighten"
                    />
                  </div>
                </div>

                <div className="mt-2 flex flex-col gap-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a2334] md:text-base">
                    {item.title}
                  </h4>
                  <p className="text-[14px] font-normal leading-5 tracking-normal text-[#555454]">
                    {item.description}
                  </p>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </MotionSection>
  );
}
