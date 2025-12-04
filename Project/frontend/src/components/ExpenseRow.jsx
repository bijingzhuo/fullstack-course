import React from 'react';

function formatDate(value) {
  if (!value) return '-';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString();
}

function ExpenseRow({ expense, onEdit, onDelete }) {
  return (
    <tr>
      <td>{expense.title}</td>
      <td className="text-right">
        € {Number(expense.amount || 0).toFixed(2)}
      </td>
      <td>
        <span className="tag">{expense.category || 'Other'}</span>
      </td>
      <td>{formatDate(expense.date)}</td>
      <td className="text-right">
        <button className="btn-icon" onClick={onEdit}>
          ✏️
        </button>
        <button className="btn-icon btn-icon-danger" onClick={onDelete}>
          🗑️
        </button>
      </td>
    </tr>
  );
}

export default ExpenseRow;
