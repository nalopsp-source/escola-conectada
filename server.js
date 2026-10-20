const express = require("express");
const cors = require("cors");

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

app.use(cors());
app.use(express.json());
app.use(atividadeRoutes);


// Rota inicial
app.get("/", (req, res) => {
    res.json({
        mensagem: "API Escola Conectada funcionando!"
    });
});

// Rotas da API
app.use(usuarioRoutes);

// LOGIN
app.use("/auth", authRoutes);

app.use(professorRoutes);
app.use(alunoRoutes);
app.use(turmaRoutes);
app.use(matriculaRoutes);
app.use(disciplinaRoutes);
app.use(aulaRoutes);
app.use(conteudoOfflineRoutes);
app.use(equipamentoRoutes);
app.use(infraestruturaAlertaRoutes);

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});