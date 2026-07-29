const express = require('express');
const router = express.Router();
const db = require('./db');

// PUT /tareas/:id - actualizar una tarea existente
router.put('/tareas/:id', (req, res) => {
  const tarea = db.get('tareas').find({ id: req.params.id });
  if (!tarea.value()) return res.status(404).json({ error: 'Tarea no encontrada' });
  tarea.assign(req.body).write();
  res.json(tarea.value());
});

module.exports = router;
