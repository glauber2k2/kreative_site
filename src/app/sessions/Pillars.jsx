import { Check } from "lucide-react";
import React from "react";

export default function Pillars() {
  return (
    <div className="w-full py-10 lg:py-20 bg-[#060c11] flex items-center justify-center text-white">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between gap-8 flex-col sm:flex-row relative">
        <div className=" flex flex-col lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            Nosso trabalho segue <br />
            <span className="text-[#5233FD] font-bold md:text-5xl">4 </span>
            importantes pilares
          </h1>

          <h2 className="mt-4 text-sm md:text-lg text-pretty text-justify">
            Nossas estratégias e produções audiovisuais contam com pilares fundamentais para entregar
            alta conversão, engajamento e credibilidade para o seu negócio.
          </h2>

          <ul className="mt-6 md:mt-10 md:text-xl space-y-2 lg:space-y-4">
            <li className="flex gap-2 items-center">
              <Check size={20} className="text-[#5233FD]" />
              Audiovisual Premium
            </li>
            <li className="flex gap-2 items-center">
              <Check size={20} className="text-[#5233FD]" />
              Estratégia de Conversão
            </li>
            <li className="flex gap-2 items-center">
              <Check size={20} className="text-[#5233FD]" />
              Retenção de Audiência
            </li>
            <li className="flex gap-2 items-center">
              <Check size={20} className="text-[#5233FD]" />
              Foco em Resultados
            </li>
          </ul>
        </div>
        <img
          src="/assets/cerebro.png"
          alt=""
          className="object-cover w-40 sm:w-1/3 absolute -bottom-4 right-7 sm:static"
        />
      </div>
    </div>
  );
}
