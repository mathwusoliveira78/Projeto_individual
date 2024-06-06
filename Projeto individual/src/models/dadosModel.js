var database = require("../database/config");

function mediaParticipantes(fkUsuario) {
    var instrucaoSql = `SELECT ROUND(AVG(pontuacao)) AS mediaUsuarios from resultado_game;`;
    console.log('Puxando a média dos participantes' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pontuacaoParticipante(fkUsuario) {
    var instrucaoSql = `SELECT pontuacao from resultado_game WHERE fkUsuario = ${fkUsuario} ORDER BY idResultadoGame DESC LIMIT 1;`;
    console.log('Puxando a pontuacao do participante' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function capitaoMaisEscolhido(fkUsuario) {
    var instrucaoSql = `SELECT capitao, COUNT(capitao) AS frequencia FROM resultado_game GROUP BY capitao ORDER BY frequencia DESC LIMIT 1;`;
    console.log('Puxando a capitao mais escolhido' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function capitaoMenosEscolhido(fkUsuario) {
    var instrucaoSql = `SELECT capitao AS menos, COUNT(capitao) AS frequencia FROM resultado_game GROUP BY capitao ORDER BY frequencia ASC LIMIT 1;`;
    console.log('Puxando a capitao mais escolhido' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankCapitao(fkUsuario) {
    var instrucaoSql = `SELECT capitao AS escolhidos, COUNT(capitao) AS frequencia FROM resultado_game GROUP BY capitao ORDER BY frequencia DESC LIMIT 3;`;
    console.log('Puxando a capitao mais escolhido' + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mediaParticipantes,
    pontuacaoParticipante,
    capitaoMaisEscolhido,
    capitaoMenosEscolhido,
    rankCapitao
};