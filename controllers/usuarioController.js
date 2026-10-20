const conexao = require("../config/database");

// ============================================================
// LISTAR USUÁRIOS
// ============================================================

function listarUsuarios(req, res) {

    const sql = `
        SELECT
            u.id_usuario,
            u.nome,
            u.email,
            u.tipo,
            u.ativo,
            u.data_criacao,
            a.ra AS rm
        FROM usuarios u
        LEFT JOIN alunos a
            ON a.id_usuario = u.id_usuario
        ORDER BY u.id_usuario DESC
    `;

    conexao.query(sql, (erro, resultados) => {

        if (erro) {

            console.error(
                "Erro ao buscar usuários:",
                erro
            );

            return res.status(500).json({
                erro: "Erro ao buscar usuários"
            });

        }

        res.json(resultados);

    });

}


// ============================================================
// CADASTRAR ALUNO
// ============================================================

function cadastrarAluno(req, res) {

    const {
        nome,
        email,
        senha,
        rm
    } = req.body;


    // ----------------------------------------------------------
    // VALIDAR CAMPOS
    // ----------------------------------------------------------

    if (
        !nome ||
        !email ||
        !senha ||
        !rm
    ) {

        return res.status(400).json({
            erro: "Nome, e-mail, senha e RM são obrigatórios."
        });

    }


    // ----------------------------------------------------------
    // VALIDAR SENHA
    // ----------------------------------------------------------

    if (
        String(senha).length < 6
    ) {

        return res.status(400).json({
            erro: "A senha precisa ter pelo menos 6 caracteres."
        });

    }


    // ----------------------------------------------------------
    // NORMALIZAR DADOS
    // ----------------------------------------------------------

    const emailNormalizado =
        String(email)
            .trim()
            .toLowerCase();


    const nomeNormalizado =
        String(nome)
            .trim();


    const rmNormalizado =
        String(rm)
            .trim();


    // ----------------------------------------------------------
    // VERIFICAR E-MAIL
    // ----------------------------------------------------------

    const verificarEmail = `
        SELECT id_usuario
        FROM usuarios
        WHERE email = ?
        LIMIT 1
    `;


    conexao.query(
        verificarEmail,
        [emailNormalizado],
        (erro, resultados) => {

            if (erro) {

                console.error(
                    "Erro ao verificar e-mail:",
                    erro
                );

                return res.status(500).json({
                    erro: "Erro ao verificar e-mail."
                });

            }


            if (
                resultados.length > 0
            ) {

                return res.status(409).json({
                    erro: "Este e-mail já está cadastrado."
                });

            }


            // --------------------------------------------------
            // VERIFICAR RM
            // --------------------------------------------------

            const verificarRm = `
                SELECT id_aluno
                FROM alunos
                WHERE ra = ?
                LIMIT 1
            `;


            conexao.query(
                verificarRm,
                [rmNormalizado],
                (erroRm, alunos) => {

                    if (erroRm) {

                        console.error(
                            "Erro ao verificar RM:",
                            erroRm
                        );

                        return res.status(500).json({
                            erro: "Erro ao verificar RM."
                        });

                    }


                    if (
                        alunos.length > 0
                    ) {

                        return res.status(409).json({
                            erro: "Este RM já está cadastrado."
                        });

                    }


                    // ------------------------------------------
                    // CRIAR USUÁRIO
                    // ------------------------------------------

                    const inserirUsuario = `
                        INSERT INTO usuarios
                        (
                            nome,
                            email,
                            senha,
                            tipo,
                            ativo
                        )
                        VALUES
                        (
                            ?,
                            ?,
                            ?,
                            'ALUNO',
                            1
                        )
                    `;


                    conexao.query(
                        inserirUsuario,
                        [
                            nomeNormalizado,
                            emailNormalizado,
                            senha
                        ],
                        (
                            erroUsuario,
                            resultadoUsuario
                        ) => {

                            if (erroUsuario) {

                                console.error(
                                    "Erro ao cadastrar usuário:",
                                    erroUsuario
                                );

                                return res.status(500).json({
                                    erro: "Erro ao criar a conta."
                                });

                            }


                            const idUsuario =
                                resultadoUsuario.insertId;


                            // ----------------------------------
                            // CRIAR CADASTRO DO ALUNO
                            // ----------------------------------

                            const inserirAluno = `
                                INSERT INTO alunos
                                (
                                    id_usuario,
                                    ra,
                                    ano,
                                    turno
                                )
                                VALUES
                                (
                                    ?,
                                    ?,
                                    YEAR(CURDATE()),
                                    'MANHA'
                                )
                            `;


                            conexao.query(
                                inserirAluno,
                                [
                                    idUsuario,
                                    rmNormalizado
                                ],
                                (
                                    erroAluno,
                                    resultadoAluno
                                ) => {

                                    if (erroAluno) {

                                        console.error(
                                            "Erro ao cadastrar aluno:",
                                            erroAluno
                                        );


                                        // --------------------------
                                        // DESFAZER USUÁRIO
                                        // --------------------------

                                        conexao.query(
                                            `
                                            DELETE FROM usuarios
                                            WHERE id_usuario = ?
                                            `,
                                            [idUsuario],
                                            () => {}
                                        );


                                        return res.status(500).json({
                                            erro:
                                                "A conta foi criada, mas não foi possível salvar o RM. Verifique a estrutura da tabela alunos."
                                        });

                                    }


                                    // ------------------------------
                                    // SUCESSO
                                    // ------------------------------

                                    return res.status(201).json({

                                        mensagem:
                                            "Aluno cadastrado com sucesso.",

                                        usuario: {

                                            id_usuario:
                                                idUsuario,

                                            nome:
                                                nomeNormalizado,

                                            email:
                                                emailNormalizado,

                                            tipo:
                                                "ALUNO",

                                            rm:
                                                rmNormalizado,

                                            id_aluno:
                                                resultadoAluno.insertId

                                        }

                                    });

                                }
                            );

                        }
                    );

                }
            );

        }
    );

}


// ============================================================
// EXPORTAR
// ============================================================

module.exports = {

    listarUsuarios,

    cadastrarAluno

};