// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db.js';
import expenseRoutes from './backend/routes/expenseRoutes.js';
import { notFound, errorHandler } from './backend/middleware/errorMiddleware.js';
import userRoutes from './backend/routes/userRoutes.js';

dotenv.config();

// Connect DB
connectDB();

const app = express();

// CORS (ALLOW FRONTEND)
app.use(
  cors({
    origin: 'http://localhost:5173', 
    credentials: true,
  })
);

// Body parser
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// user auth routes
app.use('/api/users', userRoutes);

// Expense routes
app.use('/api/expenses', expenseRoutes);

// Error middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


