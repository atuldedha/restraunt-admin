import React from "react";

const RestaurantMenu = ({ menu }) => {
  return (
    <div className="flex flex-col w-64 p-2">
      <div className="flex w-full justify-between items-center">
        <span className="text-xl text-black font-sans font-semibold">
          Dish Name
        </span>
        <span className="text-xl text-black font-sans font-semibold">
          Price
        </span>
      </div>
      <div className="flex flex-col justify-between items-center mt-4 ">
        {menu?.map((dish, index) => (
          <div key={index} className="flex items-center justify-between w-full">
            {dish.customizationAvailable ? (
              <div className="w-full">
                {dish.customizations.map((item, index) => (
                  <div key={index}>
                    {item.values.map((data, value) => (
                      <div key={value} className="flex justify-between">
                        <span>
                          {dish.dishName} {data.name}
                        </span>
                        <span>{data.price}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <>
                <span>{dish.dishName}</span>
                <span>{dish.dishPrice}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
