import React from "react";

export default function TopBar() {
  return (
    <div className="w-full bg-black/5 p-2 top-0 fixed z-50 text-white backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/assets/logokreative.png"
            alt="imagem da logo"
            className="object-scale-down sm:w-[7rem] w-10"
          />
          {/* <p className="text-sm sm:text-xl font-medium">Kreative.</p> */}
        </div>

        <div className="flex items-center gap-12">
          <a href="#quemsomos" className="hidden md:block">
            Quem somos
          </a>
          <a href="#faq" className="hidden md:block">
            FAQ
          </a>
          <a
            href="https://wa.me/message/5LIHPF2ZVXJZN1"
            target="_blank"
            className="px-4 py-2 border border-[#5233FD] rounded-full md:text-base text-xs"
          >
            Orçamento
          </a>
        </div>
      </div>
    </div>
  );
}
