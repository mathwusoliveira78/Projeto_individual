var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.post("/mediaParticipantes", function(req, res) {
    dadosController.obterMediaParticipantes(req, res);
});

router.post("/pontuacaoParticipante", function(req, res) {
    dadosController.obterPontuacaoParticipante(req, res);
});

router.post("/capitaoMaisEscolhido", function(req, res) {
    dadosController.obterCapitaoMaisEscolhido(req, res);
});

router.post("/capitaoMenosEscolhido", function(req, res) {
    dadosController.obterCapitaoMenosEscolhido(req, res);
});

router.post("/rankCapitao", function(req, res) {
    dadosController.obterRankCapitao(req, res);
});


module.exports = router;