/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Close } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { OrderCard } from "../Order Card/OrderCard";
import { OrderDetails } from "../Order Details/OrderDetails";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeliveredOrderInfo = ({ open, handleClose, orderInfo }) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Order Details
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className="p-4">
          <div className="flex items-center justify-between mt-1 sm:mt-2 p-2">
            <div className="flex flex-col p-1">
              <span className="font-sans text-base text-gray-600 font-normal">
                Total Items
              </span>
              <span className="font-sans text-base text-gray-500 font-normal">
                {orderInfo.totalItemsOrdered}
              </span>
            </div>
            <div className="flex flex-col p-1">
              <span className="font-sans text-base text-gray-600 font-normal">
                Address
              </span>
              <span className="font-sans text-base text-gray-500 font-normal">
                {orderInfo.deliveryAddress}
              </span>
            </div>
            <div className="flex flex-col p-1">
              <span className="font-sans text-base text-gray-600 font-normal">
                {orderInfo.name}
              </span>
              <span className="font-sans text-base text-gray-500 font-normal">
                {orderInfo.phoneNumber}
              </span>
            </div>
          </div>
          <div className="flex justify-end mt-2 sm:mt-4 p-1">
            <div className="flex justify-between items-center basis-1/3">
              <span className="whitespace-nowrap text-black text-sm sm:text-lg font-sans font-normal">
                Qty
              </span>
              <span className="whitespace-nowrap text-black text-sm sm:text-lg font-sans font-normal">
                Amount
              </span>
              <span className="whitespace-nowrap text-black text-sm sm:text-lg font-sans font-normal">
                Total
              </span>
            </div>
          </div>

          <div className="">
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
          <div className="text-center mt-10">
            <span className="text-lg font-sans font-semibold text-black">
              Total Amount: ₹{orderInfo.totalAmount}
            </span>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeliveredOrderInfo;
