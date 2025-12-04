import React from 'react';
import ExpenseRow from './ExpenseRow.jsx';

function ExpenseList({ expenses, onEdit, onDelete }) {
  if (!expenses.length) {
    return <p className="empty-state">No expenses yet. Add your first one!</p>;
  }

  return (
    <div className="table-wrapper">
      <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th className="text-right">Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(exp => (
            <ExpenseRow
              key={exp._id}
              expense={exp}
              onEdit={() => onEdit(exp)}
              onDelete={() => onDelete(exp._id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
