// frontend/src/pages/Dashboard.jsx
import React, { useEffect, useMemo, useState } from 'react';
import ExpenseForm from '../components/ExpenseForm.jsx';
import ExpenseList from '../components/ExpenseList.jsx';
import FilterBar from '../components/FilterBar.jsx';
import StatsBar from '../components/StatsBar.jsx';

const API_URL = 'http://localhost:5000/api/expenses';

/**
 * Get headers with JWT token from localStorage
 */
function getAuthHeaders(isJson = true) {
  const headers = {};

  if (isJson) {
    headers['Content-Type'] = 'application/json';
  }

  try {
    const stored = localStorage.getItem('user');
    if (!stored) return headers;

    const user = JSON.parse(stored);
    if (user?.token) {
      headers['Authorization'] = `Bearer ${user.token}`;
    }
  } catch {
    // ignore parse error
  }

  return headers;
}

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingExpense, setEditingExpense] = useState(null);
  const [filters, setFilters] = useState({
    category: 'All',
    month: 'All',
  });

  useEffect(() => {
    fetchExpenses();
  }, []);

  // GET /api/expenses
  async function fetchExpenses() {
    try {
      setLoading(true);
      setError('');

      const res = await fetch(API_URL, {
        method: 'GET',
        headers: getAuthHeaders(false),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch expenses');
      }

      setExpenses(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  // POST /api/expenses
  async function handleCreate(expenseData) {
    try {
      setError('');

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: getAuthHeaders(true),
        body: JSON.stringify(expenseData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || 'Failed to create expense');
      }

      setExpenses((prev) => [data, ...prev]);
    } catch (err) {
      setError(err.message || 'Failed to create expense');
    }
  }

  // PUT /api/expenses/:id
  async function handleUpdate(id, expenseData) {
    try {
      setError('');

      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(true),
        body: JSON.stringify(expenseData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || 'Failed to update expense');
      }

      setExpenses((prev) =>
        prev.map((exp) => (exp._id === id ? data : exp))
      );
      setEditingExpense(null);
    } catch (err) {
      setError(err.message || 'Failed to update expense');
    }
  }

  // DELETE /api/expenses/:id
  async function handleDelete(id) {
    const ok = window.confirm('Delete this expense?');
    if (!ok) return;

    try {
      setError('');

      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(false),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || 'Failed to delete expense');
      }

      setExpenses((prev) => prev.filter((exp) => exp._id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete expense');
    }
  }

  const filteredExpenses = useMemo(() => {
    return expenses.filter((exp) => {
      const matchCategory =
        filters.category === 'All' || exp.category === filters.category;

      const matchMonth =
        filters.month === 'All'
          ? true
          : (() => {
              if (!exp.date) return false;
              const d = new Date(exp.date);
              const monthValue = `${d.getFullYear()}-${String(
                d.getMonth() + 1
              ).padStart(2, '0')}`;
              return monthValue === filters.month;
            })();

      return matchCategory && matchMonth;
    });
  }, [expenses, filters]);


  const stats = useMemo(() => {
    const total = filteredExpenses.reduce(
      (sum, exp) => sum + Number(exp.amount || 0),
      0
    );
    const count = filteredExpenses.length;

 
    const byCategory = filteredExpenses.reduce((acc, exp) => {
      const key = exp.category || 'Other';
      acc[key] = (acc[key] || 0) + Number(exp.amount || 0);
      return acc;
    }, {});


    const monthMap = filteredExpenses.reduce((acc, exp) => {
      if (!exp.date) return acc;

      const d = new Date(exp.date);
      if (Number.isNaN(d.getTime())) return acc;

      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
        2,
        '0'
      )}`; // YYYY-MM

      acc[key] = (acc[key] || 0) + Number(exp.amount || 0);
      return acc;
    }, {});

    const monthlyTotals = Object.entries(monthMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, value]) => ({
        month,
        total: Number(value.toFixed(2)),
      }));

    return { total, count, byCategory, monthlyTotals };
  }, [filteredExpenses]);

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Expense Tracker</h1>
        <p>Track your daily expenses with a simple MERN application.</p>
      </header>

      <main className="app-main">
        <section className="card card-form">
          <h2>{editingExpense ? 'Edit Expense' : 'Add New Expense'}</h2>
          <ExpenseForm
            key={editingExpense ? editingExpense._id : 'new'}
            initialValues={editingExpense}
            onSubmit={(data) =>
              editingExpense
                ? handleUpdate(editingExpense._id, data)
                : handleCreate(data)
            }
            onCancel={() => setEditingExpense(null)}
          />
        </section>

        <section className="card card-filters">
          <h2>Filters & Stats</h2>
          <FilterBar
            expenses={expenses}
            filters={filters}
            onChange={setFilters}
          />
          <StatsBar stats={stats} />
        </section>

        <section className="card card-list">
          <div className="card-list-header">
            <h2>Expenses</h2>
            {loading && <span className="tag tag-blue">Loading…</span>}
          </div>
          {error && <div className="alert alert-error">{error}</div>}
          <ExpenseList
            expenses={filteredExpenses}
            onEdit={setEditingExpense}
            onDelete={handleDelete}
          />
        </section>
      </main>

      <footer className="app-footer">
        <span>Built for Full-Stack course – Expense Tracker</span>
      </footer>
    </div>
  );
}

export default Dashboard;




