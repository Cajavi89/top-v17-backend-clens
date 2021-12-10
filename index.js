const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const reviews = [
  {
    title: "Muy cordiales",
    info: "El servicio fue muy puntual y coordial, el personal se identifico adecuadamente y terminaron a la hora pactada, próximamente volveré a contactarlos",
    client: "Pedro Becerra",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
    id: 1,
    rate: "⭐⭐⭐⭐⭐",
  },
  {
    title: "¡Son muy puntuales!",
    info: "Llevo 2 meses contratando el servicio mensual de Clens y estoy encantado, agendo los días con anticipación el primer día del mes y siempre llegan puntuales",
    client: "María Manuela",
    img: "https://randomuser.me/api/portraits/women/54.jpg",
    id: 2,
    rate: "⭐⭐⭐⭐⭐",
  },
  {
    title: "Muy cordiales",
    info: "Me gusta Clens por que su limpieza es bastante detallada y los chicos no tienen problemas en ayudarme con cualquier cosa extra que les pida acorde al servicio contratado",
    client: "Manuel Maldonado",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    id: 3,
    rate: "⭐⭐⭐⭐",
  },
  {
    title: "Muy cordiales",
    info: "Me gusta Clens por que su limpieza es bastante detallada y los chicos no tienen problemas en ayudarme con cualquier cosa extra que les pida acorde al servicio contratado",
    client: "Juan Ferrer",
    img: "https://randomuser.me/api/portraits/men/37.jpg",
    id: 4,
    rate: "⭐⭐",
  },
  {
    title: "Muy cordiales",
    info: "Me gusta Clens por que su limpieza es bastante detallada y los chicos no tienen problemas en ayudarme con cualquier cosa extra que les pida acorde al servicio contratado",
    client: "Jorge Mamani",
    img: "https://randomuser.me/api/portraits/men/39.jpg",
    id: 5,
    rate: "⭐⭐⭐",
  },
];

const services = [
  {
    title: "Cocinas",
    info: "Suministramos productos Biodegradables para la implementación de Programas de Limpieza y Desinfección.",
    img: "https://images.unsplash.com/photo-1567767326925-e2047bf469d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// GET /
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

// POST
const generateId = (route) => {
  const maxId = route.length > 0 ? Math.max(...route.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.post("/api/reviews", (request, response) => {
  const review = request.body;
  if (!review.title) {
    return response.status(400).json({ error: "content missing" });
  }
  response.status(201).json({ ...review, id: generateId(reviews) });
});

app.post("/api/services", (request, response) => {
  const service = request.body;
  if (!service.title) {
    return response.status(400).json({ error: "content missing" });
  }
  response.status(201).json({ ...service, id: generateId(services) });
});

app.post("/api/orders", (request, response) => {
  const order = request.body;
  if (!order.services) {
    return response.status(400).json({ error: "content missing" });
  }
  response.status(201).json({ ...order, id: generateId(orders) });
});

// GET /api/****/:id
// Get por id
app.get("/api/reviews", (request, response) => {
  response.json(reviews);
});
app.get("/api/reviews/:id", (request, response) => {
  const id = Number(request.params.id);
  const review = reviews.find((review) => review.id === id);
  response.json(review);
  if (!note) {
    response.status(404).json({ error: `Review with id ${id} not found` });
  }
  response.json(review);
});
app.get("/api/services", (request, response) => {
  response.json(services);
});
app.get("/api/services/:id", (request, response) => {
  const id = Number(request.params.id);
  const service = services.find((service) => service.id === id);
  if (!service) {
    response.status(404).json({ error: `Service with id ${id} not found` });
  }
  response.json(service);
});
app.get("/api/orders", (request, response) => {
  response.json(orders);
});
app.get("/api/orders/:id", (request, response) => {
  const id = Number(request.params.id);
  const order = orders.find((order) => order.id === id);
  if (!order) {
    response.status(404).json({ error: `Order with id ${id} not found` });
  }
  response.json(order);
});

// DELETE /api/****/:id
// Eliminando por id
app.delete("/api/reviews/:id", (request, response) => {
  const id = Number(request.params.id);
  const reviewToRemove = reviews.filter((review) => review.id === id);
  return response.status(204).end();
});

app.delete("/api/services/:id", (request, response) => {
  const id = Number(request.params.id);
  const serviceToRemove = services.filter((service) => service.id === id);
  return response.status(204).end();
});

app.delete("/api/orders/:id", (request, response) => {
  const id = Number(request.params.id);
  const orderToRemove = orders.filter((order) => order.id === id);
  return response.status(204).end();
});

const PORT = 8080;

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
