import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ConsulationGraph = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#e5e7eb",
        },
        ticks: {
          stepSize: 10,
        },
      },
      y1: {
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        type: "line",
        label: "Incoming",
        data: [30, 35, 40, 50, 45, 55, 60],
        borderColor: "#64748b",
        borderDash: [5, 5],
        tension: 0.4,
        fill: false,
        yAxisID: "y",
      },
      {
        type: "line",
        label: "Answered",
        data: [25, 30, 35, 45, 40, 50, 55],
        borderColor: "#14b8a6",
        tension: 0.4,
        fill: false,
        yAxisID: "y",
      },
      {
        type: "bar",
        label: "Experts online",
        data: [15, 20, 25, 18, 20, 22, 19],
        backgroundColor: "#fde68a",
        borderRadius: 4,
        yAxisID: "y1",
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-sm font-semibold mb-2 text-gray-600 flex items-center gap-2">
        <FontAwesomeIcon icon={faComment} />
        VS Past Period
      </h2>
      <div className="relative h-96 w-full">
        <Bar options={options} data={data} />
      </div>
      <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded-full bg-gray-400 inline-block"
            style={{ backgroundColor: "#64748b" }}
          ></span>{" "}
          Incoming
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded-full bg-teal-500 inline-block"
            style={{ backgroundColor: "#14b8a6" }}
          ></span>{" "}
          Answered
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded-full bg-yellow-300 inline-block"
            style={{ backgroundColor: "#fde68a" }}
          ></span>{" "}
          Experts Online
        </div>
      </div>
    </div>
  );
};

export default ConsulationGraph;
