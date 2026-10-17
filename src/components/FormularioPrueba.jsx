import React, { useState } from 'react';

export const FormularioPrueba = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    precio: '',
    tipoInmueble: 'Departamento',
    ubicacion: {
      direccion: 'Carrizal',
      ciudad: 'Villahermosa',
      estado: 'Tabasco'
    },
    // Nuevos campos para la galería
    imagenes: '',
    videos: ''
  });

  const [mensajeEstado, setMensajeEstado] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['direccion', 'ciudad', 'estado'].includes(name)) {
      setFormData({
        ...formData,
        ubicacion: { ...formData.ubicacion, [name]: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensajeEstado('Enviando...');

    // Convertimos los strings separados por comas en arreglos limpios para la Base de Datos
    const dataToSend = {
      ...formData,
      imagenes: formData.imagenes ? formData.imagenes.split(',').map(item => item.trim()) : [],
      videos: formData.videos ? formData.videos.split(',').map(item => item.trim()) : []
    };

    try {
      const response = await fetch('http://localhost:4000/api/propiedades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      const resultado = await response.json();

      if (response.ok) {
        setMensajeEstado('¡Éxito! Propiedad, fotos y videos guardados 🚀');
      } else {
        setMensajeEstado(`Error: ${resultado.mensaje || 'No se pudo guardar'}`);
      }
    } catch (error) {
      console.error('Error de red:', error);
      setMensajeEstado('Error de conexión con el servidor backend.');
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-lg font-bold text-blue-950 mb-4">Admin: Registrar Inmueble con Multimedia</h2>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input 
          type="text" name="titulo" placeholder="Título (Ej. Departamento Ejecutivo)" 
          value={formData.titulo} onChange={handleChange} required
          className="w-full p-2 border rounded-lg text-sm"
        />
        <input 
          type="number" name="precio" placeholder="Precio (Ej. 18000)" 
          value={formData.precio} onChange={handleChange} required
          className="w-full p-2 border rounded-lg text-sm"
        />
        <input 
          type="text" name="direccion" placeholder="Dirección / Ubicación exacta" 
          value={formData.ubicacion.direccion} onChange={handleChange} required
          className="w-full p-2 border rounded-lg text-sm"
        />
        
        {/* Campos Multimedia */}
        <textarea 
          name="imagenes" placeholder="URLs de Imágenes separadas por comas (,)" 
          value={formData.imagenes} onChange={handleChange}
          className="w-full p-2 border rounded-lg text-sm" rows="2"
        />
        <textarea 
          name="videos" placeholder="URLs de Videos separadas por comas (,)" 
          value={formData.videos} onChange={handleChange}
          className="w-full p-2 border rounded-lg text-sm" rows="2"
        />

        <textarea 
          name="descripcion" placeholder="Descripción de la propiedad..." 
          value={formData.descripcion} onChange={handleChange} required
          className="w-full p-2 border rounded-lg text-sm" rows="2"
        />

        <button type="submit" className="w-full bg-blue-900 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition-colors">
          Guardar Propiedad y Multimedia
        </button>
      </form>

      {mensajeEstado && <p className="mt-3 text-center text-sm font-medium text-amber-600">{mensajeEstado}</p>}
    </div>
  );
};