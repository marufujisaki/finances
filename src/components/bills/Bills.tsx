import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Bills.scss";

const Bills = () => {
  const example = [
    {
      description: "Gym",
      amount: 50,
      date: 7,
      paid: false,
    },
    {
      description: "Internet",
      amount: 36,
      date: 17,
      paid: true,
    },
    {
      description: "Google",
      amount: 3,
      date: 2,
      paid: false,
    },
    {
      description: "Netflix",
      amount: 4,
      date: 28,
      paid: false,
    },
  ];
  const today = new Date();
  const formatted = example.map((obj) => {
    const day = obj.date.toString().padStart(2, "0"); // Ensure two-digit format for the day
    const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Current month (January)
    return { ...obj, date: `${day}/${month}` };
  });
  return (
    <div className="bills-container">
      <div className="bills-header">
        <p className="bills-title"> BILLS </p>
        <FontAwesomeIcon className="add-bill" icon={faCirclePlus} />
      </div>
      {formatted.map((bill, i) => (
        <div key={i} className="bill">
          <span>{bill.description}</span>
          <span className="amount">${bill.amount.toFixed(2)}</span>
          <span className="date">Due {bill.date}</span>
          <div className={"button " + (bill.paid && "paid")}>
            {bill.paid ? "PAID" : "NOT PAID"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bills;
