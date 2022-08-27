import React from "react";

const DeliveryOrderCard = ({ orderDetails }) => {
  return (
    <div className="w-44 flex flex-col h-44 bg-white shadow-md p-4 mx-2 rounded-sm">
      <div className="flex w-full justify-end">
        <span className="text-green-500 text-xs font-sans font-normal text-end">
          Delivered
        </span>
      </div>
      <div className="flex flex-col p-2 ">
        <span className="text-gray-700 text-sm font-normal font-sans">
          Order No: {orderDetails.orderNo}
        </span>
        <span className="text-gray-700 mt-2 text-sm font-normal font-sans">
          Name: {orderDetails.name.toUpperCase()}
        </span>
        <span className="text-gray-700 mt-2 text-sm font-normal font-sans">
          Amount: {orderDetails.totalAmount}
        </span>
        <span className="text-gray-700 mt-2 text-sm font-normal font-sans">
          Order at: today
        </span>
      </div>
    </div>
  );
};

export default DeliveryOrderCard;
