// src/components/ExpensesChart.jsx
import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const COLORS = ['#4ade80', '#38bdf8', '#f97316', '#facc15', '#a855f7', '#fb7185'];

function ExpensesChart({ stats }) {
  const categoryData = Object.entries(stats.byCategory || {}).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  const hasData = categoryData.length > 0;

  if (!hasData) {
    return <p className="chart-empty">No data for selected filters.</p>;
  }

  return (
    <div className="charts-grid">
      {/* Bar chart */}
      <div className="chart-card">
        <h4>By Category (Bar)</h4>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={categoryData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie chart */}
      <div className="chart-card">
        <h4>By Category (Pie)</h4>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Tooltip />
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              innerRadius={40}
              paddingAngle={4}
            >
              {categoryData.map((entry, index) => (
                <Cell key={`slice-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <ul className="chart-legend">
          {categoryData.map((c, i) => (
            <li key={c.name}>
              <span
                className="legend-dot"
                style={{ backgroundColor: COLORS[i % COLORS.length] }}
              />
              {c.name}: <strong>{c.value.toFixed(2)}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpensesChart;
