const express = require("express");
const router = express.Router();

const conexao = require("../config/database");

router.post("/login", (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({
            erro: "E-mail e senha são obrigatórios"
        });
    }

    const sql = `
        SELECT id_usuario, nome, email, senha, tipo, ativo
        FROM usuarios
        WHERE email = ?
    `;

    conexao.query(sql, [email], (erro, resultados) => {
        if (erro) {
            console.error("Erro no login:", erro.message);

            return res.status(500).json({
                erro: "Erro interno do servidor"
            });
        }

        if (resultados.length === 0) {
            return res.status(401).json({
                erro: "E-mail ou senha incorretos"
            });
        }

        const usuario = resultados[0];

        if (usuario.senha !== senha) {
            return res.status(401).json({
                erro: "E-mail ou senha incorretos"
            });
        }

        if (usuario.ativo !== 1) {
            return res.status(403).json({
                erro: "Usuário inativo"
            });
        }

        res.json({
            mensagem: "Login realizado com sucesso",
            usuario: {
                id_usuario: usuario.id_usuario,
                nome: usuario.nome,
                email: usuario.email,
                tipo: usuario.tipo
            }
        });
    });
});

module.exports = router;