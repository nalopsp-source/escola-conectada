const express = require("express");
const cors = require("cors");
const path = require("path");

// Rotas do sistema
const usuarioRoutes = require("./routes/usuarioRoutes");
const authRoutes = require("./routes/authRoutes");
const professorRoutes = require("./routes/professorRoutes");
const alunoRoutes = require("./routes/alunoRoutes");
const turmaRoutes = require("./routes/turmaRoutes");
const matriculaRoutes = require("./routes/matriculaRoutes");
const disciplinaRoutes = require("./routes/disciplinaRoutes");
const aulaRoutes = require("./routes/aulaRoutes");
const atividadeRoutes = require("./routes/atividadeRoutes");
const conteudoOfflineRoutes = require("./routes/conteudoOfflineRoutes");
const equipamentoRoutes = require("./routes/equipamentoRoutes");
const infraestruturaAlertaRoutes = require("./routes/infraestruturaAlertaRoutes");

const app = express();

// Configurações gerais
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Caminho da pasta do frontend
const pastaFrontend = path.join(__dirname, "front-end");

// Disponibiliza HTML, CSS e JavaScript
app.use(express.static(pastaFrontend));

// Página inicial: abre front-end/index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(pastaFrontend, "index.html"));
});

// Rotas da API
app.use(usuarioRoutes);
app.use("/auth", authRoutes);
app.use(professorRoutes);
app.use(alunoRoutes);
app.use(turmaRoutes);
app.use(matriculaRoutes);
app.use(disciplinaRoutes);
app.use(aulaRoutes);
app.use(atividadeRoutes);
app.use(conteudoOfflineRoutes);
app.use(equipamentoRoutes);
app.use(infraestruturaAlertaRoutes);

// Tratamento de rotas inexistentes
app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não encontrada",
        caminho: req.originalUrl
    });
});

// Tratamento de erros
app.use((err, req, res, next) => {
    console.error("Erro no servidor:", err);

    res.status(500).json({
        erro: "Erro interno do servidor"
    });
});

// Inicialização
const PORTA = process.env.PORT || 3000;

app.listen(PORTA, () => {
    console.log("-------------------------------------");
    console.log("Escola Conectada iniciada!");
    console.log(`Site: http://localhost:${PORTA}`);
    console.log(`API: http://localhost:${PORTA}`);
    console.log("-------------------------------------");
});
