import React from 'react';
import logoImg from '../assets/logo.jpeg';

export const Header = ({ onResetFilters }) => {
  return (
    <header className="sticky top-0 z-30  backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Logo personalizado */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onResetFilters}>
          <div className="w-11 h-11 rounded-full overflow-hidden shadow-md border border-amber-500/50 flex-shrink-0 bg-white">
            <img 
              src={logoImg} 
              alt="Inmobiliaria Ramírez Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xl font-bold text-white block leading-none">INMOBILIARIA</span>
            <span className="text-xs font-semibold text-white tracking-wider">RAMÍREZ</span>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 font-medium text-black text-sm">
          <a href="#" className="text-white font-bold">Catálogo</a>
          <a href="#" className="hover:text-white">Nosotros</a>
          <a href="#" className="hover:text-white">Contacto</a>
        </nav>
      </div>
    </header>
  );
};