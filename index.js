const express = require("express");

const reviews = [
      {
        title: "Muy cordiales",
        info: "El servicio fue muy puntual y coordial, el personal se identifico adecuadamente y terminaron a la hora pactada, próximamente volveré a contactarlos",
        client: "Pedro Becerra",
        img: "https://randomuser.me/api/portraits/men/56.jpg",
        reviewid: 1,
        rate: "⭐⭐⭐⭐⭐",
      },
      {
        title: "¡Son muy puntuales!",
        info: "Llevo 2 meses contratando el servicio mensual de Clens y estoy encantado, agendo los días con anticipación el primer día del mes y siempre llegan puntuales",
        client: "María Manuela",
        img: "https://randomuser.me/api/portraits/women/54.jpg",
        reviewid: 2,
        rate: "⭐⭐⭐⭐⭐",
      },
      {
        title: "Muy cordiales",
        info: "Me gusta Clens por que su limpieza es bastante detallada y los chicos no tienen problemas en ayudarme con cualquier cosa extra que les pida acorde al servicio contratado",
        client: "Manuel Maldonado",
        img: "https://randomuser.me/api/portraits/men/34.jpg",
        reviewid: 3,
        rate: "⭐⭐⭐⭐",
      },
      {
        title: "Muy cordiales",
        info: "Me gusta Clens por que su limpieza es bastante detallada y los chicos no tienen problemas en ayudarme con cualquier cosa extra que les pida acorde al servicio contratado",
        client: "Juan Ferrer",
        img: "https://randomuser.me/api/portraits/men/37.jpg",
        reviewid: 4,
        rate: "⭐⭐",
      },
      {
        title: "Muy cordiales",
        info: "Me gusta Clens por que su limpieza es bastante detallada y los chicos no tienen problemas en ayudarme con cualquier cosa extra que les pida acorde al servicio contratado",
        client: "Jorge Mamani",
        img: "https://randomuser.me/api/portraits/men/39.jpg",
        reviewid: 5,
        rate: "⭐⭐⭐",
      },
    ];

const services = [
      {
        title: "Cocinas",
        info: "Suministramos productos Biodegradables para la implementación de Programas de Limpieza y Desinfección.",
        img: "https://images.unsplash.com/photo-1567767326925-e2047bf469d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        serviceid: 1,
        items: [
          "Pisos",
          "Brillado en cromos",
          "Lunas",
          "Campana",
          "Desempolvar superficies",
          "Hornillas y lavaderos",
        ],
      },
      {
        title: "Baños",
        info: "Suministramos productos Biodegradables para la implementación de Programas de Limpieza y Desinfección y  productos para el cuidado de pisos, Higiene de Manos, limpieza y Desinfección de Baños.",
        img: "https://images.unsplash.com/flagged/photo-1556438758-84625859c6b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3274&q=80",
        serviceid: 2,
        items: [
          "Pisos",
          "Brillado en cromos",
          "Espejos",
          "Lunas de duchas",
          "Mayolicas",
          "Desempolvar gabinetes",
        ],
      },
      {
        title: "Salas",
        info: "Suministramos productos Biodegradables para la implementación de Programas de Limpieza y Desinfección y productos para el cuidado de pisos, Higiene de Manos, limpieza y Desinfección de zonas amplias como salas y salones.",
        img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        serviceid: 3,
        items: [
          "Pisos",
          "Brillado en cromos",
          "Lunas",
          "Limpieza muebles y tapiz",
          "Desempolvar superficies",
          "Desempolvar cortinas",
        ],
      },
      {
        title: "Habitaciones",
        info: "Suministramos productos Biodegradables para la implementación de Programas de Limpieza y Desinfección y productos para el cuidado de pisos, Higiene de Manos, limpieza y Desinfección de habitaciones y muebles.",
        img: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
        serviceid: 4,
        items: [
          "Pisos",
          "Cama",
          "Alfombras",
          "Cajones",
          "Limpieza muebles y tapiz",
          "Desempolvar cortinas",
        ],
      },
    ];

const orders = [
      {
        id: 1,
        number: "000001",
        date: "Miercoles 1 de Diciembre del 2021",
        precio: "$80",
        services: ["bathroom", "kitchen", "livingroom", "bedroom"],
      },
      {
        id: 2,
        number: "000002",
        date: "Jueves 2 de Diciembre del 2021",
        precio: "$40",
        services: ["bathroom", "kitchen"],
      },
      {
        id: 3,
        number: "000003",
        date: "Viernes 3 de Diciembre del 2021",
        precio: "$100",
        services: ["bathroom", "bathroom", "bedroom", "bedroom", "kitchen"],
      },
      {
        id: 4,
        number: "000004",
        date: "Sabado 4 de Diciembre del 2021",
        precio: "$60",
        services: ["bathroom", "livingroom", "kitchen"],
      },
    ];

const app = express();

// Create a server
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});
app.get("/api/reviews", (request, response) => {
  response.json(reviews);
});
app.get("/api/services", (request, response) => {
  response.json(services);
});
app.get("/api/orders", (request, response) => {
  response.json(orders);
});

const PORT = 8080;

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
