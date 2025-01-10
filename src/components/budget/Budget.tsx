import "./Budget.scss";

const Budget = () => {
  const data = [
    { category: "House", budget: 130, actual: 186, left: -56 },
    { category: "Dance", budget: 100, actual: 103, left: -3 },
    { category: "Personal", budget: 102, actual: 133, left: -31 },
    { category: "Debts", budget: 63, actual: 100, left: -37 },
    { category: "Social life", budget: 20, actual: 30, left: -10 },
    { category: "Eating out", budget: 70, actual: 145.5, left: -75.5 },
    { category: "Beauty", budget: 45, actual: 28.5, left: 16.5 },
    { category: "Clothes", budget: 50, actual: 77, left: -27 },
    { category: "Savings", budget: 100, actual: 0, left: -100 },
    { category: "Gifts", budget: 89, actual: 0, left: -89 },
    { category: "Business", budget: 0, actual: 31, left: -31 },
    { category: "Transport", budget: 30, actual: 12, left: 18 },
  ];

  return (
    <div className="expenses-table">
      <table>
        <thead>
          <tr>
            <th colSpan={4}>EXPENSES</th>
          </tr>
          <tr>
            <th>CATEGORY</th>
            <th>BUDGET</th>
            <th>ACTUAL</th>
            <th>LEFT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="category">{item.category}</td>
              <td className="amount">${item.budget.toFixed(2)}</td>
              <td className="amount ">${item.actual.toFixed(2)}</td>
              <td
                className={
                  "amount " + (item.left < 0 ? "negative" : "positive")
                }
              >
                ${item.left.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Budget;
