import React, { useState } from 'react';
import { MOCK_PROPERTIES } from './data/mockProperties';
import { Header } from './components/Header';
import { PropertyCard } from './components/PropertyCard';
import { PropertyModal } from './components/PropertyModal';
import { MapPin, ShieldCheck, MessageSquare, Phone, Filter, Award, CheckCircle2 } from 'lucide-react';
import heroBg from './assets/hero.jpg';
import licFoto from './assets/Perfil-Lic.jpeg';

export default function App() {
  const [filterType, setFilterType] = useState('Todos');
  const [filterCategory, setFilterCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = MOCK_PROPERTIES.filter((property) => {
    const matchesType = filterType === 'Todos' || property.type === filterType;
    const matchesCategory = filterCategory === 'Todos' || property.category === filterCategory;
    const matchesSearch = 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F7F6F1] text-[#12382F] font-sans">
      
      {/* 1. HEADER Y HERO SECTION */}
      <div className="relative bg-[#17382D] min-h-[85vh] flex flex-col justify-between overflow-hidden">
        <img 
          src={heroBg} 
          alt="Terrenos" 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17382D]/80 via-transparent to-[#17382D]"></div>

        <Header />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full my-auto">
          <span className="text-[#D8EF8B] text-xs font-bold uppercase tracking-widest block mb-3">
            PATRIMONIO QUE CRECE CONTIGO
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-white max-w-2xl leading-tight mb-4">
            Tu lugar en el mundo empieza aquí.
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            Terrenos seleccionados en zonas con alto potencial, certeza jurídica y acompañamiento experto de principio a fin.
          </p>

          <div className="bg-white p-3 rounded-2xl shadow-2xl max-w-3xl flex flex-col md:flex-row items-center gap-3 border border-white/20">
            <div className="flex-1 w-full px-3">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Ubicación</span>
              <input 
                type="text" 
                placeholder="¿Dónde buscas tu lote? (ej. Balancán, Tabasco)" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-sm font-semibold text-[#12382F] focus:outline-none bg-transparent"
              />
            </div>
            <button className="w-full md:w-auto bg-[#17382D] text-white font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-[#12382F] transition-colors flex items-center justify-center gap-2">
              Buscar terrenos ➔
            </button>
          </div>
        </div>
      </div>

      {/* 2. LO MÁS BUSCADO / DESTACADOS */}
      <section id="destacados" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#17382D] block mb-1">
              LO MÁS BUSCADO
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#12382F]">
              Elige dónde echar raíces
            </h2>
          </div>
          <a href="#catalogo" className="text-xs font-bold text-[#17382D] hover:underline flex items-center gap-1">
            Ver catálogo completo ➔
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROPERTIES.slice(0, 3).map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              onClick={() => setSelectedProperty(property)} 
            />
          ))}
        </div>
      </section>

      {/* 3. SECCIÓN DE CONFIANZA */}
      <section id="nosotros" className="bg-[#17382D] text-white py-20 px-6 my-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#D8EF8B] text-xs font-bold uppercase tracking-widest block mb-2">
              COMPRA CON CONFIANZA
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
              Un terreno seguro. Una decisión que trasciende.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#D8EF8B]" />
              <h3 className="font-bold text-base">Certeza jurídica</h3>
              <p className="text-xs text-slate-300">Verificamos la documentación y el historial de cada propiedad.</p>
            </div>
            <div className="space-y-2">
              <MapPin className="w-8 h-8 text-[#D8EF8B]" />
              <h3 className="font-bold text-base">Ubicaciones con futuro</h3>
              <p className="text-xs text-slate-300">Seleccionamos zonas con conectividad, crecimiento y plusvalía.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CATÁLOGO COMPLETO DE PROPIEDADES */}
      <section id="catalogo" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              CATÁLOGO COMPLETO
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#12382F]">
              Propiedades Disponibles
            </h2>
          </div>

          <span className="self-start md:self-auto bg-[#D8EF8B] text-[#12382F] font-bold text-xs px-4 py-2 rounded-full">
            {filteredProperties.length} propiedades encontradas
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-8 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
          <span className="text-xs font-bold text-[#12382F] flex items-center gap-1.5 mr-2">
            <Filter className="w-4 h-4 text-[#17382D]" /> Filtrar por:
          </span>
          {['Todos', 'Terreno', 'Casa', 'Departamento'].map((tipo) => (
            <button
              key={tipo}
              onClick={() => setFilterType(tipo)}
              className={`text-xs font-bold px-4 py-2 rounded-full transition-all ${
                filterType === tipo 
                  ? 'bg-[#17382D] text-white shadow-sm' 
                  : 'bg-[#F7F6F1] text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tipo}s
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              onClick={() => setSelectedProperty(property)} 
            />
          ))}
        </div>
      </section>

      {/* 5. CÓMO COMPRAR / ATENCIÓN PROFESIONAL DEL LIC. GUILLERMO */}
      <section id="como-comprar" className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-[#17382D] rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 text-white border border-[#D8EF8B]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Foto de Perfil con Marco Dorado */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-2 rounded-3xl border-2 border-amber-400/80 bg-[#12382F] shadow-xl max-w-xs w-full">
                <img 
                  src={licFoto} 
                  alt="Guillermo Enrique Ramírez García" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#17382D]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-400/50 text-[10px] font-bold uppercase tracking-wider text-amber-300 text-center whitespace-nowrap">
                  ☀️ ATENCIÓN CERTIFICADA • Balancán, Tabasco
                </div>
              </div>
            </div>

            {/* Información del Licenciado */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-[#D8EF8B] text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4" /> ASESORÍA Y ATENCIÓN PERSONALIZADA
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                  Guillermo Enrique Ramírez García
                </h2>
              </div>

              <blockquote className="text-slate-200 text-sm sm:text-base leading-relaxed italic border-l-4 border-[#D8EF8B] pl-4">
                "Nuestra misión en Inmobiliaria Ramírez es brindarte la máxima certeza jurídica y acompañamiento transparente para que encuentres la propiedad ideal con total tranquilidad y calidez humana."
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#D8EF8B]" />
                  <div>
                    <h4 className="font-bold text-xs">Atención Profesional</h4>
                    <p className="text-[11px] text-slate-300">Acompañamiento en todo el proceso de compra</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-[#D8EF8B]" />
                  <div>
                    <h4 className="font-bold text-xs">Ubicación Local</h4>
                    <p className="text-[11px] text-slate-300">Cobertura completa en Balancán, Tabasco</p>
                  </div>
                </div>
              </div>

              {/* Botón directo WhatsApp */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="https://wa.me/529618130385?text=Hola%20Lic.%20Guillermo,%20me%20gustaría%20agendar%20una%20asesoría%20sobre%20los%20terrenos" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-[#D8EF8B] hover:bg-[#c8e274] text-[#12382F] font-bold text-sm px-8 py-3.5 rounded-full transition-all flex items-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-5 h-5" /> Agendar Directo con Guillermo
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-serif font-bold text-[#17382D]">INMOBILIARIA RAMÍREZ</span>
          <p>© 2026 INMOBILIARIA RAMÍREZ. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* MODAL DE PROPIEDAD */}
      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </div>
  );
}