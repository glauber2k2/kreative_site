import React from "react";

export default function About() {
  return (
    <div
      id="quemsomos"
      className=" w-full  flex py-10 md:py-20 justify-center text-white"
      style={{
        background:
          "radial-gradient(ellipse 90% 100% at center, #3a008860 0%, #000000ff 50%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between gap-10 w-full flex-col md:flex-row">
        <img
          src="/assets/logo_branca_roxa.png"
          alt=""
          className="w-[500px] h-[500px] object-cover rounded-2xl hidden lg:block"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl border-l-4 border-[#5233fc] w-fit pl-4 font-medium mb-8">
            Quem somos?
          </h1>
          <h2 className="text-gray-300 mb-6 text-xs sm:text-sm xl:text-base">
            A Kreative Agência é especializada em escalar empresas através de
            marketing estratégico e produção audiovisual de alto impacto. Nossa
            equipe de especialistas une criatividade, análise de dados e
            execução com precisão técnica para construir um ecossistema de vendas.
            Cada projeto é rigorosamente estruturado visando a métrica que
            importa: o lucro. Trabalhamos com processos validados e extrema
            transparência para garantir segurança ao seu investimento e
            preservar a credibilidade da sua marca enquanto os resultados escalam.
          </h2>
          <h1 className="sm:text-xl font-semibold mb-2 text-center md:text-start">
            Conhecimento estratégico em:
          </h1>
          <div
            className="flex flex-wrap md:gap-4 gap-2
           items-center mb-6 text-xs xl:text-base justify-center md:justify-start"
          >
            <span className="px-4 py-2 bg-[#5233fc] font-bold text-white rounded-full">
              Estratégia de Vendas
            </span>
            <span className="px-4 py-2 bg-[#5233fc] font-bold text-white rounded-full">
              Audiovisual Premium
            </span>
            <span className="px-4 py-2 bg-[#5233fc] font-bold text-white rounded-full">
              Lançamentos
            </span>
            <span className="px-4 py-2 bg-[#5233fc] font-bold text-white rounded-full">
              Social Media
            </span>
            <span className="px-4 py-2 bg-[#5233fc] font-bold text-white rounded-full">
              Copywriting de Conversão
            </span>
            <span className="px-4 py-2 bg-[#5233fc] font-bold text-white rounded-full">
              Criação e Identidade
            </span>
          </div>
          <a
            href="https://wa.me/message/5LIHPF2ZVXJZN1"
            target="_blank"
            className="mt-2 w-auto px-6 py-3 font-bold bg-[#5233fc] text-white rounded-full text-center uppercase tracking-wide hover:scale-105 transition-transform"
          >
            Agendar Reunião Estratégica
          </a>
        </div>
      </div>
    </div>
  );
}
