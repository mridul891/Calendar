const Header = ({ prevMonth, nextMonth, currentDate }) => {
  return (
    <div className="flex gap-10 w-[60%] justify-around items-center">
      <button onClick={prevMonth} className="text-4xl font-bold">
        {" "}
        &lt;
      </button>
      <span className="font-bold text-3xl mb uppercase">
        {currentDate.toLocaleString("default", { month: "long" }).slice(0, 3)}
        <span className="ml-2 text-zinc-600 ">{currentDate.getFullYear()}</span>
      </span>
      <button onClick={nextMonth} className="text-4xl font-bold">
        {" "}
        &gt;
      </button>
    </div>
  );
};

export default Header;
