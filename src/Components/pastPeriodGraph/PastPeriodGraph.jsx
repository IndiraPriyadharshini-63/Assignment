import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PastPeriodGraph = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          stepSize: 5,
        },
        grid: {
          color: "#e5e7eb",
        },
      },
    },
  };

  const data = {
    labels: ["This week", "Last week"],
    datasets: [
      {
        label: "Consultations",
        data: [20, 15],
        backgroundColor: "#a7f3d0",
        borderRadius: 4,
        barThickness: 40,
      },
      {
        label: "Orders closed",
        data: [15, 10],
        backgroundColor: "#115e56",
        borderRadius: 4,
        barThickness: 40,
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-sm font-semibold mb-2 text-gray-600 flex items-center gap-2">
        <FontAwesomeIcon icon={faChartColumn} />
        VS Past Period
      </h2>
      <div className="relative h-72 w-full">
        <Bar options={options} data={data} />
      </div>
      <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded-full inline-block"
            style={{ backgroundColor: "#a7f3d0" }}
          ></span>
          Consultations
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded-full inline-block"
            style={{ backgroundColor: "#115e56" }}
          ></span>
          Orders Closed
        </div>
      </div>
    </div>
  );
};

export default PastPeriodGraph;
