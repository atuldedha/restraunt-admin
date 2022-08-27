import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import DeliveredOrder from "../components/Delivered Order/DeliveredOrder";
import HomePage from "../components/Home Page/HomePage";
import { OrderDetails } from "../components/Order Details/OrderDetails";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { TaskList } from "../components/TaskList/TaskList";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Restraunt Admin</title>
      </Head>

      <div className="flex ml-10 p-10">
        <HomePage />
      </div>
    </div>
  );
}
