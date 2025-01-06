import { useState } from "react";
import MonthsSelector from "../components/months-selector/MonthsSelector";
import Calendar from "../components/calendar/Calendar";
import "./Layout.scss";
import Balance from "../components/balance/Balance";
import Debts from "../components/debts/Debts";

const Layout = () => {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const handleMonthChange = (newDate: Date) => {
    setMonth(newDate.getMonth());
    setYear(newDate.getFullYear());
  };
  return (
    <>
      <div className="main-container">
        <div className="left">
          <MonthsSelector onMonthChange={handleMonthChange} />
          <Balance />
          <Debts />
        </div>
        <div className="right">
          <Calendar month={month} year={year} />
        </div>
      </div>
    </>
  );
};

export default Layout;
