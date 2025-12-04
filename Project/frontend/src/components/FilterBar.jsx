import React, { useMemo } from 'react';

function FilterBar({ expenses, filters, onChange }) {
  const categories = useMemo(() => {
    const set = new Set();
    expenses.forEach(exp => exp.category && set.add(exp.category));
    return Array.from(set);
  }, [expenses]);

  const months = useMemo(() => {
    const set = new Set();
    expenses.forEach(exp => {
      if (!exp.date) return;
      const d = new Date(exp.date);
      if (Number.isNaN(d.getTime())) return;
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
        2,
        '0'
      )}`;
      set.add(key);
    });
    return Array.from(set).sort().reverse();
  }, [expenses]);

  function handleChange(e) {
    const { name, value } = e.target;
    onChange(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className="filter-bar">
      <div className="form-group">
        <label htmlFor="filter-category">Category</label>
        <select
          id="filter-category"
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="All">All</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="filter-month">Month</label>
        <select
          id="filter-month"
          name="month"
          value={filters.month}
          onChange={handleChange}
        >
          <option value="All">All</option>
          {months.map(monthKey => (
            <option key={monthKey} value={monthKey}>
              {monthKey}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
