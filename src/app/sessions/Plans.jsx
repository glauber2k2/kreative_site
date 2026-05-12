"use client";

import { motion } from "framer-motion";

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Plans() {
  const plans = [
    {
      name: "Essencial",
      description: "Ideal para iniciar sua presença digital com qualidade.",
      price: "997",
      features: [
        { name: "Identidade Visual Básica", included: true },
        { name: "4 Vídeos curtos (Reels/TikTok)", included: true },
        { name: "Gestão de Social Media", included: false },
        { name: "Estratégia de Lançamento", included: false },
        { name: "Produção Audiovisual Premium", included: false },
      ],
      isPopular: false,
      buttonText: "Começar Agora",
      delay: 0.2
    },
    {
      name: "Profissional",
      description: "O melhor custo-benefício para quem quer escalar resultados.",
      price: "1.497",
      features: [
        { name: "Identidade Visual Completa", included: true },
        { name: "12 Vídeos curtos estratégicos", included: true },
        { name: "Gestão de Social Media", included: true },
        { name: "Estratégia de Lançamento", included: true },
        { name: "Produção Audiovisual Premium", included: false },
      ],
      isPopular: true,
      buttonText: "Assinar Profissional",
      delay: 0.4
    },
    {
      name: "Elite",
      description: "Para marcas que buscam exclusividade e alto impacto.",
      price: "4.997",
      features: [
        { name: "Identidade Visual Completa", included: true },
        { name: "Vídeos curtos ilimitados", included: true },
        { name: "Gestão de Social Media VIP", included: true },
        { name: "Estratégia de Lançamento", included: true },
        { name: "Produção Audiovisual Premium", included: true },
      ],
      isPopular: false,
      buttonText: "Falar com Consultor",
      delay: 0.6
    }
  ];

  return (
    <section className="relative w-full bg-[#000000] text-white py-20 overflow-hidden" id="planos">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#5233fc]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-medium tracking-wider uppercase mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#5233fc] animate-pulse"></span>
            Investimento
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Escolha o plano ideal para o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5233fc] to-[#7be0bc]">próximo nível</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Nossos pacotes foram desenhados para entregar o máximo de retorno sobre seu investimento, com opções estratégicas para cada fase do seu negócio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: plan.delay }}
              className={`relative p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 ${
                plan.isPopular 
                  ? "bg-gradient-to-b from-[#5233fc]/10 to-transparent border border-[#5233fc] shadow-[0_0_30px_rgba(82,51,252,0.2)] lg:-translate-y-4" 
                  : "bg-white/5 border border-white/10 hover:border-white/20"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5233fc] to-[#7be0bc] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Mais Escolhido
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8 relative">
                {plan.isPopular && (
                  <div className="text-xs text-[#f59e0b] font-bold mb-1 flex items-center gap-1 animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    Últimos dias com este valor
                  </div>
                )}
                {plan.isPopular && (
                  <div className="text-sm text-gray-500 line-through mb-1">
                    De R$ 2.497
                  </div>
                )}
                <div>
                  <span className="text-gray-400 font-medium">R$</span>
                  <span className="text-4xl md:text-5xl font-bold text-white ml-1">{plan.price}</span>
                  <span className="text-gray-400 text-sm">/mês</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-[#7be0bc]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckIcon />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                        <XIcon />
                      </div>
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-[#7be0bc] text-black hover:shadow-[0_0_20px_rgba(123,224,188,0.4)]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
