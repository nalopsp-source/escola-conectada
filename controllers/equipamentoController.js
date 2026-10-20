const conexao = require("../config/database");

// LISTAR EQUIPAMENTOS
function listarEquipamentos(req, res) {
    const sql = `
        SELECT
            id_equipamento,
            tipo,
            patrimonio,
            status,
            localizacao
        FROM equipamentos
    `;

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar equipamentos:", erro.message);

            return res.status(500).json({
                erro: "Erro ao buscar equipamentos"
            });
        }

        res.json(resultados);
    });
}


// CADASTRAR EQUIPAMENTO
function cadastrarEquipamento(req, res) {

    const {
        tipo,
        patrimonio,
        status,
        localizacao
    } = req.body;

    const sql = `
        INSERT INTO equipamentos
        (
            tipo,
            patrimonio,
            status,
            localizacao
        )
        VALUES (?, ?, ?, ?)
    `;

    const valores = [
        tipo,
        patrimonio,
        status,
        localizacao
    ];

    conexao.query(sql, valores, (erro, resultado) => {

        if (erro) {
            console.error("Erro ao cadastrar equipamento:", erro.message);

            return res.status(500).json({
                erro: "Erro ao cadastrar equipamento"
            });
        }

        res.status(201).json({
            mensagem: "Equipamento cadastrado com sucesso!",
            id_equipamento: resultado.insertId
        });
    });
}


// ATUALIZAR EQUIPAMENTO
function atualizarEquipamento(req, res) {

    const { id } = req.params;

    const {
        tipo,
        patrimonio,
        status,
        localizacao
    } = req.body;

    const sql = `
        UPDATE equipamentos
        SET
            tipo = ?,
            patrimonio = ?,
            status = ?,
            localizacao = ?
        WHERE id_equipamento = ?
    `;

    const valores = [
        tipo,
        patrimonio,
        status,
        localizacao,
        id
    ];

    conexao.query(sql, valores, (erro, resultado) => {

        if (erro) {
            console.error("Erro ao atualizar equipamento:", erro.message);

            return res.status(500).json({
                erro: "Erro ao atualizar equipamento"
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: "Equipamento não encontrado"
            });
        }

        res.json({
            mensagem: "Equipamento atualizado com sucesso!"
        });
    });
}
// EXCLUIR EQUIPAMENTO
function excluirEquipamento(req, res) {

    const { id } = req.params;

    const sql = `
        DELETE FROM equipamentos
        WHERE id_equipamento = ?
    `;

    conexao.query(sql, [id], (erro, resultado) => {

        if (erro) {
            console.error("Erro ao excluir equipamento:", erro.message);

            return res.status(500).json({
                erro: "Erro ao excluir equipamento"
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: "Equipamento não encontrado"
            });
        }

        res.json({
            mensagem: "Equipamento excluído com sucesso!"
        });
    });
}
module.exports = {
    listarEquipamentos,
    cadastrarEquipamento,
    atualizarEquipamento,
    excluirEquipamento
};