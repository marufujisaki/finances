import { useState } from "react";
import MonthsSelector from "../components/months-selector/MonthsSelector";
import Calendar from "../components/calendar/Calendar";
import "./Layout.scss";
import Balance from "../components/balance/Balance";
import Debts from "../components/debts/Debts";
import Bills from "../components/bills/Bills";
import Budget from "../components/budget/Budget";
import Income from "../components/income/Income";
import Wishlist from "../components/wishlist/Wishlist";
import Chart from "../components/chart/Chart";

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
          <Bills />
          <Wishlist />
          <Chart />
        </div>
        <div className="right">
          <Calendar month={month} year={year} />
          <div className="expenses">
            <div className="budget-container">
              <Budget />
            </div>
            <div className="income-container">
              <Income />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
