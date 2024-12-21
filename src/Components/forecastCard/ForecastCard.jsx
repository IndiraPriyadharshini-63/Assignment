import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

const ForecastCards = () => {
  return (
    <div
      className="flex flex-col items-start p-6 gap-6 isolation-auto"
      style={{
        width: "260px",

        background: `linear-gradient(180deg, #15B79F,  0%, #0E9382 100%)`,
        boxShadow:
          "0px 0px 0px 1px rgba(0, 0, 0, 0.06), 0px 5px 22px rgba(0, 0, 0, 0.04)",
        borderRadius: "20px",
      }}
    >
      <div className="flex flex-row items-center gap-2 w-full h-8">
        <span className="text-xs font-semibold uppercase text-[#CCFBEF] tracking-wider">
          Forecasts
        </span>
      </div>

      <div className="flex flex-row justify-center items-start gap-2 w-full h-16">
        <span
          className="text-7xl font-medium text-white leading-none"
          style={{
            textShadow: "0px 3px 14px rgba(0, 0, 0, 0.08)",
          }}
        >
          +15%
        </span>
        <div className="text-white">
          <FontAwesomeIcon icon={faArrowTrendUp} />
        </div>
      </div>

      <p className="text-sm text-white leading-relaxed">
        Forecasted increase in consultations by the end of the current month.
      </p>
      <div className="flex flex-row justify-center items-start gap-2 w-full h-16">
        <span
          className="text-[56px] font-medium text-white leading-none"
          style={{
            textShadow: "0px 3px 14px rgba(0, 0, 0, 0.08)",
          }}
        >
          +15%
        </span>
        <div className="text-white">
          <FontAwesomeIcon icon={faArrowTrendUp} />
        </div>
      </div>
      <p className="text-sm text-white leading-relaxed">
        Forecasted increase in consultations by the end of the current month.
      </p>
    </div>
  );
};

export default ForecastCards;
