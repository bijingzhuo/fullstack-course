// backend/controllers/expenseController.js
import Expense from '../models/expenseModel.js';

// GET /api/expenses  
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user._id })
      .sort({ date: -1, createdAt: -1 });

    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/expenses 
export const createExpense = async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;

    if (!title || amount == null) {
      return res
        .status(400)
        .json({ message: 'Title and amount are required' });
    }

    const expense = await Expense.create({
      title,
      amount,
      category: category || 'Other',
      date: date || new Date(),
      user: req.user._id,
    });

    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/expenses/:id 
export const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findOne({
      _id: id,
      user: req.user._id,
    });

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    const { title, amount, category, date } = req.body;

    if (title !== undefined) expense.title = title;
    if (amount !== undefined) expense.amount = amount;
    if (category !== undefined) expense.category = category;
    if (date !== undefined) expense.date = date;

    const updated = await expense.save();

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /api/expenses/:id 
export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findOneAndDelete({
      _id: id,
      user: req.user._id,
    });

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ message: 'Expense removed', id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/expenses/summary/category 
export const getCategorySummary = async (req, res) => {
  try {
    const result = await Expense.aggregate([
      { $match: { user: req.user._id } },
      {
        $group: {
          _id: '$category',
          total: { $sum: '$amount' },
          count: { $sum: 1 },
        },
      },
      { $sort: { total: -1 } },
    ]);

    const formatted = result.map((item) => ({
      category: item._id || 'Other',
      total: item.total,
      count: item.count,
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

