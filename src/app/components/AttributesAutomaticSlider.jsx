"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Zap,
  ShieldCheck,
  TrendingUp,
  Target,
  Award,
  Users,
  BarChart,
  BadgeCheck,
} from "lucide-react";

const SLIDES_DATA = [
  {
    icon: <ShieldCheck size={26} className="text-[##7be0bc]" />,
    title: "Confiança e Segurança",
  },
  {
    icon: <TrendingUp size={26} className="text-[#7be0bc]" />,
    title: "Foco em Resultados",
  },
  {
    icon: <Target size={26} className="text-[#7be0bc]" />,
    title: "Estratégias Validadas",
  },
  {
    icon: <Award size={26} className="text-[#7be0bc]" />,
    title: "Qualidade Premium",
  },
  {
    icon: <Users size={26} className="text-[#7be0bc]" />,
    title: "Equipe Especializada",
  },
  {
    icon: <BarChart size={26} className="text-[#7be0bc]" />,
    title: "Transparência nos Dados",
  },
  {
    icon: <BadgeCheck size={26} className="text-[#7be0bc]" />,
    title: "Agência Certificada",
  },
  {
    icon: <Zap size={26} className="text-[#7be0bc]" />,
    title: "Execução Rápida",
  },
];

export function AttributeAutomaticSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    AutoScroll({
      speed: 0.5,
      stopOnInteraction: false,
      playOnInit: true,
    }),
  ]);

  return (
    <div className="w-full bg-black py-4">
      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] max-w-7xl mx-auto"
        ref={emblaRef}
      >
        <div className="flex">
          {SLIDES_DATA.map((slide, index) => (
            <div
              className="relative flex-shrink-0 min-w-0 md:mx-10"
              key={index}
            >
              <div className="flex items-center justify-center p-6 gap-2">
                {slide.icon}
                <h3 className="text-lg font-semibold text-white">
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
