import React from "react";

export default function About() {
  return (
    <section
      id="quemsomos"
      className="w-full relative py-16 md:py-24 bg-[#020202] text-white overflow-hidden flex justify-center"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5233fc]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5233fc] to-[#7be0bc] rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-700"></div>
            <img
              src="/assets/logo_branca_roxa.png"
              alt="Kreative Agência"
              className="relative w-[280px] md:w-[400px] lg:w-[450px] aspect-square object-cover rounded-3xl border border-white/5 shadow-2xl bg-black/50"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#5233fc]/50 bg-[#5233fc]/10 text-[#7be0bc] text-xs font-semibold tracking-wider uppercase mb-6 mx-auto lg:mx-0 w-fit">
            Sobre Nós
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Nós construímos<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5233fc] to-[#7be0bc]">
              seu próximo nível
            </span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            A <strong className="text-white">Kreative Agência</strong> é especializada em escalar empresas através de
            marketing estratégico e produção audiovisual de alto impacto. Unimos criatividade,
            análise de dados e precisão técnica para construir ecossistemas de vendas focados no
            que realmente importa: <strong className="text-white">o seu lucro</strong>.
          </p>

          <div className="mb-10">
            <h3 className="text-white font-medium mb-4 text-sm md:text-base">Nossas especialidades:</h3>
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
              {[
                "Estratégia de Vendas",
                "Audiovisual Premium",
                "Lançamentos",
                "Social Media",
                "Copy de Conversão",
                "Identidade Visual"
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-[#0a0a0a] border border-white/5 text-gray-300 text-xs md:text-sm rounded-full shadow-sm hover:border-[#5233fc]/50 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <a
            href="https://wa.me/message/5LIHPF2ZVXJZN1"
            target="_blank"
            className="group w-fit mx-auto lg:mx-0 px-8 py-4 bg-[#7be0bc] text-black font-bold rounded-full text-center uppercase tracking-wide hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(123,224,188,0.4)] flex items-center gap-3 text-sm md:text-base"
          >
            Agendar Reunião Estratégica
            <span className="group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
