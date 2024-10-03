import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysinMonth, setDaysinMonths] = useState([]);
  const [startDay, setStartDay] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const todayMonth = new Date().getMonth();

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];
    setDaysinMonths(days);
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

  const handleSelect = (day) => {
    console.log(day);
    setSelectedDate(day);
  };

  const handleClick = () => {
    console.log("button clicked");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      <Header
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        currentDate={currentDate}
      />

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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0, duration: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={index}
            className="bg-zinc-800 rounded-xl"
          ></motion.div>
        ))}
        {daysinMonth.map((day) => (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={day}
            className={`flex-1 w-full font-semibold  text-white items-end h-[2.5rem] md:h-[4rem] rounded-xl  
              ${
                day.getDate() === currentDate.getDate() &&
                day.getMonth() === todayMonth
                  ? "bg-zinc-600 text-black "
                  : "bg-zinc-900"
              }`}
            onClick={() => handleSelect(day)}
          >
            <div className="flex justify-around items-center h-full ">
              {day.getDate() < 10 ? "0" + day.getDate() : day.getDate()}
              <button onClick={handleClick} className="absolute top-0 right-0">
                +
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
