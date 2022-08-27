import Image from "next/image";
import React, { useState } from "react";
import RestaurantMenu from "../Restaurant Menu/RestaurantMenu";
import menu from "../../constant/menu";
import { Close, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import EditMenu from "../Edit Menu/EditMenu";

const HomePage = ({ totalOrdersRecieved }) => {
  const [open, setOpen] = useState(false);

  const handleEdit = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full ml-10 p-6">
      <h1 className="text-3xl sm:text-center text-black font-sans font-extrabold">
        Restraunt Admin
      </h1>
      <div className="flex items-center sm:mt-14 sm:justify-center">
        <Image
          height="150px"
          width="150px"
          objectFit="contain"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center mt-5">
          <h1 className="text-xl ml-2 text-black font-sans font-bold">
            Punjabi Tadka
          </h1>
          <span className="text-xl text-center text-gray-700 font-sans font-normal">
            Preet Vihar
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center mt-20 p-4">
        <span className="text-base text-gray-600 font-sans font-normal">
          Total Orders till now:
        </span>
        <h1 className="text-lg  ml-4 text-black font-sans font-bold">{56}</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full sm:w-64 justify-between items-center">
          <h1 className="text-black font-sans font-semibold text-lg ">
            Your Menu
          </h1>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleEdit}
            aria-label="close"
          >
            <Edit />
          </IconButton>
        </div>

        <div className="mt-4">
          <RestaurantMenu menu={menu} />
        </div>
      </div>

      {open && <EditMenu open={open} handleClose={handleClose} menu={menu} />}
    </div>
  );
};

export default HomePage;
