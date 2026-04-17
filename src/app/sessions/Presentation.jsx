"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Presentation() {
  return (
    <div className=" w-full bg-gradient-to-tl from-black via-black to-[#5233FD] text-white via-55%">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 md:items-center justify-end md:flex-row lg:min-h-screen gap-10 py-20 md:py-0 flex flex-col-reverse">
        <div className="w-full flex flex-col md:justify-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" font-bold mb-4 text-pretty"
          >
            <h1 className="text-3xl lg:text-5xl">
              Seu conteúdo pode até gerar curtidas, mas ele gera vendas?
            </h1>
            <h1 className="mt-4 text-xl lg:text-3xl">
              Transformamos a atenção da sua audiência em lucro real.
            </h1>
          </motion.div>

          <motion.h2
            className="lg:text-xl mb-10 text-sm"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Mais do que vídeos bonitos. Criamos conteúdos estratégicos para despertar o desejo do seu cliente e converter visualizações em vendas diárias.
          </motion.h2>
          <Link href={"https://wa.me/message/5LIHPF2ZVXJZN1"} target="_blank">
            <motion.button
              className="md:w-fit bg-[#7EE2BE] py-4 px-8 font-bold uppercase rounded-full"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              Quero conteúdos que vendem
            </motion.button>
          </Link>
        </div>

        <motion.div
          className="relative w-2/3 sm:w-1/2 lg:w-full max-w-xl mx-auto"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] z-0 blur-3xl opacity-80"
            style={{
              background: "radial-gradient(circle, #5233FD 0%, transparent 70%)",
            }}
          />
          <img
            width={720}
            height={720}
            alt="imagem celular"
            src={"/assets/celular_holograma.png"}
            className="object-cover relative z-10 w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
