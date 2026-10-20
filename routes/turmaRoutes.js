const express = require("express");
const router = express.Router();

const turmaController = require("../controllers/turmaController");

router.get("/turmas", turmaController.listarTurmas);

module.exports = router;
