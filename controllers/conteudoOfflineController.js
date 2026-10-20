const conexao = require("../config/database");

// LISTAR conteúdos offline
function listarConteudosOffline(req, res) {
    const sql = `
        SELECT
            c.id_conteudo,
            c.id_aula,
            a.titulo AS aula,
            c.nome_arquivo,
            c.tipo_arquivo,
            c.tamanho_mb,
            c.url_arquivo,
            c.disponivel_offline
        FROM conteudos_offline c
        INNER JOIN aulas a
            ON c.id_aula = a.id_aula
    `;

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar conteúdos offline:", erro.message);

            return res.status(500).json({
                erro: "Erro ao buscar conteúdos offline"
            });
        }

        res.json(resultados);
    });
}


// CADASTRAR conteúdo offline
function cadastrarConteudoOffline(req, res) {

    const {
        id_aula,
        nome_arquivo,
        tipo_arquivo,
        tamanho_mb,
        url_arquivo,
        disponivel_offline
    } = req.body;

    const sql = `
        INSERT INTO conteudos_offline
        (
            id_aula,
            nome_arquivo,
            tipo_arquivo,
            tamanho_mb,
            url_arquivo,
            disponivel_offline
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const valores = [
        id_aula,
        nome_arquivo,
        tipo_arquivo,
        tamanho_mb,
        url_arquivo,
        disponivel_offline ?? 1
    ];

    conexao.query(sql, valores, (erro, resultado) => {

        if (erro) {
            console.error("Erro ao cadastrar conteúdo offline:", erro.message);

            return res.status(500).json({
                erro: "Erro ao cadastrar conteúdo offline"
            });
        }

        res.status(201).json({
            mensagem: "Conteúdo offline cadastrado com sucesso!",
            id_conteudo: resultado.insertId
        });
    });
}


module.exports = {
    listarConteudosOffline,
    cadastrarConteudoOffline
};
