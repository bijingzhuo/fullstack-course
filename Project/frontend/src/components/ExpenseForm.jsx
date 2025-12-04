import React, { useState } from 'react';

const emptyForm = {
  title: '',
  amount: '',
  category: '',
  date: ''
};

const categories = ['Food', 'Transport', 'Shopping', 'Bills', 'Other'];

function ExpenseForm({ initialValues, onSubmit, onCancel }) {
  const [form, setForm] = useState(initialValues || emptyForm);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim() || !form.amount) {
      alert('Title and amount are required.');
      return;
    }

    const payload = {
      title: form.title.trim(),
      amount: Number(form.amount),
      category: form.category || 'Other',
      date: form.date || new Date().toISOString().slice(0, 10)
    };

    onSubmit(payload);
    if (!initialValues) {
      setForm(emptyForm);
    }
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Groceries, Taxi, Rent..."
            value={form.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount (EUR) *</label>
          <input
            id="amount"
            name="amount"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={form.amount}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {initialValues ? 'Save Changes' : 'Add Expense'}
        </button>
        {initialValues && (
          <button
            type="button"
            className="btn btn-ghost"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ExpenseForm;
