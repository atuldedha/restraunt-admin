import React from "react";
import { OrderCard } from "../Order Card/OrderCard";
import { orderData } from "../../constant/mockData";

export const OrderDetails = ({ orderInfo, sendToPrepare, sendToDelivery }) => {
  const buttonText =
    orderInfo.tag === "new"
      ? "Accept Order"
      : orderInfo.tag === "preparing"
      ? "Dispatched"
      : "Waiting for delivery";

  const handleClick = (id) => {
    console.log(id);
    if (orderInfo.tag === "new") {
      sendToPrepare(id);
    } else if (orderInfo.tag === "preparing") {
      sendToDelivery(id);
    }
  };
  return (
    <div className="bg-white w-full rounded-md p-2">
      <div className="flex flex-col p-2 w-full bg-gray-300">
        <h1 className="text-base sm:text-lg ml-8 mt-2 sm:mt-4 text-black font-semibold font-sans">
          Punjabi Tadka
        </h1>
        <span className="text-xs ml-8 text-gray-500 font-normal font-sans">
          Preet vihar
        </span>
      </div>

      <h1 className="text-lg ml-8 text-black font-semibold font-sans mt-2">
        Order Info
      </h1>

      <div className="flex items-center justify-between mt-1 sm:mt-2 p-2">
        <div className="flex flex-col ml-8 p-1">
          <span className="font-sans text-sm text-gray-600 font-normal">
            Total Items
          </span>
          <span className="font-sans text-xs text-gray-500 font-normal">
            {orderInfo.totalItemsOrdered}
          </span>
        </div>
        <div className="flex flex-col p-1">
          <span className="font-sans text-sm text-gray-600 font-normal">
            Address
          </span>
          <span className="font-sans text-xs text-gray-500 font-normal">
            {orderInfo.deliveryAddress}
          </span>
        </div>
        <div className="flex flex-col p-1">
          <span className="font-sans text-sm text-gray-600 font-normal">
            {orderInfo.name}
          </span>
          <span className="font-sans text-xs text-gray-500 font-normal">
            {orderInfo.phoneNumber}
          </span>
        </div>
      </div>
      <div className="flex justify-end mt-2 sm:mt-4 p-1">
        <div className="flex justify-between items-center basis-1/3">
          <span className="whitespace-nowrap text-black text-sm sm:text-base font-sans font-light sm:font-normal">
            Qty
          </span>
          <span className="whitespace-nowrap text-black text-sm sm:text-base font-sans font-light sm:font-normal">
            Amount
          </span>
          <span className="whitespace-nowrap text-black text-sm sm:text-base font-sans font-light sm:font-normal">
            Total
          </span>
        </div>
      </div>

      <div className="ml-10">
        {orderInfo?.itemOrdrered?.map((item, index) => (
          <div key={index}>
            <OrderCard
              name={item.name + "(" + item.quantity + ")"}
              image={item.image}
              price={item.price}
              orderedQuantity={item.quantityOrdered}
            />
          </div>
        ))}
      </div>
      <div className="w-full border border-gray-200 mt-4"></div>
      <div className="flex sm:flex-col p-2 mt-2 items-center justify-between sm:justify-end sm:items-end">
        <span className="text-base ml-10 font-sans mr-1 mt-2 sm:mr-0 sm:mt-0 font-normal text-black">
          Total Amount: ₹{orderInfo.totalAmount}
        </span>
        <button
          onClick={() => handleClick(orderInfo.orderNo)}
          className="mt-3 p-2 bg-blue-500 text-white rounded-md text-sm font-sans hover:shadow-md"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
