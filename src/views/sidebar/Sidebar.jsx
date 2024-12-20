import React from "react";
import Brand from "../../assets/Logo.png";
import Home from "../../assets/House.png";
import Chat from "../../assets/ChatTeardrop.png";
import Community from "../../assets/UsersFour.png";
import Settings from "../../assets/Gear.png";

const Sidebar = () => {
  return (
    <div className="flex-none w-[60px] h-[1080px] bg-[#115E56] justify-between border-r border-[#DCDFE4]">
      <div className="top">
        <img src={Brand} alt="Logo" />
      </div>
      <div className="center list-none">
        <li>
          <img src={Home} alt="home" />
        </li>
        <li>
          <img src={Chat} alt="chat" />
        </li>
        <li>
          <img src={Community} alt="community" />
        </li>
      </div>
      <div className="bottom">
        <img src={Settings} alt="settings" />
      </div>
    </div>
  );
};

export default Sidebar;
