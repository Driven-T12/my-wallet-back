import express from "express"
import cors from "cors"
import authRouter from "./routes/auth.routes.js"
import transactionRouter from "./routes/transaction.routes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(authRouter)
app.use(transactionRouter)

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))

// (req) routes => [middleware] => controller (res)
// middledares => validação de schemas e validação de autenticação

// JEITOS DE INSERIR DADOS EM UMA REQUISIÇÃO
// - body => POST e PUT para inserir/editar dados do recurso em si (usuário, transação, receita...)
// - headers => dados de configuração da API (autorização, token)
// - param => vai na rota e é um parâmetro OBRIGATÓRIO
// - query string => vai na rota, mas é um parâmetro OPCIONAL, normalmente usado pra filtrar listas em rotas do tipo GET