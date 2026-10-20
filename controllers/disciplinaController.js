const conexao = require("../config/database");

function listarDisciplinas(req, res) {
    const sql = `
        SELECT *
        FROM disciplinas
    `;

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar disciplinas:", erro);

            return res.status(500).json({
                erro: "Erro ao buscar disciplinas"
            });
        }

        res.json(resultados);
    });
}

module.exports = {
    listarDisciplinas
};

