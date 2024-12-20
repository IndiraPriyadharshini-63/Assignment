import React from "react";
import { Orders, tableHead, tableData } from "../../dummyData";

const OrderList = () => {
  return (
    <div className="block w-full overflow-x-auto  border border-[#DCDFE4] rounded-[8px] ">
      <table className="items-center w-full bg-transparent border-collapse ">
        <thead>
          <tr className="bg-gray-50">
            <th className={tableHead}>Product Name</th>
            <th className={tableHead}>Date</th>
            <th className={tableHead}>Time Spend</th>
            <th className={tableHead}>Order Value</th>
            <th className={tableHead}>Commission</th>
            <th className={tableHead}></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {Orders.map((order, index) => (
            <tr key={index} className="text-[#212636]">
              <td className={tableData}>{order.productName}</td>
              <td className={tableData}>{order.date}</td>
              <td className={tableData}>{order.timeSpent}</td>
              <td className={tableData}>{order.orderValue}</td>
              <td className={tableData}>{order.commision}</td>
              <td className={tableData}>View Chat</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
