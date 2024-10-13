import { useState } from "react";
import Calendar from "./Components/Calendar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [fullscreen, setFullscreen] = useState(false);

  const handleClick = () => {
    setFullscreen((fullscreen) => !fullscreen);
  };
  return (
    <div className="flex justify-around items-center w-screen h-screen bg-black text-white">
      <div className=" h-full w-full flex items-center justify-center">
        <Calendar />
      </div>
      <div className={` h-full ${fullscreen ? "w-[40vw]" : "none"}`}>
        <div
          className={` h-full ${fullscreen ? "bg-gray-400" : "bg-black"} `}
          onClick={handleClick}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-window-maximize"
            style={{ color: "#ffffff" }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
