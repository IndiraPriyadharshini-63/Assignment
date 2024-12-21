import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faComment,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const TopNavbar = () => {
  return (
    <div className="flex flex-row   px-10  gap-3 h-[94px] border-b border-gray-300 ">
      <div className="flex flex-row items-center gap-3 my-6">
        <div className="flex flex-row items-center bg-[#CCFBEF] rounded-full px-3 py-2 gap-3 w-[137px] ">
          <FontAwesomeIcon icon={faChartPie} className="text-[#212636]" />
          <span className="text-[#212636] font-medium text-lg leading-[120%]">
            Summary
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-row items-center px-3 py-2 gap-3 w-[102px] h-[46px]">
          <FontAwesomeIcon icon={faTag} className="text-[#8A94A6]" />
          <span className="text-[#8A94A6] font-medium text-lg leading-[120%]">
            Sales
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-row items-center px-3 py-2 gap-3 w-[106px] h-[46px]">
          <FontAwesomeIcon icon={faComment} className="text-[#8A94A6]" />
          <span className="text-[#8A94A6] font-medium text-lg leading-[120%]">
            Chats
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
