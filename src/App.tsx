import { useState } from "react";
import "./App.css";
import Calendar from "./components/calendar/Calendar";
import MonthsSelector from "./components/months-selector/MonthsSelector";

function App() {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const handleMonthChange = (newDate: Date) => {
    setMonth(newDate.getMonth());
    setYear(newDate.getFullYear());
  };
  return (
    <>
      <MonthsSelector onMonthChange={handleMonthChange} />
      <Calendar month={month} year={year} />
    </>
  );
}

export default App;
