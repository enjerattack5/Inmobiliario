const API_URL = 'http://localhost:4000/api/propiedades';

// Obtener todas las propiedades de la base de datos
export const obtenerPropiedades = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener propiedades:', error);
    return [];
  }
};

// Guardar una nueva propiedad desde el formulario de administrador
export const crearPropiedad = async (propiedadData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(propiedadData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear propiedad:', error);
  }
};