const conexao = require("../config/database");

// LISTAR ALERTAS
function listarAlertas(req, res) {

    const sql = `
        SELECT
            id_alerta,
            id_equipamento,
            id_usuario,
            categoria,
            descricao,
            prioridade,
            status,
            data_abertura
        FROM infraestrutura_alertas
    `;

    conexao.query(sql, (erro, resultados) => {

        if (erro) {
            console.error("Erro ao buscar alertas:", erro.message);

            return res.status(500).json({
                erro: "Erro ao buscar alertas"
            });
        }

        res.json(resultados);
    });
}


// CADASTRAR ALERTA
function cadastrarAlerta(req, res) {

    const {
        id_equipamento,
        id_usuario,
        categoria,
        descricao,
        prioridade,
        status
    } = req.body;

    const sql = `
        INSERT INTO infraestrutura_alertas
        (
            id_equipamento,
            id_usuario,
            categoria,
            descricao,
            prioridade,
            status
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const valores = [
        id_equipamento,
        id_usuario,
        categoria,
        descricao,
        prioridade,
        status
    ];

    conexao.query(sql, valores, (erro, resultado) => {

        if (erro) {
            console.error("Erro ao cadastrar alerta:", erro.message);

            return res.status(500).json({
                erro: "Erro ao cadastrar alerta"
            });
        }

        res.status(201).json({
            mensagem: "Alerta cadastrado com sucesso!",
            id_alerta: resultado.insertId
        });
    });
}


// ATUALIZAR ALERTA
function atualizarAlerta(req, res) {

    const { id } = req.params;

    const {
        id_equipamento,
        id_usuario,
        categoria,
        descricao,
        prioridade,
        status
    } = req.body;

    const sql = `
        UPDATE infraestrutura_alertas
        SET
            id_equipamento = ?,
            id_usuario = ?,
            categoria = ?,
            descricao = ?,
            prioridade = ?,
            status = ?
        WHERE id_alerta = ?
    `;

    const valores = [
        id_equipamento,
        id_usuario,
        categoria,
        descricao,
        prioridade,
        status,
        id
    ];

    conexao.query(sql, valores, (erro, resultado) => {

        if (erro) {
            console.error("Erro ao atualizar alerta:", erro.message);

            return res.status(500).json({
                erro: "Erro ao atualizar alerta"
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: "Alerta não encontrado"
            });
        }

        res.json({
            mensagem: "Alerta atualizado com sucesso!"
        });
    });
}


// EXCLUIR ALERTA
function excluirAlerta(req, res) {

    const { id } = req.params;

    const sql = `
        DELETE FROM infraestrutura_alertas
        WHERE id_alerta = ?
    `;

    conexao.query(sql, [id], (erro, resultado) => {

        if (erro) {
            console.error("Erro ao excluir alerta:", erro.message);

            return res.status(500).json({
                erro: "Erro ao excluir alerta"
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                erro: "Alerta não encontrado"
            });
        }

        res.json({
            mensagem: "Alerta excluído com sucesso!"
        });
    });
}


module.exports = {
    listarAlertas,
    cadastrarAlerta,
    atualizarAlerta,
    excluirAlerta
};