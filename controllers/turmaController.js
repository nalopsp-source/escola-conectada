const conexao = require("../config/database");

function listarTurmas(req, res) {
    const sql = `
        SELECT *
        FROM turmas
    `;

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar turmas:", erro);

            return res.status(500).json({
                erro: "Erro ao buscar turmas"
            });
        }

        res.json(resultados);
    });
}

module.exports = {
    listarTurmas
};
