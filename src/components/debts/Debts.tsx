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
        <FontAwesomeIcon className="add" icon={faCirclePlus} />
      </div>
      {example.map((debt, i) => (
        <div key={i} className="debt">
          {debt.description}
        </div>
      ))}
    </div>
  );
};

export default Debts;
