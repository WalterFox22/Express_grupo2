const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const integrantes = [
    { id: 1, nombre: "Adrian", apellido: "Cadena", edad: 20 },
    { id: 2, nombre: "Walter", apellido: "Cobacango", edad: 20 },
    { id: 3, nombre: "Alisson", apellido: "Viteri", edad: 23 },
    { id: 4, nombre: "Ariel", apellido: "Asqui", edad: 22 },
    { id: 5, nombre: "Jonathan", apellido: "Ramirez", edad: 21 },
    { id: 6, nombre: "Francis", apellido: "Aconda", edad: 21 },
    { id: 7, nombre: "Evelyn", apellido: "Guachamin", edad: 27 }
];

// Ruta GET para la información del grupo
app.get('/', (req, res) => {
    res.send("Landing page - Grupo #2");
});

// Ruta GET para la lista de integrantes del grupo
app.get('/integrantes', (req, res) => {
    res.json(integrantes);
});

// Ruta GET para obtener un integrante específico por ID
app.get('/integrantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const integrante = integrantes.find(i => i.id === id);
    if (integrante) {
        res.json(integrante);
    } else {
        res.status(404).send("Integrante no encontrado");
    }
});

// Ruta GET para mostrar un HTML con productos de computadores
app.get('/products', (req, res) => {
    res.send(`
        <h1>Catálogo de productos de computadores</h1>
        <ul>
            <li>Producto 1: Laptop Dell Inspiron - $800</li>
            <li>Producto 2: Monitor Samsung 24" - $150</li>
            <li>Producto 3: Teclado mecánico Logitech - $100</li>
            <li>Producto 4: Mouse inalámbrico Logitech - $50</li>
            <li>Producto 5: Disco Duro SSD 1TB - $120</li>
        </ul>
    `);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
