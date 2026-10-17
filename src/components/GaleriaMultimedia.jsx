import React, { useState } from 'react';

// Fíjate bien que lleve el "export const" al inicio:
export const GaleriaMultimedia = ({ imagenes = [], videos = [] }) => {
  const elementos = [
    ...imagenes.map(url => ({ tipo: 'imagen', url })),
    ...videos.map(url => ({ tipo: 'video', url }))
  ];

  const [indiceActual, setIndiceActual] = useState(0);

  if (elementos.length === 0) {
    return (
      <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-500 rounded-t-2xl">
        Sin contenido multimedia disponible
      </div>
    );
  }

  const siguiente = () => {
    setIndiceActual((prev) => (prev + 1) % elementos.length);
  };

  const anterior = () => {
    setIndiceActual((prev) => (prev - 1 + elementos.length) % elementos.length);
  };

  const actual = elementos[indiceActual];

  return (
    <div className="relative w-full h-80 bg-black rounded-t-2xl overflow-hidden shadow-inner">
      {actual.tipo === 'imagen' ? (
        <img 
          src={actual.url} 
          alt="Propiedad" 
          className="w-full h-full object-cover transition-all duration-300"
        />
      ) : (
        <video 
          src={actual.url} 
          controls 
          className="w-full h-full object-cover"
        />
      )}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
        {indiceActual + 1} / {elementos.length}
      </div>

      {elementos.length > 1 && (
        <>
          <button 
            onClick={anterior} 
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md transition-all"
          >
            ‹
          </button>
          <button 
            onClick={siguiente} 
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md transition-all"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};