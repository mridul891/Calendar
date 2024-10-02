import { useEffect, useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysinMonth, setDaysinMonths] = useState([]);
  const [startDay, setStartDay] = useState(0);
  const todayMonth = new Date().getMonth();

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

  const dayNames = ["SUN", "MON", "TUE", "WED", "THRU", "FRI", "SAT"];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      <div className="flex gap-10 w-[60%] justify-around">
        <button onClick={prevMonth}> &lt;</button>
        <span className="font-bold text-3xl mb uppercase">
          {currentDate.toLocaleString("default", { month: "long" }).slice(0, 3)}
          <span className="ml-2 text-zinc-600 ">
            {currentDate.getFullYear()}
          </span>
        </span>
        <button onClick={nextMonth}> &gt;</button>
      </div>

      <div className="grid grid-cols-7 w-full lg:gap-5 gap-2">
        {dayNames.map((day, index) => (
          <div
            key={index}
            className="inline-flex justify-center bg-zinc-800 px-4 rounded-xl py-1"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 w-full gap-5  ">
        {Array.from({ length: startDay }).map((_, index) => (
          <div key={index} className="bg-zinc-800 rounded-xl"></div>
        ))}
        {daysinMonth.map((day) => (
          <div
            key={day}
            className={`inline-flex font-semibold justify-center text-white items-end h-[2.5rem] md:h-[4rem] rounded-xl  
              ${
                day.getDate() === currentDate.getDate() &&
                day.getMonth() === todayMonth
                  ? "bg-white text-black "
                  : "bg-zinc-900"
              }`}
          >
            {day.getDate() < 10 ? "0" + day.getDate() : day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
