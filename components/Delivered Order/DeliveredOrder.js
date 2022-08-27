import React, { useEffect, useState } from "react";
import { orderData } from "../../constant/mockData";
import DeliveredOrderInfo from "../Delivered Order Info/DeliveredOrderInfo";
import DeliveryOrderCard from "../Delivery Order Card/DeliveryOrderCard";

const DeliveredOrder = () => {
  const [deliveredOrder, setDeliveredOrder] = useState([]);

  const [orderInfo, setOrderInfo] = useState({});
  const [showOrderInfo, setShowOrderInfo] = useState(false);

  useEffect(() => {
    const deliveredData = [];
    orderData.map(
      (item) => item.tag === "delivered" && deliveredData.push(item)
    );
    setDeliveredOrder(deliveredData);
  }, []);

  const handleClick = (order) => {
    console.log("Go To Order Info");
    setOrderInfo(order);
    setShowOrderInfo(true);
  };

  const handleClose = () => {
    setOrderInfo({});
    setShowOrderInfo(false);
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {deliveredOrder.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(item)}
          className="hover:cursor-pointer hover:shadow-md"
        >
          <DeliveryOrderCard orderDetails={item} sno={index} />
        </div>
      ))}

      {showOrderInfo && (
        <div>
          <DeliveredOrderInfo
            open={showOrderInfo}
            handleClose={handleClose}
            orderInfo={orderInfo}
          />
        </div>
      )}
    </div>
  );
};

export default DeliveredOrder;
