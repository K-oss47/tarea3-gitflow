const express = require('express');
const router = express.Router();
const db = require('./db');

// GET /tareas - listar todas las tareas
router.get('/tareas', (req, res) => {
  const tareas = db.get('tareas').value();
  res.json(tareas);
});

// GET /tareas/:id - obtener una tarea por id
router.get('/tareas/:id', (req, res) => {
  const tarea = db.get('tareas').find({ id: req.params.id }).value();
  if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json(tarea);
});

module.exports = router;
