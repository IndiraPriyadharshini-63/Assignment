import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faComment } from "@fortawesome/free-solid-svg-icons";

const Card = ({ card }) => {
  return (
    <div className="max-w-sm p-6 gap-4  rounded-[20px] shadow-md">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faComment} className="text-[#667085] text-xl" />
        <h2 className="text-xs font-semibold text-[#667085]">
          {card.card.title}
        </h2>
      </div>

      <div className="mt-4 text-[32px] font-normal">{card.card.value}</div>

      <div className="mt-4 flex items-center gap-2">
        <FontAwesomeIcon icon={faArrowTrendUp} className="text-green-500" />
        <span className="text-sm font-bold text-[#15B79F]">
          {card.card.increaseValue}
        </span>
        <span className="text-sm text-gray-400">Increase</span>
      </div>
    </div>
  );
};

export default Card;
