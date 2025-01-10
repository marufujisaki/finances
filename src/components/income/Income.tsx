import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Income.scss";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Income = () => {
  const data = [
    { source: "Intelix", currency: "$", amount: 500 },
    { source: "Intelix", currency: "Bs", amount: 190 },
    { source: "Quincena 1", currency: "Bs", amount: 42 },
    { source: "Quincena 2", currency: "Bs", amount: 40 },
    { source: "Bono", currency: "Bs", amount: 97 },
    { source: "Utilidades", currency: "Bs", amount: 80 },
  ];

  const total = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="income-table">
      <table>
        <thead>
          <tr>
            <th colSpan={3}>
              <div>
                <p>INCOME</p>
                <FontAwesomeIcon className="add" icon={faCirclePlus} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.source}</td>
              <td>{item.currency}</td>
              <td className="amount">${item.amount.toFixed(2)}</td>
            </tr>
          ))}
          <tr className="total-row">
            <td colSpan={2}>TOTAL</td>
            <td className="amount">${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Income;
