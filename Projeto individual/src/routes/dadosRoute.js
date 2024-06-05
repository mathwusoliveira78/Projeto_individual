var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.post("/mediaParticipantes", function(req, res) {
    dadosController.obterMediaParticipantes(req, res);
});

router.post("/pontuacaoParticipante", function(req, res) {
    dadosController.obterPontuacaoParticipante(req, res);
});

module.exports = router;