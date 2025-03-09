
const propiedades_venta = [
    {
        nombre: 'Chalet en la montaña',
        src: 'images/chalet_montana.jpg',
        descripcion: 'Chalet de lujo en la montaña con vistas espectaculares.',
        ubicacion: 'Montaña',
        habitaciones: 4,
        costo: 300000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa en la playa',
        src: 'images/casa_playa.jpg',
        descripcion: 'Casa moderna con acceso directo a la playa.',
        ubicacion: 'Playa',
        habitaciones: 3,
        costo: 450000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Piso en el centro',
        src: 'images/piso_centro.jpg',
        descripcion: 'Piso amplio y luminoso en el centro de la ciudad.',
        ubicacion: 'Centro',
        habitaciones: 2,
        costo: 250000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Departamento en la playa',
        src: 'images/departamento_playa.jpg',
        descripcion: 'Departamento con vistas al mar y balcón privado.',
        ubicacion: 'Playa',
        habitaciones: 2,
        costo: 350000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Villa en el campo',
        src: 'images/villa_campo.jpg',
        descripcion: 'Villa rústica en el campo con gran terreno.',
        ubicacion: 'Campo',
        habitaciones: 5,
        costo: 500000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Ático en el centro',
        src: 'images/atico_centro.jpg',
        descripcion: 'Ático de lujo con terraza en el centro.',
        ubicacion: 'Centro',
        habitaciones: 3,
        costo: 600000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa en el lago',
        src: 'images/casa_lago.jpg',
        descripcion: 'Casa con vistas al lago y muelle privado.',
        ubicacion: 'Lago',
        habitaciones: 4,
        costo: 700000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Dúplex en la ciudad',
        src: 'images/duplex_ciudad.jpg',
        descripcion: 'Dúplex moderno en una zona tranquila de la ciudad.',
        ubicacion: 'Ciudad',
        habitaciones: 3,
        costo: 400000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Cabaña en el bosque',
        src: 'images/cabana_bosque.jpg',
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
        src: 'images/apartamento_centro.jpg',
        descripcion: 'Apartamento moderno en el centro de la ciudad.',
        ubicacion: 'Centro',
        habitaciones: 2,
        costo: 800,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en las afueras',
        src: 'images/casa_afueras.jpg',
        descripcion: 'Casa espaciosa con jardín en las afueras.',
        ubicacion: 'Afueras',
        habitaciones: 3,
        costo: 1200,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Estudio en la playa',
        src: 'images/estudio_playa.jpg',
        descripcion: 'Estudio acogedor con vista al mar.',
        ubicacion: 'Playa',
        habitaciones: 1,
        costo: 600,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Dúplex en el centro',
        src: 'images/duplex_centro.jpg',
        descripcion: 'Dúplex amplio y luminoso en el centro.',
        ubicacion: 'Centro',
        habitaciones: 3,
        costo: 1500,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Loft en el centro',
        src: 'images/loft_centro.jpg',
        descripcion: 'Loft moderno y espacioso en el centro.',
        ubicacion: 'Centro',
        habitaciones: 1,
        costo: 900,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en el campo',
        src: 'images/casa_campo.jpg',
        descripcion: 'Casa rústica en el campo con gran terreno.',
        ubicacion: 'Campo',
        habitaciones: 4,
        costo: 1000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento en la playa',
        src: 'images/apartamento_playa.jpg',
        descripcion: 'Apartamento con acceso directo a la playa.',
        ubicacion: 'Playa',
        habitaciones: 2,
        costo: 1100,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Estudio en el centro',
        src: 'images/estudio_centro.jpg',
        descripcion: 'Estudio pequeño y económico en el centro.',
        ubicacion: 'Centro',
        habitaciones: 1,
        costo: 500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en el lago',
        src: 'images/casa_lago1.jpg',
        descripcion: 'Casa con vistas al lago y muelle privado.',
        ubicacion: 'Lago',
        habitaciones: 3,
        costo: 1300,
        smoke: true,
        pets: true
    }
  
];

// Utilizar ciclos para recorrer el arreglo de con los objetos de propiedades y la
//interpolación y el innerHTML para generar templates y agregar la de las propiedades
//en su respectiva página HTML. (4 Puntos).
//4. Utilizar condicionales para realizar la lógica asociada en caso de que se permitan
//mascotas y fumar en la propiedad.
//(2 Puntos).
//5. En la página index.html, mostrar solo 3 propiedades en venta y 3 propiedades en
//alquiler. Tal como se muestra en la imagen 1, enlaza el botón a su respectiva página
//web para ver más propiedades. 

const propiedades_venta_section = document.querySelector('.propiedades-venta');
const propiedades_alquiler_section = document.querySelector('.propiedades-alquiler');


   