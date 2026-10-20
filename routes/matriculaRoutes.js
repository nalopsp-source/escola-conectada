const express = require("express");
const router = express.Router();

const matriculaController = require("../controllers/matriculaController");

router.get("/matriculas", matriculaController.listarMatriculas);

router.post("/matriculas", matriculaController.cadastrarMatricula);

module.exports = router;

