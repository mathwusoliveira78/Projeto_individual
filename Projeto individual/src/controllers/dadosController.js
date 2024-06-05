var dadosModel = require("../models/dadosModel");

function obterMediaParticipantes(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;

    dadosModel.mediaParticipantes(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log("Erro ao puxar a média dos participantes:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterPontuacaoParticipante(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;

    dadosModel.pontuacaoParticipante(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log("Erro ao puxar a média dos participantes:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    obterMediaParticipantes,
    obterPontuacaoParticipante
};