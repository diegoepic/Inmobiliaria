
const propiedades_venta = [
    {
        nombre: 'Chalet en la montaña',
        src: './assets/img/Chalet en la montaña.jpg',
        descripcion: 'Chalet de lujo en la montaña con vistas espectaculares.',
        ubicacion: 'Montaña',
        habitaciones: 4,
        costo: 300000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa en la playa',
        src: './assets/img/casa_playa.jpg',
        descripcion: 'Casa moderna con acceso directo a la playa.',
        ubicacion: 'Playa',         
        habitaciones: 3,        
        costo: 450000,
        smoke: false,
        pets: true  
    },
    {
        nombre: 'Piso en el centro',
        src: './assets/img/piso_centro.jpg',
        descripcion: 'Piso amplio y luminoso en el centro de la ciudad.',
        ubicacion: 'Centro',
        habitaciones: 2,
        costo: 250000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Departamento en la playa',
        src: './assets/img/departamento_playa.jpg',
        descripcion: 'Departamento con vistas al mar y balcón privado.',
        ubicacion: 'Playa',
        habitaciones: 2,
        costo: 350000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Villa en el campo',
        src: './assets/img/villa_campo.jpg',
        descripcion: 'Villa rústica en el campo con gran terreno.',
        ubicacion: 'Campo',
        habitaciones: 5,
        costo: 500000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Ático en el centro',
        src: './assets/img/atico_centro.jpg',
        descripcion: 'Ático de lujo con terraza en el centro.',
        ubicacion: 'Centro',
        habitaciones: 3,
        costo: 600000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa en el lago',
        src: './assets/img/casa_lago.jpg',
        descripcion: 'Casa con vistas al lago y muelle privado.',
        ubicacion: 'Lago',
        habitaciones: 4,
        costo: 700000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Dúplex en la ciudad',
        src: './assets/img/duplex_ciudad.jpg',
        descripcion: 'Dúplex moderno en una zona tranquila de la ciudad.',
        ubicacion: 'Ciudad',
        habitaciones: 3,
        costo: 400000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Cabaña en el bosque',
        src: './assets/img/cabana_bosque.jpg',
        descripcion: 'Cabaña acogedora en el bosque con chimenea.',
        ubicacion: 'Bosque',
        habitaciones: 2,
        costo: 200000,
        smoke: true,
        pets: true
    }
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro',
        src: './assets/img/apartamento_centro.jpg',
        descripcion: 'Apartamento moderno en el centro de la ciudad.',
        ubicacion: 'Centro',
        habitaciones: 2,
        costo: 800,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en las afueras',
        src: './assets/img/casa_afueras.jpg',
        descripcion: 'Casa espaciosa con jardín en las afueras.',
        ubicacion: 'Afueras',
        habitaciones: 3,
        costo: 1200,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Estudio en la playa',
        src: './assets/img/estudio_playa.jpg',
        descripcion: 'Estudio acogedor con vista al mar.',
        ubicacion: 'Playa',
        habitaciones: 1,
        costo: 600,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Dúplex en el centro',
        src: './assets/img/duplex_centro.jpg',
        descripcion: 'Dúplex amplio y luminoso en el centro.',
        ubicacion: 'Centro',
        habitaciones: 3,
        costo: 1500,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Loft en el centro',
        src: './assets/img/loft_centro.jpg',
        descripcion: 'Loft moderno y espacioso en el centro.',
        ubicacion: 'Centro',
        habitaciones: 1,
        costo: 900,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en el campo',
        src: './assets/img/casa_campo.jpg',
        descripcion: 'Casa rústica en el campo con gran terreno.',
        ubicacion: 'Campo',
        habitaciones: 4,
        costo: 1000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento en la playa',
        src: './assets/img/apartamento_playa.jpg',
        descripcion: 'Apartamento con acceso directo a la playa.',
        ubicacion: 'Playa',
        habitaciones: 2,
        costo: 1100,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Estudio en el centro',
        src: './assets/img/estudio_centro.jpg',
        descripcion: 'Estudio pequeño y económico en el centro.',
        ubicacion: 'Centro',
        habitaciones: 1,
        costo: 500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en el lago',
        src: './assets/img/casa_lago1.jpg',
        descripcion: 'Casa con vistas al lago y muelle privado.',
        ubicacion: 'Lago',
        habitaciones: 3,
        costo: 1300,
        smoke: true,
        pets: true
    }
  
];
function renderProperties(propiedades, container_id, limit = propiedades.length) {
    const container = document.getElementById(container_id);
    let html = "";
    // Aqui el limit toma el valor de arreglo entero o si se puso un limite (index.php) toma el valor de 3
    const items = propiedades.slice(0, limit);
  
    items.forEach(propiedad => {
      // Lógica condicional para fumar
      const smokeHTML = propiedad.smoke
        ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
        : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
      // Lógica condicional para las mascotas
      const petsHTML = propiedad.pets
        ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
        : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`;
  
      html += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${propiedad.src}" class="card-img-top" alt="Imagen de ${propiedad.nombre}">
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
              <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
              ${smokeHTML}
              ${petsHTML}
            </div>
          </div>
        </div>
      `;
    });
  
    container.innerHTML = html;
  }
  
  // Una vez cargado el DOM, se renderizan las propiedades
  document.addEventListener("DOMContentLoaded", function() {
    // Si existe el contenedor para propiedades en venta
    if (document.getElementById("venta-container")) {
      // Si existe el contenedor para ventas se renderizan las propiedades en venta
      // si el body tiene clase "index", En index.html se muestrsn solo 3 propiedades (se manda el parametro limit como valor 3, si no )
      const ventaLimit = document.body.classList.contains("index") ? 3 : propiedades_venta.length;
      renderProperties(propiedades_venta, "venta-container", ventaLimit);
    }
  
    // Si existe el contenedor para propiedades en alquiler se renderizan los alquileres
    // Si el body tiene le clase "index", En index.html se muestran solo 3 propiedades (se manda el parametro limit como valor 3)
    if (document.getElementById("alquiler-container")) {
      const alquilerLimit = document.body.classList.contains("index") ? 3 : propiedades_alquiler.length;
      renderProperties(propiedades_alquiler, "alquiler-container", alquilerLimit);
    }
  });

   