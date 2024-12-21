import React from "react";
import Brand from "../../assets/Logo.png";
import Home from "../../assets/House.png";
import Chat from "../../assets/ChatTeardrop.png";
import Community from "../../assets/UsersFour.png";
import Settings from "../../assets/Gear.png";

const Sidebar = () => {
  return (
    <div
      className="flex flex-col justify-between items-start w-[60px]  bg-[#115E56] border-r border-[#DCDFE4] gap-[60px]"
      style={{ boxSizing: "border-box" }}
    >
      <div className="flex flex-col items-center w-full">
        <div className="p-4 mb-2">
          <img src={Brand} alt="Logo" className="" />
        </div>

        <nav className="flex flex-col items-center gap-4 w-full">
          <button className="w-10 h-10 rounded-md bg-gray-100 hover:bg-gray-200 flex justify-center items-center">
            <img src={Home} alt="Icon 1" className="w-6 h-6" />
          </button>
          <button className=" ">
            <img src={Chat} alt="Icon 2" className="w-6 h-6" />
          </button>
          <button className="">
            <img src={Community} alt="Icon 2" className="w-6 h-6" />
          </button>
        </nav>
      </div>

      <div className="flex flex-col items-center mb-4 w-full">
        <button className="">
          <img src={Settings} alt="Settings Icon" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
