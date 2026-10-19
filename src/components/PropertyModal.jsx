import React from 'react';
import { GaleriaMultimedia } from './GaleriaMultimedia';
import { X, MapPin, CheckCircle2, MessageSquare, Phone, Navigation } from 'lucide-react';

export const PropertyModal = ({ property, onClose }) => {
  // Coordenadas por defecto (Villahermosa/Tabasco) si la propiedad no trae latitud/longitud
  const lat = property.ubicacion?.latitud || property.latitud || 17.9868;
  const lng = property.ubicacion?.longitud || property.longitud || -92.9303;
  const direccionTexto = property.location || property.ubicacion?.direccion || 'Tabasco, México';

  return (
    <div className="fixed inset-0 z-50 bg-[#12382F]/70 backdrop-blur-sm flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto border border-slate-100">
        
        {/* Botón de Cierre */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-30 bg-white/90 hover:bg-white p-2.5 rounded-full text-[#12382F] shadow-md transition-all hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Galería Multimedia (Fotos y Videos) */}
        <GaleriaMultimedia 
          imagenes={property.imagenes || property.images || []} 
          videos={property.videos || []} 
        />

        <div className="p-6 sm:p-8">
          {/* Encabezado del Modal */}
          <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#D8EF8B] text-[#12382F] mb-2">
                {property.type || 'Inmueble'} • {property.category || 'Disponible'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#12382F]">
                {property.title || property.titulo}
              </h2>
              <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-1">
                <MapPin className="w-4 h-4 text-[#17382D]" />
                <span>{direccionTexto}</span>
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[#12382F]">
              {typeof property.price === 'number' 
                ? `$${property.price.toLocaleString('es-MX')} MXN` 
                : property.price || `$${property.precio}`}
            </div>
          </div>

          {/* Ficha de Detalles (Superficie, Recámaras, Baños) */}
          <div className="grid grid-cols-3 gap-4 py-4 my-6 border-y border-slate-100 text-center bg-[#F7F6F1] rounded-2xl p-4">
            {property.bedrooms > 0 && (
              <div>
                <span className="text-[11px] text-slate-400 block font-semibold uppercase">Recámaras</span>
                <span className="text-base font-bold text-[#12382F]">{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div>
                <span className="text-[11px] text-slate-400 block font-semibold uppercase">Baños</span>
                <span className="text-base font-bold text-[#12382F]">{property.bathrooms}</span>
              </div>
            )}
            <div>
              <span className="text-[11px] text-slate-400 block font-semibold uppercase">Superficie</span>
              <span className="text-base font-bold text-[#12382F]">{property.area || property.superficie || '300 m²'}</span>
            </div>
          </div>

          {/* Descripción */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-[#12382F] mb-2 uppercase tracking-wider">Descripción del inmueble</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{property.description || property.descripcion}</p>
          </div>

          {/* Características */}
          {property.features && property.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-bold text-[#12382F] mb-3 uppercase tracking-wider">Características principales</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#12382F] bg-[#F7F6F1] p-2.5 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-[#17382D]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MAPA INTERACTIVO DE GOOGLE MAPS */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-[#12382F] uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#17382D]" /> Ubicación en el Mapa
              </h3>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#17382D] hover:underline flex items-center gap-1"
              >
                <Navigation className="w-3.5 h-3.5" /> Abrir en Google Maps ➔
              </a>
            </div>

            {/* Visualizador Embed del Mapa */}
            <div className="w-full h-60 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
              <iframe
                title="Ubicación Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
              ></iframe>
            </div>
          </div>

          {/* Asesor y Botones de Contacto */}
          <div className="bg-[#17382D] text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-[10px] text-[#D8EF8B] font-bold uppercase tracking-wider">Asesor Inmobiliario Asignado</p>
              <p className="text-base font-bold">{property.agent?.name || 'Inmobiliaria Ramírez'}</p>
            </div>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              <a 
                href={`https://wa.me/529618130385?text=Hola,%20me%20interesa%20obtener%20información%20sobre:%20${encodeURIComponent(property.title || property.titulo || 'Propiedad')}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#D8EF8B] text-[#12382F] hover:bg-[#c8e274] text-xs font-bold py-2.5 px-5 rounded-xl transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
              <a 
                href={`tel:${property.agent?.phone || '9618130385'}`}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2.5 px-5 rounded-xl transition-colors border border-white/10"
              >
                <Phone className="w-4 h-4" />
                Llamar
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};