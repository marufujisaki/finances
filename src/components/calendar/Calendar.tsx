import "./Calendar.scss";

const Calendar = ({ year, month }: { year: number; month: number }) => {
  // Days of the week
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Generate dates for the calendar
  const getDaysInMonth = (year: number, month: number) => {
    const days = [];
    const firstDayOfMonth = (new Date(year, month, 1).getDay() + 6) % 7; // Adjust Sunday to be last (0 -> 6)
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add all the days of the current month
    for (let day = 1; day <= totalDays; day++) {
      days.push(day);
    }

    const totalCells = days.length > 35 ? 42 : 35; // 6 rows * 7 columns
    while (days.length < totalCells) {
      days.push(null); // Empty cells
    }
    return days;
  };

  const days = getDaysInMonth(year, month);
  return (
    <div className="grid-container">
      <div className="calendar-header">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-cell header">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-body">
        {days.map((day, index) => (
          <div key={index} className={`calendar-cell general ${day ? "" : "empty"}`}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
