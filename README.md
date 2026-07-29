# CRUD Gestión de Tareas — Tarea 3 (Git y Git Flow)

API REST simple para gestionar tareas (título, descripción, estado, prioridad).

## Stack
- Node.js + Express
- lowdb (persistencia en JSON)

## Endpoints
- `POST /tareas` — crear tarea
- `GET /tareas` — listar tareas
- `GET /tareas/:id` — obtener tarea por id
- `PUT /tareas/:id` — actualizar tarea
- `DELETE /tareas/:id` — eliminar tarea

## Flujo de trabajo (Git Flow)
Ramas: `main`, `dev`, `qa` + 5 ramas de trabajo:
- `feature/create-tarea`
- `feature/read-tareas`
- `feature/update-tarea`
- `feature/delete-tarea`
- `hotfix/fix-estado-validation`

Cada una genera 3 Pull Requests (hacia `dev`, `qa` y `main`), para un total de 15 PRs cerrados/mergeados.

## Cómo levantar el proyecto
```
npm install
node index.js
```
