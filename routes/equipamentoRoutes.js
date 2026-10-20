const express = require("express");

const router = express.Router();

const equipamentoController = require("../controllers/equipamentoController");

// GET - listar equipamentos
router.get(
    "/equipamentos",
    equipamentoController.listarEquipamentos
);

// POST - cadastrar equipamento
router.post(
    "/equipamentos",
    equipamentoController.cadastrarEquipamento
);

// PUT - atualizar equipamento
router.put(
    "/equipamentos/:id",
    equipamentoController.atualizarEquipamento
    
);
// DELETE - excluir equipamento
router.delete(
    "/equipamentos/:id",
    equipamentoController.excluirEquipamento
);

module.exports = router;