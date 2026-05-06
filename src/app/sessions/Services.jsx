import React from "react";
import { MonitorSmartphone, Lightbulb, Video, Camera, Navigation, Sparkles } from "lucide-react";

const services = [
  {
    title: "Gestão de Redes Sociais",
    description: "Cuidamos da sua presença online com estratégias focadas em engajamento e conversão.",
    icon: <MonitorSmartphone className="w-6 h-6 sm:w-8 sm:h-8 text-[#7be0bc]" />,
  },
  {
    title: "Criação de Conteúdo",
    description: "Desenvolvemos conteúdos autênticos e relevantes para conectar sua marca ao público ideal.",
    icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-[#5233fc]" />,
  },
  {
    title: "Gravação e Edição de Vídeos",
    description: "Produções audiovisuais de alta qualidade, desde a captação até a finalização cinematográfica.",
    icon: <Video className="w-6 h-6 sm:w-8 sm:h-8 text-[#7be0bc]" />,
  },
  {
    title: "Captação de Fotos",
    description: "Fotografia profissional para produtos, eventos e ensaios corporativos que destacam seu negócio.",
    icon: <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-[#5233fc]" />,
  },
  {
    title: "Filmagem de Drone",
    description: "Perspectivas aéreas incríveis que valorizam o seu projeto e impressionam seus clientes.",
    icon: <Navigation className="w-6 h-6 sm:w-8 sm:h-8 text-[#7be0bc]" />,
  },
  {
    title: "Produção com IA",
    description: "Inovação tecnológica aplicando Inteligência Artificial para otimizar e escalar suas produções.",
    icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#5233fc]" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-12 lg:py-24 bg-[#030303] text-white flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Nossos <span className="text-[#5233fc]">Serviços</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-lg px-2">
            Oferecemos soluções completas em audiovisual e marketing para elevar o nível da sua marca e gerar resultados reais.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#5233fc] transition-all duration-300 p-4 sm:p-8 rounded-2xl group flex flex-col items-center sm:items-start text-center sm:text-left hover:-translate-y-1 shadow-lg hover:shadow-[#5233fc]/10"
            >
              <div className="bg-[#141414] border border-[#2a2a2a] w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-[13px] sm:text-xl font-semibold mb-2 sm:mb-4 text-white group-hover:text-[#7be0bc] transition-colors duration-300 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 text-[10px] sm:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
