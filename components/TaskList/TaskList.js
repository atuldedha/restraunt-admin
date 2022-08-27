import {
  ArrowBack,
  ArrowDownward,
  ArrowForward,
  ArrowUpward,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TaskListCard } from "../Task List Card/TaskListCard";
import Tabs from "../Tabs/Tabs";
import { OrderDetails } from "../Order Details/OrderDetails";
import { orderData } from "../../constant/mockData";

export const TaskList = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [active, setActive] = useState(0);

  const [openOrder, setOpenOrder] = useState(false);
  const [openedItem, setOpenedItem] = useState({});

  const [newOrders, setNewOrders] = useState([]);
  const [preparingOrders, setPreparingOrders] = useState([]);
  const [processOrders, setProcessOrders] = useState([]);

  const [orderChange, setOrderChange] = useState(false);

  useEffect(() => {
    const newOrdersData = [];
    const preparingOrdersData = [];
    const processignOrdersData = [];
    orderData.map((item) => {
      if (item.tag === "new") {
        newOrdersData.push(item);
      } else if (item.tag === "preparing") {
        preparingOrdersData.push(item);
      } else {
        processignOrdersData.push(item);
      }
    });
    setNewOrders(newOrdersData);
    setPreparingOrders(preparingOrdersData);
    setProcessOrders(processignOrdersData);
  }, [orderChange]);

  const orderPreparing = (id) => {
    orderData.map((item) => {
      if (item.orderNo === id) {
        item.tag = "preparing";
      }
    });
    setOpenOrder(false);
    setOrderChange(!orderChange);
  };

  const orderProcessing = (id) => {
    orderData.map((item) => {
      if (item.orderNo === id) {
        item.tag = "out for delivery";
      }
    });
    setOpenOrder(false);
    setOrderChange(!orderChange);
  };

  const handleOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleChange = (index) => {
    setActive(index);
    setOpenOrder(false);
  };

  const handleOpenOrder = (item) => {
    setOpenOrder(true);
    setOpenedItem(item);
  };

  return (
    <div className="flex flex-col sm:flex-row w-screen h-screen">
      <div
        className={`${
          openDrawer
            ? "w-full h-60 sm:w-60 sm:h-full"
            : "w-full h-10 sm:h-full sm:w-10"
        } bg-gray-200 transition-all sm:ml-10 duration-300 ease-in-out`}
      >
        <div
          className={`${
            openDrawer ? "justify-end" : "justify-end sm:justify-center"
          } flex`}
        >
          <IconButton onClick={handleOpen}>
            {openDrawer ? (
              <div>
                <ArrowUpward className="inline-block sm:hidden" />
                <ArrowBack className="hidden sm:inline-block" />
              </div>
            ) : (
              <div>
                <ArrowDownward className="inline-block sm:hidden" />
                <ArrowForward className="hidden sm:inline-block" />
              </div>
            )}
          </IconButton>
        </div>

        <div
          className={`${
            openDrawer ? "flex flex-col sm:ml-8" : "opacity-0"
          } transition-all duration-150 p-4 ease-in-out`}
        >
          <div className="mt-2 sm:mt-10 text-center">
            <h1 className="text-black font-bold text-lg md:text-xl font-sans">
              Tasks List
            </h1>
          </div>

          <div className="flex justify-center items-center rounded-md">
            <Tabs
              active={active}
              setActive={setActive}
              handleChange={handleChange}
            />
          </div>

          {active === 0 && (
            <div className="flex ml-5 sm:flex-col sm:h-full sm:w-max overflow-scroll scrollbar-hide">
              {newOrders.map((item) => (
                <div
                  key={item.orderNo}
                  onClick={() => handleOpenOrder(item)}
                  className="ml-2 sm:ml-0"
                >
                  <TaskListCard
                    orderNo={item.orderNo}
                    price={item.totalAmount}
                    time={item.time}
                    tag={item.tag}
                  />
                </div>
              ))}
            </div>
          )}
          {active === 1 && (
            <div className="flex ml-5 sm:flex-col sm:h-full sm:w-max overflow-scroll scrollbar-hide">
              {preparingOrders.map((item) => (
                <div
                  key={item.orderNo}
                  onClick={() => handleOpenOrder(item)}
                  className="ml-2 sm:ml-0"
                >
                  <TaskListCard
                    orderNo={item.orderNo}
                    price={item.totalAmount}
                    time={item.time}
                    tag={item.tag}
                  />
                </div>
              ))}
            </div>
          )}
          {active === 2 && (
            <div className="flex ml-5 sm:flex-col sm:h-full sm:w-max overflow-scroll scrollbar-hide">
              {processOrders.map((item) => (
                <div
                  key={item.orderNo}
                  onClick={() => handleOpenOrder(item)}
                  className=""
                >
                  <TaskListCard
                    orderNo={item.orderNo}
                    price={item.totalAmount}
                    time={item.time}
                    tag={item.tag}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {openOrder && (
        <div className="flex-grow w-full">
          <OrderDetails
            orderInfo={openedItem}
            sendToPrepare={orderPreparing}
            sendToDelivery={orderProcessing}
          />
        </div>
      )}
    </div>
  );
};
