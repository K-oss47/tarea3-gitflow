const express = require('express');
const router = express.Router();
const db = require('./db');

const ESTADOS_VALIDOS = ['pendiente', 'en_progreso', 'completada'];

// POST /tareas - crear una nueva tarea
router.post('/tareas', (req, res) => {
  const { titulo, descripcion, estado, prioridad } = req.body;
  if (!titulo) {
    return res.status(400).json({ error: 'titulo es obligatorio' });
  }
  const estadoFinal = estado || 'pendiente';
  if (!ESTADOS_VALIDOS.includes(estadoFinal)) {
    return res.status(400).json({ error: `estado inválido, use uno de: ${ESTADOS_VALIDOS.join(', ')}` });
  }
  const nuevaTarea = {
    id: Date.now().toString(),
    titulo,
    descripcion: descripcion || '',
    estado: estadoFinal,
    prioridad: prioridad || 'media'
  };
  db.get('tareas').push(nuevaTarea).write();
  res.status(201).json(nuevaTarea);
});

module.exports = router;
