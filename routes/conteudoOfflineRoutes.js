const express = require("express");

const router = express.Router();

const conteudoOfflineController = require("../controllers/conteudoOfflineController");


// GET - listar conteúdos offline
router.get(
    "/conteudos-offline",
    conteudoOfflineController.listarConteudosOffline
);


// POST - cadastrar conteúdo offline
router.post(
    "/conteudos-offline",
    conteudoOfflineController.cadastrarConteudoOffline
);


module.exports = router;