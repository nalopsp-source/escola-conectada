const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "escola_conectada",
    port: 3306
});

conexao.connect((erro) => {
    if (erro) {
        console.error("Erro ao conectar ao MySQL:", erro);
        return;
    }

    console.log("MySQL conectado com sucesso!");
});

module.exports = conexao;