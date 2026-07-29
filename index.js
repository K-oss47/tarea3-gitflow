const express = require('express');
const app = express();
app.use(express.json());

const createRoutes = require('./routes-create');
const readRoutes = require('./routes-read');
const updateRoutes = require('./routes-update');
const deleteRoutes = require('./routes-delete');

app.use(createRoutes);
app.use(readRoutes);
app.use(updateRoutes);
app.use(deleteRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'ok', servicio: 'CRUD Gestión de Tareas' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));

module.exports = app;
