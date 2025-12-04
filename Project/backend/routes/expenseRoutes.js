// backend/routes/expenseRoutes.js
import express from 'express';
import {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
  getCategorySummary,
} from '../controllers/expenseController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

// GET /api/expenses
// POST /api/expenses
router.route('/')
  .get(getExpenses)
  .post(createExpense);

// GET /api/expenses/summary/category
router.get('/summary/category', getCategorySummary);

// PUT /api/expenses/:id
// DELETE /api/expenses/:id
router.route('/:id')
  .put(updateExpense)
  .delete(deleteExpense);

export default router;


