const ID_USUARIO = Number(sessionStorage.getItem("ID_USUARIO"));;
let idQuiz = 5000;

function fetchQuiz() {
    qtdAcertos = pontuacao;
    // Fetch para enviar os arquivos para o banco
    fetch(`quizRoute/registrar/${ID_USUARIO}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            fkGameServer: idQuiz,
            fkUsuarioServer: ID_USUARIO,
            qtdAcertosServer: qtdAcertos,
            capitaoServer: contadorPersonagem
        })
    }).then(res => {
        console.log(res);
    })
}