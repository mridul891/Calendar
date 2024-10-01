import { useEffect, useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysinMonth, setDaysinMonths] = useState([]);
  const [startDay, setStartDay] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    setDaysinMonths(days);
    setStartDay(new Date(year, month, 1).getDay());
  }, [currentDate]);

  const dayNames = ["MON", "TUE", "WED", "THRU", "FRI", "SAT", "SUN"];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };
  return (
    <div className="flex flex-col justify-center items-center border-2 border-lime-300">
      <div className="flex gap-10 w-[60%] justify-around">
        <button onClick={prevMonth}> &lt;</button>
        <span>
          {currentDate.toLocaleString("default", { month: "long" })}
          {currentDate.getFullYear()}
        </span>
        <button onClick={nextMonth}> &gt;</button>
      </div>

      <div className="flex gap-5">
        {dayNames.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      <div>
        {Array.from({ length: startDay }).map((_, index) => (
          <div key={index}></div>
        ))}
        {daysinMonth.map((day) => {
          <div key={day}>{day.getDate()}</div>;
        })}
      </div>
    </div>
  );
};

export default Calendar;
