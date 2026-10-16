import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

export const PropertyCard = ({ property, onClick }) => {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
          property.type === 'Venta' ? 'bg-blue-900 text-white' : 'bg-amber-500 text-blue-950'
        }`}>
          {property.type}
        </span>
        <span className="absolute top-4 right-4 bg-slate-900/70 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full font-medium">
          {property.category}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xl font-extrabold text-blue-950 mb-1">
            {property.price}
          </div>
          <h3 className="font-bold text-slate-800 text-base mb-2 line-clamp-1 group-hover:text-blue-900 transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
            <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-slate-600 text-xs font-medium">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4 text-slate-400" />
              <span>{property.bedrooms} hab.</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4 text-slate-400" />
              <span>{property.bathrooms} baños</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4 text-slate-400" />
            <span>{property.area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};