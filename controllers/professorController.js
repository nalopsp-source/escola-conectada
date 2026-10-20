const conexao = require("../config/database");

function listarProfessores(req, res) {
    const sql = `
        SELECT *
        FROM professores
    `;

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar professores:", erro);

            return res.status(500).json({
                erro: "Erro ao buscar professores"
            });
        }

        res.json(resultados);
    });
}

module.exports = {
    listarProfessores
};
