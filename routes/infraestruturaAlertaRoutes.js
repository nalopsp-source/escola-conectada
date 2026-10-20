const express = require("express");

const router = express.Router();

const infraestruturaAlertaController = require("../controllers/infraestruturaAlertaController");

// GET - listar alertas
router.get(
    "/infraestrutura-alertas",
    infraestruturaAlertaController.listarAlertas
);

// POST - cadastrar alerta
router.post(
    "/infraestrutura-alertas",
    infraestruturaAlertaController.cadastrarAlerta
);

// PUT - atualizar alerta
router.put(
    "/infraestrutura-alertas/:id",
    infraestruturaAlertaController.atualizarAlerta
);

// DELETE - excluir alerta
router.delete(
    "/infraestrutura-alertas/:id",
    infraestruturaAlertaController.excluirAlerta
);

module.exports = router;
