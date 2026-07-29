const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', servicio: 'CRUD Gestión de Tareas' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));

module.exports = app;
