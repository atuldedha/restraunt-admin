import React from 'react'
import Form from '../components/Restaurant Dashboard/Form'

function restaurantForm() {
  return (
    <div>
      <Form />
    </div>
  )
}

export default restaurantForm


// import { useState } from "react";
// import Head from "next/head";
// import RestaurantForm from "../components/RestaurantForm";

// import {
//   RestaurantInfo,
//   RestaurantType,
//   Images,
// } from "../components/RestaurantForm/Forms";
// import FormCompleted from "../components/RestaurantForm/FormCompleted";

// const restaurantForm = () => {
//   const [formStep, setFormStep] = useState(0);

//   const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

//   const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

//   return (
//     <>
//       <Head>
//         <title>Add Restaurant</title>
//       </Head>
//       <div
//         style={{
//           backgroundImage: `url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat'
//         }}
//         className="absolute top-0 flex h-full flex-col items-center justify-center bg-white w-full"
//       >
//         <div className="relative p-10 text-center bg-white w-full h-full top-60 rounded-lg">
//           <div className='hidden md:flex justify-center items-center text-center mt-10'>
//             <div className='flex justify-center items-center flex-col p-3 basis-1/2 bg-gradient-to-r from-gray-50 to-gray-200 h-96'>
//               <img src='https://b.zmtcdn.com/merchant-onboarding/ecb5e086ee64a4b8b063011537be18171600699886.png' alt='Step 1' className='bg-[#dfdde2] p-8 h-[117px] w-[117px] rounded-full' />
//               <h1 className='font-bold text-xl mt-5 text-gray-600'>Step 1</h1>
//               <h3 className='font-semibold text-lg mt-3 text-gray-500'>Create your page on Chavanni</h3>
//               <p className='text-base text-gray-500 mt-3'>Help users discover your place by creating a listing on Chavanni</p>
//             </div>
//             <div className='flex justify-center items-center flex-col p-3 basis-1/2 bg-gradient-to-r from-gray-50 to-gray-200 h-96'>
//               <img src='https://b.zmtcdn.com/merchant-onboarding/71d998231fdaeb0bffe8ff5872edcde81600699935.png' alt='Step 2' className='bg-[#dfdde2] p-8 h-[117px] w-[117px] rounded-full ' />
//               <h1 className='font-bold text-xl mt-5 text-gray-600'>Step 2</h1>
//               <h3 className='font-semibold text-lg mt-3 text-gray-500'>Register for online ordering</h3>
//               <p className='text-base text-gray-500 mt-3'>And deliver orders to millions of customers with ease</p>

//             </div>
//             <div className='flex justify-center items-center flex-col p-3 basis-1/2 bg-gradient-to-r from-gray-50 to-gray-200 h-96'>
//               <img src='https://b.zmtcdn.com/merchant-onboarding/efdd6ac0cd160a46c97ad58d9bbd73fd1600699950.png' alt='Step 3' className='bg-[#dfdde2] p-8 h-[117px] w-[117px] rounded-full ' />
//               <h1 className='font-bold text-xl mt-5 text-gray-600'>Step 3</h1>
//               <h3 className='font-semibold text-lg mt-3 text-gray-500'>Start receiving orders online</h3>
//               <p className='text-base text-gray-500 mt-3'>Manage orders on our partner app, web dashboard or API partners</p>

//             </div>
//             </div>
         

//       <RestaurantForm currentStep={formStep} prevFormStep={prevFormStep}>
//         {formStep >= 0 && (
//           <RestaurantInfo formStep={formStep} nextFormStep={nextFormStep} />
//         )}
//         {formStep >= 1 && (
//           <RestaurantType formStep={formStep} nextFormStep={nextFormStep} />
//         )}
//         {formStep >= 2 && (
//           <Images formStep={formStep} nextFormStep={nextFormStep} />
//         )}

//         {formStep > 2 && <FormCompleted />}
//       </RestaurantForm>
//       </div>
//           </div>
          
//     </>
//   );
// };

// export default restaurantForm;
