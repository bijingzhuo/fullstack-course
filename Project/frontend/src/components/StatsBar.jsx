// frontend/src/components/StatsBar.jsx
import MonthlyLineChart from './MonthlyLineChart';

function StatsBar({ stats }) {
  const { total, count, byCategory, monthlyTotals } = stats || {
    total: 0,
    count: 0,
    byCategory: {},
    monthlyTotals: [],
  };

  const categories = Object.entries(byCategory || {}).map(([name, value]) => ({
    name,
    value: Number(value.toFixed(2)),
  }));

  return (
    <div className="stats-wrapper">
      {/* Top Digital Indicators */}
      <div className="stats-cards">
        <div className="stats-card">
          <span className="stats-label">Total Expenses</span>
          <span className="stats-value">€ {total.toFixed(2)}</span>
        </div>
        <div className="stats-card">
          <span className="stats-label">Number of Records</span>
          <span className="stats-value">{count}</span>
        </div>
      </div>

      {/* Chart area: The left side can hold category bar charts, which will be added later; the right side is for line charts. */}
      <div className="stats-charts-grid">
        {/* Reserve a container for future category diagrams (you can put bars/pies here if you want to add them later). */}
        <div className="stats-chart placeholder-chart">
          <h4>By Category</h4>
          {categories.length === 0 ? (
            <p className="stats-empty">No category data yet.</p>
          ) : (
            <ul className="category-list">
              {categories.map((c) => (
                <li key={c.name}>
                  <span>{c.name}</span>
                  <span>€ {c.value.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* New addition: Line chart of total expenditures by month */}
        <MonthlyLineChart data={monthlyTotals} />
      </div>
    </div>
  );
}

export default StatsBar;

