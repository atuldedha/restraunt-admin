import {
  AllInbox,
  CurrencyRupee,
  DeliveryDining,
  Home,
  Menu,
  Person,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useState } from "react";
import { SidebarOptions } from "./SidebarOptions";

export const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 10;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) setOpenDrawer(false);
    else if (isRightSwipe) setOpenDrawer(true);
  };

  return (
    <div
      className={`${
        openDrawer ? "w-32 ease-in-out" : "w-10"
      } bg-gray-800 h-full flex flex-col transition-all duration-500`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex justify-between">
        <div>
          <IconButton
            className="text-gray-300 "
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <Menu />
          </IconButton>
        </div>

        <div className={`${openDrawer ? "inline-block" : "hidden"}`}>
          <Avatar
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="RestrauntAdmin.jpg"
          />
        </div>
      </div>

      <div
        className={`${
          openDrawer ? "w-32 h-screen" : "w-10 h-screen"
        } flex flex-col items-center justify-center transition-all duration-600 ease-in-out`}
      >
        <SidebarOptions Icon={Home} title="Home" drawerOpen={openDrawer} />
        <SidebarOptions
          Icon={DeliveryDining}
          title="Orders"
          drawerOpen={openDrawer}
        />
        <SidebarOptions
          Icon={AllInbox}
          title="Delivered"
          drawerOpen={openDrawer}
        />
        <SidebarOptions Icon={Person} title="Account" drawerOpen={openDrawer} />
      </div>
    </div>
  );
};
