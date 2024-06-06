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
            console.log("Erro ao puxar a pontuacao dos participantes:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterCapitaoMaisEscolhido(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;

    dadosModel.capitaoMaisEscolhido(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log("Erro ao puxar a capitao dos participantes:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterCapitaoMenosEscolhido(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;

    dadosModel.capitaoMenosEscolhido(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log("Erro ao puxar a capitao menos dos participantes:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterRankCapitao(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;

    dadosModel.rankCapitao(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log("Erro ao puxar a capitao menos dos participantes:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    obterMediaParticipantes,
    obterPontuacaoParticipante,
    obterCapitaoMaisEscolhido,
    obterCapitaoMenosEscolhido,
    obterRankCapitao
};