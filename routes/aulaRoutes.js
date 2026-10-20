const express = require("express");

const router = express.Router();

const aulaController = require("../controllers/aulaController");

// LISTAR aulas
router.get("/aulas", aulaController.listarAulas);

// CADASTRAR aula
router.post("/aulas", aulaController.cadastrarAula);

// EDITAR aula
router.put("/aulas/:id", aulaController.editarAula);

// EXCLUIR aula
router.delete("/aulas/:id", aulaController.excluirAula);

module.exports = router;
