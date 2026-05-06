import React from "react";

export default function TopBar() {
  return (
    <header className="w-full border-b border-white/5 py-3 sm:py-4 top-0 fixed z-50 text-white backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <a href="#">
            <img
              src="/assets/logoescrita_branca_roxa.png"
              alt="Kreative Logo"
              className="object-scale-down w-28 sm:w-32 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 sm:gap-10">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#services" className="hover:text-[#7be0bc] hover:-translate-y-0.5 transition-all">
              Serviços
            </a>
            <a href="#quemsomos" className="hover:text-[#7be0bc] hover:-translate-y-0.5 transition-all">
              Sobre
            </a>
            <a href="#faq" className="hover:text-[#7be0bc] hover:-translate-y-0.5 transition-all">
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/message/5LIHPF2ZVXJZN1"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 sm:px-6 sm:py-2.5 bg-[#5233fc]/10 border border-[#5233fc] hover:bg-[#5233fc] rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(82,51,252,0.5)]"
          >
            Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
