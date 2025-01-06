import { useState } from "react";

import "./MonthSelector.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface MonthSelectorProps {
  onMonthChange: (newDate: Date) => void;
}

const MonthsSelector: React.FC<MonthSelectorProps> = ({ onMonthChange }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [year, setYear] = useState(new Date().getFullYear()); // Default year
  const [month, setMonth] = useState(new Date().getMonth()); // Default month (September = 8)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlePrevious = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
    onMonthChange(new Date(year, month - 1)); // Trigger callback
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
    onMonthChange(new Date(year, month + 1)); // Trigger callback
  };

  const handleMonthSelect = (selectedMonth: number) => {
    setMonth(selectedMonth);
    setIsDropdownOpen(false);
    onMonthChange(new Date(year, selectedMonth)); // Trigger callback
  };

  return (
    <div className="month-selector">
      {/* Left Arrow */}
      <button className="arrow" onClick={handlePrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Month Display */}
      <div
        className="month-display"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {months[month]} {year}
      </div>

      {/* Right Arrow */}
      <button className="arrow" onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="month-dropdown">
          {months.map((m, index) => (
            <div
              key={index}
              className={`month-option ${index === month ? "selected" : ""}`}
              onClick={() => handleMonthSelect(index)}
            >
              {m}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MonthsSelector;
