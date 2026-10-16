import React, { useState } from 'react';
import { MOCK_PROPERTIES } from './data/mockProperties';
import { Header } from './components/Header';
import { PropertyFilters } from './components/PropertyFilters';
import { PropertyCard } from './components/PropertyCard';
import { PropertyModal } from './components/PropertyModal';
import { Filter } from 'lucide-react';
import heroBg from './assets/hero.jpg'; // Revisa si la moviste a ./assets/sexo.jpeg

export default function App() {
  const [filterType, setFilterType] = useState('Todos');
  const [filterCategory, setFilterCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const resetFilters = () => {
    setFilterType('Todos');
    setFilterCategory('Todos');
    setSearchTerm('');
  };

  const filteredProperties = MOCK_PROPERTIES.filter((property) => {
    const matchesType = filterType === 'Todos' || property.type === filterType;
    const matchesCategory = filterCategory === 'Todos' || property.category === filterCategory;
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesCategory && matchesSearch;
  });

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative text-slate-800"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Capa oscura/superposición para mantener todo legible */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px] pointer-events-none"></div>

      {/* Contenido sobre el fondo */}
      <div className="relative z-10">
        <Header onResetFilters={resetFilters} />

        <PropertyFilters
          filterType={filterType}
          setFilterType={setFilterType}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex justify-between items-center mb-6">
            <p className="text-white text-sm font-medium">
              Mostrando <span className="font-bold text-amber-400">{filteredProperties.length}</span> inmuebles
            </p>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-12 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200">
              <Filter className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-700">No se encontraron propiedades</h3>
              <p className="text-slate-500 text-sm">Intenta ajustar los filtros de búsqueda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onClick={() => setSelectedProperty(property)}
                />
              ))}
            </div>
          )}
        </main>

        {selectedProperty && (
          <PropertyModal
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}
      </div>
    </div>
  );
}