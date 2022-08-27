/* eslint-disable @next/next/no-img-element */
import React from "react";

export const OrderCard = ({ name, image, price, orderedQuantity }) => {
  const itemTotalAmount = parseInt(orderedQuantity) * parseInt(price);
  return (
    <div className="flex justify-between items-center p-1">
      <div className="flex items-center basis-2/3">
        <img className="h-10 w-10 rounded" src={image} alt="RestroImage.png" />
        <span className="ml-4 text-gray-800 text-sm font-normal font-sans">
          {name}
        </span>
      </div>
      <div className="flex justify-between items-center basis-1/3">
        <span className="whitespace-nowrap text-xs font-sans font-normal">
          {orderedQuantity}
        </span>
        <span className="whitespace-nowrap text-xs font-sans font-normal">
          {price}
        </span>
        <span className="whitespace-nowrap text-xs font-sans font-normal">
          {itemTotalAmount}
        </span>
      </div>
    </div>
  );
};
