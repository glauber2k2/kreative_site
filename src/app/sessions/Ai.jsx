import React from "react";
import { Sparkles } from "lucide-react";

export default function Ai() {
  return (
    <section className="w-full bg-black text-white py-10 sm:py-24 px-4 sm:px-8 overflow-hidden relative">
      {/* Background decoration */}


      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-4 sm:gap-10 lg:gap-20 bg-gradient-to-br from-[#120a2e] to-[#0a0518] border border-[#5233fc]/30 p-5 sm:p-8 lg:p-16 rounded-3xl md:rounded-[2.5rem] shadow-[0_0_50px_rgba(82,51,252,0.15)] overflow-hidden">

        {/* Subtle internal glow */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#7be0bc]/10 rounded-full blur-[80px]"></div>

        <div className="w-full md:w-1/2 flex justify-center lg:justify-start">
          <img
            src="/assets/robot.png"
            alt="Inteligência Artificial"
            className="relative z-10 object-contain h-24 sm:h-64 lg:h-[400px] drop-shadow-[0_15px_30px_rgba(123,224,188,0.15)] hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="flex flex-col relative z-10 w-full md:w-1/2 items-center text-center md:items-start md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#7be0bc]/30 bg-[#7be0bc]/10 text-[#7be0bc] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-6 w-fit">
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            Inovação Tecnológica
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2 sm:mb-6">
            Potencializado com <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7be0bc] to-[#5233fc] mt-1 sm:mt-2 inline-block">
              Inteligência Artificial
            </span>
          </h2>

          <p className="text-gray-400 text-xs sm:text-base lg:text-lg leading-relaxed max-w-lg">
            Usamos <strong className="text-white">IA de ponta</strong> para criar
            efeitos cinematográficos impressionantes que prendem a atenção e destacam
            o seu conteúdo no mercado digital.
          </p>
        </div>
      </div>
    </section>
  );
}
