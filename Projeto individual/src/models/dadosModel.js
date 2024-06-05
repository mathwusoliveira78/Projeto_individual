var database = require("../database/config");

function mediaParticipantes(fkUsuario) {
    var instrucaoSql = `SELECT AVG(pontuacao) AS mediaUsuarios from resultado_game;`;
    console.log('Puxando a média dos participantes' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pontuacaoParticipante(fkUsuario) {
    var instrucaoSql = `SELECT pontuacao from resultado_game WHERE fkUsuario = ${fkUsuario} LIMIT 1;`;
    console.log('Puxando a pontuacao do participante' + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mediaParticipantes,
    pontuacaoParticipante
};