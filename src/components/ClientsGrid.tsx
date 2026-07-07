import { BlurFade } from "@/components/ui/blur-fade";
import { MotionFade, MotionSection } from "@/components/ui/motion";

const clients = [
  { name: "Client 1", logo: "/c1.jpg" },
  { name: "Client 2", logo: "/c2.png" },
  { name: "Client 3", logo: "/c3.png" },
  { name: "Client 4", logo: "/c4.jpg" },
  { name: "Client 5", logo: "/c5.jpg" },
  { name: "Client 6", logo: "/c6.png" },
  { name: "Client 7", logo: "/c7.png" },
  { name: "Client 8", logo: "/c8.jpg" },
  { name: "Client 9", logo: "/c9.png" },
  { name: "Client 10", logo: "/c10.png" },
  { name: "Client 11", logo: "/c11.png" },
  { name: "Client 12", logo: "/c12.png" },
  { name: "Client 13", logo: "/c13.jpg" },
  { name: "Client 14", logo: "/c14.png" },
  { name: "Client 15", logo: "/c15.png" },
] as const;

export default function ClientsGrid() {
  return (
    <MotionSection className="site-container w-full bg-white py-20 font-sans text-[#1A2334]">
      <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <MotionFade className="lg:col-span-3">
          <h2 className="text-[36px] font-semibold leading-[44px] tracking-normal text-[#1A2334]">
            Clients
          </h2>
        </MotionFade>

        <MotionFade className="lg:col-span-5" delay={0.1}>
          <p className="max-w-[420px] text-[28px] font-normal leading-[34px] tracking-normal text-[#CBA64B]">
            Our clients are everything to us;
            <br />
            so are we to them.
          </p>
        </MotionFade>
      </div>

      <div className="overflow-hidden rounded-sm border-l border-t border-[#E8DDC3] bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client, index) => (
            <BlurFade
              key={client.logo}
              inView
              delay={index * 0.06}
              direction="up"
              className="flex h-[110px] items-center justify-center border-r border-b border-[#E8DDC3] px-6 py-5"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-[54px] max-w-[140px] object-contain"
              />
            </BlurFade>
          ))}
        </div>
      </div>

      <MotionFade className="mt-6 flex items-center justify-center gap-2" delay={0.2}>
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            className={`h-2 w-2 rounded-full ${
              dot === 0 ? "bg-[#1A2334]" : "bg-[#D9D9D9]"
            }`}
          />
        ))}
      </MotionFade>
    </MotionSection>
  );
}
