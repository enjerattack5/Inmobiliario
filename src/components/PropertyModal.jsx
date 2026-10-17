import React from 'react';
import { GaleriaMultimedia } from './GaleriaMultimedia'; // Asegúrate de que esté importado
import { X, MapPin, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

export const PropertyModal = ({ property, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white p-2 rounded-full text-slate-700 shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* AQUÍ REEMPLAZAMOS EL BLOQUE ANTERIOR POR LA GALERÍA MULTIMEDIA */}
        <GaleriaMultimedia 
          imagenes={property.imagenes || property.images || []} 
          videos={property.videos || []} 
        />

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-900 mb-2">
                {property.type} - {property.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {property.title}
              </h2>
              <div className="flex items-center gap-1.5 text-slate-500 mt-1">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-blue-950">
              {property.price}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 my-6 border-y border-slate-100 text-center">
            {property.bedrooms > 0 && (
              <div>
                <span className="text-xs text-slate-400 block font-medium">Recámaras</span>
                <span className="text-lg font-bold text-slate-800">{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div>
                <span className="text-xs text-slate-400 block font-medium">Baños</span>
                <span className="text-lg font-bold text-slate-800">{property.bathrooms}</span>
              </div>
            )}
            <div>
              <span className="text-xs text-slate-400 block font-medium">Superficie</span>
              <span className="text-lg font-bold text-slate-800">{property.area}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-bold text-slate-900 mb-2">Descripción de la propiedad</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{property.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-base font-bold text-slate-900 mb-3">Características principales</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {property.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Asesor Inmobiliario</p>
              <p className="text-lg font-bold">{property.agent.name}</p>
            </div>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              <a 
                href={`https://wa.me/${property.agent.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
              <a 
                href={`tel:${property.agent.phone}`}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors"
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