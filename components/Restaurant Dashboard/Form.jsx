/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import RestaurantImg from "./RestaurantImg";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantType from "./RestaurantType";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    restrName: "",
    restrAddress: "",
    restrPhone: "",
    stdCode: "",
    landline: "",
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    openTime: "",
    closeTime: "",
    PAN: "",
    GST: "",
    FSSAI: "",
    bankName: "",
    bankBranch: "",
    accHolderName: "",
    ACno: "",
    IFSCCode: "",
  });
  const FromTitles = [
    "Restaurant Information",
    "Restaurant Services & Timing",
    "Upload Images",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <RestaurantInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <RestaurantType formData={formData} setFormData={setFormData} />;
    } else {
      return <RestaurantImg formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="absolute top-0 flex h-full flex-col items-center justify-center bg-white w-full"
    >
      <div className="relative md:p-10 text-center bg-white w-full h-full top-60 rounded-lg">
        <div className="hidden md:flex justify-center items-center text-center mt-10">
          <div className="flex justify-center items-center flex-col p-3 basis-1/2 bg-gradient-to-r from-gray-50 to-gray-200 h-96">
            <img
              src="https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png"
              alt="Step 1"
              className="bg-[#dfdde2] p-8 h-[117px] w-[117px] rounded-full"
            />
            <h1 className="font-bold text-xl mt-5 text-gray-600">Step 1</h1>
            <h3 className="font-semibold text-lg mt-3 text-gray-500">
              Create your page on Chavanni
            </h3>
            <p className="text-base text-gray-500 mt-3">
              Help users discover your place by creating a listing on Chavanni
            </p>
          </div>
          <div className="flex justify-center items-center flex-col p-3 basis-1/2 bg-gradient-to-r from-gray-50 to-gray-200 h-96">
            <img
              src="https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png"
              alt="Step 2"
              className="bg-[#dfdde2] p-8 h-[117px] w-[117px] rounded-full "
            />
            <h1 className="font-bold text-xl mt-5 text-gray-600">Step 2</h1>
            <h3 className="font-semibold text-lg mt-3 text-gray-500">
              Register for online ordering
            </h3>
            <p className="text-base text-gray-500 mt-3">
              And deliver orders to millions of customers with ease
            </p>
          </div>
          <div className="flex justify-center items-center flex-col p-3 basis-1/2 bg-gradient-to-r from-gray-50 to-gray-200 h-96">
            <img
              src="https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png"
              alt="Step 3"
              className="bg-[#dfdde2] p-8 h-[117px] w-[117px] rounded-full "
            />
            <h1 className="font-bold text-xl mt-5 text-gray-600">Step 3</h1>
            <h3 className="font-semibold text-lg mt-3 text-gray-500">
              Start receiving orders online
            </h3>
            <p className="text-base text-gray-500 mt-3">
              Manage orders on our partner app, web dashboard or API partners
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="mt-12 text-xl font-bold">{FromTitles[page]}</h1>
          <div className="my-4 h-1 md:h-3 w-[95%] md:w-full bg-yellow-100 md:my-10">
            <div
              className="h-full w-1/3 bg-purple-600"
              style={{
                width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
              }}
            ></div>
          </div>
          <div className="flex flex-col items-start mt-7 w-full md:w-3/4">
            {PageDisplay()}

            <div className="flex justify-around items-center mb-32 md:my-12 w-full">
              <button
                className="my-2 mx-4 rounded-md bg-[#843cd4] font-normal text-white shadow-md hover:cursor-pointer hover:bg-[#642ea2] focus:border focus:border-blue-900 focus:outline-none w-24 md:w-60 md:h-9"
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
              <button
                className="my-2 mx-4 rounded-md bg-[#843cd4] font-normal text-white shadow-md hover:cursor-pointer hover:bg-[#642ea2] focus:border focus:border-blue-900 focus:outline-none w-24 md:w-60 md:h-9"
                onClick={() => {
                  if (page === FromTitles.length - 1) {
                    alert(`Form Submitted ${JSON.stringify(formData)}`);

                    console.log(formData);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FromTitles.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
