import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Debts.scss";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Debts = () => {
  const example = [
    {
      description: "Gaby",
      amount: 100,
      paid: false,
    },
    {
      description: "Sebas",
      amount: 35,
      paid: true,
    },
  ];

  return (
    <div className="debts-container">
      <div className="debts-header">
        <p className="debts-title"> DEBTS </p>
        <FontAwesomeIcon className="add-debt" icon={faCirclePlus} />
      </div>
      {example.map((debt, i) => (
        <div key={i} className="debt">
          <span>{debt.description}</span>
          <span className="amount">${debt.amount.toFixed(2)}</span>
          <div className={"button " + (debt.paid && "paid")}>
            {debt.paid ? "PAID" : "NOT PAID"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Debts;
