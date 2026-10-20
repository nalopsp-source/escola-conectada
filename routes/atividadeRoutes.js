
const express = require("express");
const router = express.Router();
router.get("/teste-atividades", (req, res) => {
    res.json({ mensagem: "Rota de atividades funcionando!" });
});

const atividadeController = require("../controllers/atividadeController");

router.get("/atividades", atividadeController.listarAtividades);
router.get("/atividades/:id", atividadeController.buscarAtividadePorId);
router.post("/atividades", atividadeController.criarAtividade);
router.delete("/atividades/:id", atividadeController.excluirAtividade);

module.exports = router;
