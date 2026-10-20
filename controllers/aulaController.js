const conexao = require("../config/database");

function listarAulas(req, res) {
    const sql = `
        SELECT
            a.id_aula,
            t.nome AS turma,
            d.nome AS disciplina,
            u.nome AS professor,
            a.titulo,
            a.descricao,
            a.data_aula
        FROM aulas a
        INNER JOIN turmas t
            ON a.id_turma = t.id_turma
        INNER JOIN disciplinas d
            ON a.id_disciplina = d.id_disciplina
        INNER JOIN professores p
            ON a.id_professor = p.id_professor
        INNER JOIN usuarios u
            ON p.id_usuario = u.id_usuario
    `;

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar aulas:", erro);

            return res.status(500).json({
                erro: "Erro ao buscar aulas"
            });
        }

        res.json(resultados);
    });
}


function cadastrarAula(req, res) {
    const {
        id_turma,
        id_disciplina,
        id_professor,
        titulo,
        descricao,
        data_aula
    } = req.body;

    if (!id_turma || !id_disciplina || !id_professor) {
        return res.status(400).json({
            erro: "id_turma, id_disciplina e id_professor são obrigatórios"
        });
    }

    const sql = `
        INSERT INTO aulas (
            id_turma,
            id_disciplina,
            id_professor,
            titulo,
            descricao,
            data_aula
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            id_turma,
            id_disciplina,
            id_professor,
            titulo || null,
            descricao || null,
            data_aula || null
        ],
        (erro, resultado) => {
            if (erro) {
                console.error("Erro ao cadastrar aula:", erro);

                return res.status(500).json({
                    erro: "Erro ao cadastrar aula"
                });
            }

            res.status(201).json({
                mensagem: "Aula cadastrada com sucesso!",
                id_aula: resultado.insertId
            });
        }
    );
}


// EDITAR AULA
function editarAula(req, res) {
    const { id } = req.params;

    const {
        id_turma,
        id_disciplina,
        id_professor,
        titulo,
        descricao,
        data_aula
    } = req.body;

    if (!id_turma || !id_disciplina || !id_professor) {
        return res.status(400).json({
            erro: "id_turma, id_disciplina e id_professor são obrigatórios"
        });
    }

    const sql = `
        UPDATE aulas
        SET
            id_turma = ?,
            id_disciplina = ?,
            id_professor = ?,
            titulo = ?,
            descricao = ?,
            data_aula = ?
        WHERE id_aula = ?
    `;

    conexao.query(
        sql,
        [
            id_turma,
            id_disciplina,
            id_professor,
            titulo || null,
            descricao || null,
            data_aula || null,
            id
        ],
        (erro, resultado) => {
            if (erro) {
                console.error("Erro ao editar aula:", erro);

                return res.status(500).json({
                    erro: "Erro ao editar aula"
                });
            }

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    erro: "Aula não encontrada"
                });
            }

            res.json({
                mensagem: "Aula atualizada com sucesso!"
            });
        }
    );
}


// EXCLUIR AULA
function excluirAula(req, res) {
    const { id } = req.params;

    const sql = `
        DELETE FROM aulas
        WHERE id_aula = ?
    `;

    conexao.query(
        sql,
        [id],
        (erro, resultado) => {
            if (erro) {
                console.error("Erro ao excluir aula:", erro);

                return res.status(500).json({
                    erro: "Erro ao excluir aula"
                });
            }

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    erro: "Aula não encontrada"
                });
            }

            res.json({
                mensagem: "Aula excluída com sucesso!"
            });
        }
    );
}


module.exports = {
    listarAulas,
    cadastrarAula,
    editarAula,
    excluirAula
};