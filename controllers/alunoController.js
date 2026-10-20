const conexao = require("../config/database");

function listarAlunos(req, res) {
    const sql = `
        SELECT *
        FROM alunos
    `;

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar alunos:", erro);

            return res.status(500).json({
                erro: "Erro ao buscar alunos"
            });
        }

        res.json(resultados);
    });
}

module.exports = {
    listarAlunos
};