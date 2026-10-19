import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';

export const PropertyCard = ({ property, onClick }) => {
  // Manejo de imagen principal proveniente de Cloudinary o arreglo local
  const imagenPrincipal = 
    (property.imagenes && property.imagenes.length > 0 && property.imagenes[0]) ||
    (property.images && property.images.length > 0 && property.images[0]) ||
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80';

  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Contenedor de la Imagen */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden p-3 pb-0">
          <div className="w-full h-full rounded-2xl overflow-hidden relative">
            <img 
              src={imagenPrincipal} 
              alt={property.titulo || property.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Etiqueta flotante superior */}
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#12382F] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {property.etiqueta || property.category || 'Destacado'}
            </span>
          </div>
        </div>

        {/* Detalles del Terreno */}
        <div className="p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#17382D] mb-1">
            {property.ubicacion?.ciudad || property.location || 'TABASCO'}
          </p>

          <h3 className="text-2xl font-serif font-bold text-[#12382F] mb-3 group-hover:text-[#17382D] transition-colors">
            {property.titulo || property.title}
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-4">
            <span className="inline-block text-[#17382D]">📐</span>
            <span>{property.superficie || property.area || '300 m²'}</span>
          </div>
        </div>
      </div>

      {/* Pie de Tarjeta: Precio y Botón Circular Verde Lima */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-50">
        <div>
          <span className="text-[10px] text-slate-400 block font-semibold uppercase">Desde</span>
          <span className="text-xl font-bold text-[#12382F]">
            {typeof property.precio === 'number' 
              ? `$${property.precio.toLocaleString('es-MX')} MXN` 
              : property.price || `$${property.precio}`}
          </span>
        </div>

        {/* Botón Circular Verde Lima */}
        <div className="w-10 h-10 rounded-full bg-[#D8EF8B] group-hover:bg-[#c8e274] text-[#12382F] flex items-center justify-center transition-all shadow-sm">
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};