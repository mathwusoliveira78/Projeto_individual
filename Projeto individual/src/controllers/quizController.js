var quizModel = require("../models/quizModel");

function registrarDados(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkGame = req.body.fkGameServer;
    var pontuacao = req.body.qtdAcertosServer;
    var capitao = req.body.capitaoServer

    quizModel.puxarUltimoID(fkUsuario)
        .then(function (resultado) {
            var idResultadoGame = resultado[0].idResultadoGame;

            if (idResultadoGame == undefined) {
                idResultadoGame = 1;
            } else {
                idResultadoGame ++
            }

            return quizModel.registrar(idResultadoGame, fkUsuario, fkGame, pontuacao, capitao);
        })
        .then(function (resultado) {
            res.status(203).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao inserir dados: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    registrarDados
};
