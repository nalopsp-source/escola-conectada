const conexao = require("../config/database");

function listarMatriculas(req, res) {
    const sql = `
    SELECT
        m.id_matricula,
        a.id_aluno,
        u.nome AS aluno,
        t.id_turma,
        t.nome AS turma,
        t.ano_letivo,
        t.turno,
        m.data_matricula
    FROM matriculas m
    INNER JOIN alunos a ON m.id_aluno = a.id_aluno
    INNER JOIN usuarios u ON a.id_usuario = u.id_usuario
    INNER JOIN turmas t ON m.id_turma = t.id_turma
`;

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar matrículas:", erro);

            return res.status(500).json({
                erro: "Erro ao buscar matrículas"
            });
        }

        res.json(resultados);
    });
}

function cadastrarMatricula(req, res) {
    const { id_aluno, id_turma } = req.body;

    if (!id_aluno || !id_turma) {
        return res.status(400).json({
            erro: "id_aluno e id_turma são obrigatórios"
        });
    }

    const sql = `
        INSERT INTO matriculas (id_aluno, id_turma)
        VALUES (?, ?)
    `;

    conexao.query(sql, [id_aluno, id_turma], (erro, resultado) => {
        if (erro) {
            console.error("Erro ao cadastrar matrícula:", erro);

            return res.status(500).json({
                erro: "Erro ao cadastrar matrícula"
            });
        }

        res.status(201).json({
            mensagem: "Matrícula cadastrada com sucesso!",
            id_matricula: resultado.insertId
        });
    });
}

module.exports = {
    listarMatriculas,
    cadastrarMatricula
};

