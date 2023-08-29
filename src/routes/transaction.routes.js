import { Router } from "express"
import { createTransaction, deleteTransaction, readTransactions } from "../controllers/transaction.controllers.js"
import { validateAuth } from "../middlewares/validateAuth.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { transactionSchema } from "../schemas/transaction.schemas.js"

const transactionRouter = Router()

transactionRouter.get("/transaction", validateAuth, readTransactions)
transactionRouter.post("/transaction", validateAuth, validateSchema(transactionSchema), createTransaction)
transactionRouter.delete("/transaction/:id", validateAuth, deleteTransaction)

export default transactionRouter