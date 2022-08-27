import React from "react";

export const TaskListCard = ({ orderNo, time, price, tag }) => {
  return (
    <div className="flex relative w-56 sm:w-36 items-center hover:cursor-pointer justify-between bg-gray-100 shadow-md rounded-md p-4 mt-2">
      <div
        className={`${
          tag === "new" ? "text-green-500" : "text-gray-800"
        } absolute right-2 top-1 animate-bounce text-xs font-sans font-normal`}
      >
        {tag}
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-sm whitespace-normal text-gray-700 font-sans font-medium">
          Order No:
        </span>
        <span className="text-sm w-14 whitespace-normal text-gray-700 font-sans font-medium">
          #{orderNo}
        </span>
        <span className="text-xs whitespace-nowrap text-gray-600 font-sans font-normal">
          {time}
        </span>
      </div>
      <div>
        <span className="text-xs whitespace-nowrap text-gray-600 font-sans font-normal">
          ₹{price}
        </span>
      </div>
    </div>
  );
};
