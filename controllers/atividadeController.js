
const conexao = require("../config/database");

// LISTAR TODAS AS ATIVIDADES
exports.listarAtividades = (req, res) => {
    const sql = `
        SELECT
            a.id_atividade,
            a.id_professor,
            a.id_disciplina,
            a.titulo,
            a.tipo,
            a.descricao,
            a.data_entrega,
            a.pontuacao,
            a.criado_em,
            d.nome AS disciplina
        FROM atividades a
        LEFT JOIN disciplinas d
            ON a.id_disciplina = d.id_disciplina
        ORDER BY a.criado_em DESC
    `;

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao listar atividades:", erro);
            return res.status(500).json({
                mensagem: "Erro ao buscar atividades."
            });
        }

        res.status(200).json(resultados);
    });
};

// BUSCAR UMA ATIVIDADE PELO ID
exports.buscarAtividadePorId = (req, res) => {
    const { id } = req.params;

    const sql = `
        SELECT
            a.id_atividade,
            a.id_professor,
            a.id_disciplina,
            a.titulo,
            a.tipo,
            a.descricao,
            a.data_entrega,
            a.pontuacao,
            a.criado_em,
            d.nome AS disciplina
        FROM atividades a
        LEFT JOIN disciplinas d
            ON a.id_disciplina = d.id_disciplina
        WHERE a.id_atividade = ?
    `;

    conexao.query(sql, [id], (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar atividade:", erro);
            return res.status(500).json({
                mensagem: "Erro ao buscar atividade."
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Atividade não encontrada."
            });
        }

        res.status(200).json(resultados[0]);
    });
};

// CADASTRAR UMA NOVA ATIVIDADE
exports.criarAtividade = (req, res) => {
    const {
        id_professor,
        id_disciplina,
        titulo,
        tipo,
        descricao,
        data_entrega,
        pontuacao
    } = req.body;

    if (!id_professor || !titulo || !tipo) {
        return res.status(400).json({
            mensagem: "Professor, título e tipo são obrigatórios."
        });
    }

    const sql = `
        INSERT INTO atividades (
            id_professor,
            id_disciplina,
            titulo,
            tipo,
            descricao,
            data_entrega,
            pontuacao
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const valores = [
        id_professor,
        id_disciplina || null,
        titulo.trim(),
        tipo,
        descricao || null,
        data_entrega || null,
        pontuacao ?? 10
    ];

    conexao.query(sql, valores, (erro, resultado) => {
        if (erro) {
            console.error("Erro ao cadastrar atividade:", erro);
            return res.status(500).json({
                mensagem: "Erro ao cadastrar atividade."
            });
        }

        res.status(201).json({
            mensagem: "Atividade cadastrada com sucesso!",
            id_atividade: resultado.insertId
        });
    });
};

// EXCLUIR UMA ATIVIDADE PELO ID
exports.excluirAtividade = (req, res) => {
    const { id } = req.params;

    conexao.query(
        "DELETE FROM atividades WHERE id_atividade = ?",
        [id],
        (erro, resultado) => {
            if (erro) {
                console.error("Erro ao excluir atividade:", erro);
                return res.status(500).json({
                    mensagem: "Erro ao excluir atividade."
                });
            }

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    mensagem: "Atividade não encontrada."
                });
            }

            res.status(200).json({
                mensagem: "Atividade excluída com sucesso!"
            });
        }
    );
};

