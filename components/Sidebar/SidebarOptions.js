import { CurrencyRupee, Home, Person, Router } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export const SidebarOptions = ({ Icon, title, drawerOpen }) => {
  const router = useRouter();

  const hanldeClick = () => {
    if (title === "Home") {
      router.replace("/");
    } else if (title === "Orders") {
      router.push("/orders");
    } else if (title === "Delivered") {
      router.push("/deliveries");
    }
  };
  if (!drawerOpen) {
    return (
      <div className="hover:cursor-pointer">
        <IconButton>
          <Icon className="text-gray-500" />
        </IconButton>
      </div>
    );
  }
  return (
    <div
      className="flex w-full p-3 items-center mt-1 sm:mt-4 hover:cursor-pointer hover:bg-gray-200"
      onClick={hanldeClick}
    >
      <Icon className="text-gray-500" />
      <span className="text-gray-500 ml-3 whitespace-nowrap text-sm font-sans font-medium">
        {title}
      </span>
    </div>
  );
};
