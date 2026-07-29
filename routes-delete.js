const express = require('express');
const router = express.Router();
const db = require('./db');

// DELETE /tareas/:id - eliminar una tarea
router.delete('/tareas/:id', (req, res) => {
  const tarea = db.get('tareas').find({ id: req.params.id }).value();
  if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
  db.get('tareas').remove({ id: req.params.id }).write();
  res.status(204).send();
});

module.exports = router;
