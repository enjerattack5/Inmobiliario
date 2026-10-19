import React from 'react';
import logoImg from '../assets/logo.jpeg';

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-30 bg-transparent px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logotipo Oficial y Nombre */}
        <div className="flex items-center gap-3">
          <img 
            src={logoImg} 
            alt="Inmobiliaria Ramírez Logo" 
            className="w-12 h-12 object-contain rounded-full border border-amber-400/40 shadow-md"
          />
          <span className="text-white font-serif font-bold tracking-wider text-base sm:text-lg">
            INMOBILIARIA RAMÍREZ
          </span>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
          <a href="#destacados" className="hover:text-[#D8EF8B] transition-colors">Destacados</a>
          <a href="#catalogo" className="hover:text-[#D8EF8B] transition-colors">Catálogo</a>
          <a href="#nosotros" className="hover:text-[#D8EF8B] transition-colors">Nosotros</a>
          <a href="#como-comprar" className="hover:text-[#D8EF8B] transition-colors">Cómo comprar</a>
        </nav>

        {/* Botón de Asesor */}
        <a 
          href="#como-comprar"
          className="bg-[#D8EF8B] text-[#12382F] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#c8e274] transition-all shadow-sm"
        >
          Hablar con un asesor
        </a>

      </div>
    </header>
  );
};