import React, { useState } from "react";
import { tableHead, tableData } from "../../dummyData";
import ArrowUpRight from "../../assets/Vector.png";

const OrderList = () => {
  const data = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    productName: `product ${index + 1}`,
    date: "21 Dec 2024",
    timeSpent: "2h 15m",
    orderValue: "$" + Math.floor(Math.random() * 1000),
    commission: "$" + Math.floor(Math.random() * 100),
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Orders</h2>

      <div className="overflow-x-auto rounded">
        <table className="min-w-full table-auto border border-gray-300 overflow-x-auto ">
          <thead>
            <tr className="bg-gray-200">
              <th className={tableHead}>Product</th>
              <th className={tableHead}>Date</th>
              <th className={tableHead}>Time Spent</th>
              <th className={tableHead}>Order Value</th>
              <th className={tableHead}>Commission</th>
              <th className={tableHead}></th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr key={row.id} className="text-center hover:bg-gray-100">
                <td className={tableData}>{row.productName}</td>
                <td className={tableData}>{row.date}</td>
                <td className={tableData}>{row.timeSpent}</td>
                <td className={tableData}>{row.orderValue}</td>
                <td className={tableData}>{row.commission}</td>
                <td className={`${tableData}`}>
                  <div className="flex gap-3">
                    View Chat
                    <img
                      className="text-[#8A94A6]"
                      src={ArrowUpRight}
                      alt="ArrowUpRight"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 border rounded ${
            currentPage === 1
              ? "text-gray-400 border-gray-300"
              : "text-blue-500 border-blue-500 hover:bg-blue-100"
          }`}
        >
          {"<"}
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "text-blue-500 border-blue-500 hover:bg-blue-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 border rounded ${
            currentPage === totalPages
              ? "text-gray-400 border-gray-300"
              : "text-blue-500 border-blue-500 hover:bg-blue-100"
          }`}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default OrderList;
