import { Router } from "express"
import { createTransaction, deleteTransaction, readTransactions, updateTransaction } from "../controllers/transaction.controllers.js"
import { validateAuth } from "../middlewares/validateAuth.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { editTransactionSchema, transactionSchema } from "../schemas/transaction.schemas.js"

const transactionRouter = Router()

transactionRouter.post("/transaction", validateAuth, validateSchema(transactionSchema), createTransaction)
transactionRouter.get("/transaction", validateAuth, readTransactions)
transactionRouter.put("/transaction/:id", validateAuth, validateSchema(editTransactionSchema), updateTransaction)
transactionRouter.delete("/transaction/:id", validateAuth, deleteTransaction)

export default transactionRouter