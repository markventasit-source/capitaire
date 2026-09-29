import Image from "next/image";
import { MotionFade, MotionItem, MotionStagger } from "@/components/ui/motion";

const advantages = [
  {
    title: "Multidisciplinary Expertise",
    icon: "/talent-management_11646891%201.png",
    description:
      "Sustainable business growth is not limited to financial success. Achieving sustainable growth for businesses requires the right balance of finance, operations, strategy, taxation, governance and compliance. At Capitaire, we bring together professionals across these critical areas to provide your business with strategic business advisory and solutions that support long-term success",
  },
  {
    title: "Business-Centric Approach",
    icon: "/man_2166954%201.png",
    description:
      "We understand that every business is different, so is our advisory approach. Our professionals ensure that each business is thoroughly researched and analysed for its model, growth, industry, objectives, challenges, and risk management before defining a strategic solution. Our advice is tailored to each business's needs, goals and operating environment.",
  },
  {
    title: "Integrated Strategic Advisory",
    icon: "/financial_12394265%201.png",
    description:
      "A business performs better when its strategy reflects its goals. A tailored strategy is developed after evaluating your business's financial, operational, risk, and market position. A clear, tailored strategy helps ensure that key business functions remain aligned and operate effectively, supporting long-term growth.",
  },
  {
    title: "Practical, Action Oriented Advice",
    icon: "/reinforcement_1924299%201.png",
    description:
      "Business advice is valuable only when it can be put into practice. Our advisory team translates recommendations into clear, practical steps that align with your business priorities, helping you implement them effectively and achieve your business objectives.",
  },
] as const;

export default function AboutAdvantage() {
  return (
    <section className="w-full bg-white pb-14 text-[#1A2334] md:pb-20">
      <div className="site-container">
        <MotionFade>
          <h2 className="font-[family-name:var(--font-inter)] text-[32px] font-semibold leading-[40px] tracking-normal md:text-[48px] md:leading-[54.8px]">
            The CAPITAIRE Advantage
          </h2>
        </MotionFade>

        <MotionStagger className="mt-8 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item) => (
            <MotionItem
              key={item.title}
              className="flex flex-col rounded-[4px] border border-[#E5E5E5] bg-white p-6"
            >
              <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#E5E5E5] bg-white">
                <Image
                  src={item.icon}
                  alt=""
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px] object-contain"
                />
              </span>
              <h3 className="mt-6 font-[family-name:var(--font-inter)] text-[24px] font-medium leading-[30px] tracking-normal text-[#1A2334] md:text-[26px] md:leading-[32px]">
                {item.title}
              </h3>
              <p className="mt-4 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-[24px] tracking-normal text-[#555454]">
                {item.description}
              </p>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
