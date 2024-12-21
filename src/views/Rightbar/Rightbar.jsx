import React from "react";
import TopNavbar from "../../Components/topNavbar/TopNavbar";
import PageHeading from "../../Components/pageHeading/PageHeading";
import Card from "../../Components/card/Card";
import OrderList from "../../Components/orderlist/OrderList";
import { CardData } from "../../dummyData";
import ConsulationGraph from "../../Components/consulationGraph/ConsulationGraph";
import PastPeriodGraph from "../../Components/pastPeriodGraph/PastPeriodGraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ForecastCards from "../../Components/forecastCard/ForecastCard";

const Rightbar = () => {
  return (
    <div className="Rightbar w-full flex-1 ">
      <TopNavbar />
      <div className=" border  gap-3 px-6 py-10  mx-10 my-9 rounded-xl">
        <div className=" flex flex-row  ">
          <h2 className="text-xl font-semibold mb-4 flex-start">At a glance</h2>

          <div className="relative inline-block text-left ">
            <button className="flex items-center justify-between w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <span>7 Days {<FontAwesomeIcon icon={faChevronDown} />}</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
          {CardData.map((card) => (
            <Card card={{ card }} key={card.id} />
          ))}
        </div>
        <div className="pageHeading">
          <PageHeading heading="Insights" size="32px" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8 px-6 gap-6 ">
          <ConsulationGraph />
          <PastPeriodGraph />
          <ForecastCards />
        </div>
        <OrderList />
      </div>
    </div>
  );
};

export default Rightbar;
