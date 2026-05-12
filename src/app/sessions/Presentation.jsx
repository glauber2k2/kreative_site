"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Presentation() {
  return (
    <section className="relative w-full bg-[#000000] text-white overflow-hidden pt-20 md:pt-0">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#5233fc]/15 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#7be0bc]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen gap-10 lg:gap-16 pb-20 md:pb-0">

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-medium tracking-wider uppercase mb-6 sm:mb-8 mx-auto md:mx-0 w-fit backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#7be0bc] animate-pulse"></span>
              Audiovisual e Marketing Criativo
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
              Conteúdo que <br className="hidden md:block" />
              gera mais que curtidas: <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5233fc] to-[#7be0bc]">
                Gera Vendas.
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-gray-400 text-base sm:text-lg lg:text-xl mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Transformamos a atenção da sua audiência em <strong className="text-white">lucro real</strong>.
            Criamos conteúdos audiovisuais estratégicos focados em despertar
            o desejo do seu cliente e alavancar seus resultados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <Link href="https://wa.me/message/5LIHPF2ZVXJZN1" target="_blank" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#7be0bc] text-black px-8 py-4 font-bold uppercase tracking-wide rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(123,224,188,0.4)] transition-all duration-300 text-sm sm:text-base">
                Quero conteúdos que vendem
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div
          className="relative w-full max-w-sm sm:max-w-md md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
          {/* Subtle glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[#5233fc]/40 to-[#7be0bc]/20 blur-[80px] rounded-full z-0"></div>

          <motion.img
            src="/assets/celular_holograma.png"
            alt="Holograma Celular Kreative"
            className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(82,51,252,0.3)]"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
