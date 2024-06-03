var database = require("../database/config");

function puxarUltimoID(fkUsuario) {
    var instrucaoSql = `
        SELECT MAX(idResultadoGame) AS idResultadoGame FROM resultado_game WHERE fkUsuario = ${fkUsuario};
    `;
    console.log('Puxando o último idResultadoGame: ' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrar(idResultadoGame, fkUsuario, fkGame, pontuacao, capitao) {
    var instrucaoSql = `
        INSERT INTO resultado_game (idResultadoGame, fkUsuario, fkGame, pontuacao, capitao)
        VALUES (${idResultadoGame}, ${fkUsuario}, ${fkGame}, ${pontuacao}, ${capitao});
    `;
    console.log('Registrando dados da tentativa do quiz: ' + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    puxarUltimoID
};