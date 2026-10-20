const express = require("express");
const router = express.Router();

const alunoController = require("../controllers/alunoController");

router.get("/alunos", alunoController.listarAlunos);

module.exports = router;