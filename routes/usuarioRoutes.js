const express = require("express");

const router = express.Router();

const usuarioController =
    require("../controllers/usuarioController");


// ============================================================
// LISTAR USUÁRIOS
// ============================================================

router.get(
    "/usuarios",
    usuarioController.listarUsuarios
);


// ============================================================
// CADASTRO DO PRÓPRIO ALUNO
// ============================================================

router.post(
    "/usuarios/aluno",
    usuarioController.cadastrarAluno
);


// ============================================================
// EXPORTAR ROTAS
// ============================================================

module.exports = router;