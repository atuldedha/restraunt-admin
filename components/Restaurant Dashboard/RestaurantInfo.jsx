import { FormatIndentDecreaseSharp } from '@mui/icons-material'
import { formControlClasses } from '@mui/material'
import React from 'react'

const RestaurantInfo = ({formData, setFormData}) => {
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

  return (
    <>
    <div className='flex flex-col md:border-[1px] md:border-gray-200 rounded-lg w-full p-2 md:p-7 mb-4'>

        <p className='text-left text-lg font-semibold mb-4'>Restaurant details</p>

        <input
           name='restrName'
            value={formData.restrName}
            onChange={handleChange}
            placeholder="Restaurant Name"
            type="text"
            required
            className="m-2 w-[95%] p-2 md:w-full border-[1px] border-gray-200 rounded-lg"
        />

        <input
            name="restrAddress"
            value={formData.restrAddress}
            onChange={handleChange}
            placeholder="Restaurant complete address"
            type="text"
            className="m-2 w-[95%] p-2 md:w-full border-[1px] border-gray-200 rounded-lg"
        />
    </div>

    <div className='md:border-[1px] md:border-gray-200 rounded-lg w-full p-2 md:p-7 mb-4'>
        <p className='text-left text-lg font-semibold mb-4'>Contact number at Restaurant</p>

        <div className="flex">
            <input value="+91" disabled className="bg-white mx-2 w-12" />
            <p className='my-2 mr-4 text-gray-300 p-2'>|</p>
            <input
                name="restrPhone"
                value={formData.restrPhone}
                onChange={handleChange}
                type="number"
                placeholder="Mobile number"
                className="m-2 w-full p-2 border-[1px] border-gray-200 rounded-lg"
            />
            
            <button className='hidden md:flex m-auto py-2 px-8 rounded-md bg-[#843cd4] font-normal text-white shadow-md hover:cursor-pointer hover:bg-[#642ea2] focus:border focus:border-blue-900 focus:outline-none'>Verify</button>
        </div>

        <p className='flex md:hidden underline hover:text-purple-800 justify-end w-full pr-4'>Verify</p>
        

        <p className='text-center text-base text-gray-400 my-3'>----------------  or share landline number  ----------------</p>

        <div className="flex">
            <input
                name='stdCode'
                value={formData.stdCode}
                onChange={handleChange}
                type="number"
                placeholder="STD code"
                className="m-2 w-32 p-2 border-[1px] border-gray-200 rounded-lg" />
            <p className='my-2 mr-1 text-gray-300 p-2 '>|</p>
            <input
                name="landline"
                value={formData.landline}
                onChange={handleChange}
                type="number"
                placeholder="Landline number"
                className="m-2 w-full p-2 border-[1px] border-gray-200 rounded-lg"
            />
<button className='hidden md:flex m-auto py-2 px-8 rounded-md bg-[#843cd4] font-normal text-white shadow-md hover:cursor-pointer hover:bg-[#642ea2] focus:border focus:border-blue-900 focus:outline-none'>Verify</button>
        </div>
        <p className='flex md:hidden underline hover:text-purple-800 justify-end w-full pr-4'>Verify</p>
    </div>
    <div className='flex flex-col md:border-[1px] md:border-gray-200 rounded-lg w-full p-2 md:p-7 mb-4'>
        <p className=' text-lg font-semibold text-left mb-4'>Restaurant Owner Details</p>

        <input
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            placeholder="Restaurant owner full name"
            type="text"
            required
            className=" m-2 w-[95%] md:w-full p-2 border-[1px] border-gray-200 rounded-lg"
        />

        <input
            name="ownerEmail"
            value={formData.ownerEmail}
            onChange={handleChange}
            placeholder="Restaurant owner email address"
            type="text"
            className="m-2 w-[95%] md:w-full p-2 border-[1px] border-gray-200 rounded-lg"
        />

        <div className="flex">
            <input value="+91" disabled className="bg-white mx-2 w-12" />
            <p className='my-2 mr-4 text-gray-300 p-2'>|</p>
            <input
                name="ownerPhone"
                value={formData.ownerPhone}
                onChange={handleChange}
                type="number"
                placeholder="Mobile number of owner"
                className="m-2 w-full p-2 border-[1px] border-gray-200 rounded-lg"
            />
<button className='hidden md:flex m-auto py-2 px-8 rounded-md bg-[#843cd4] font-normal text-white shadow-md hover:cursor-pointer hover:bg-[#642ea2] focus:border focus:border-blue-900 focus:outline-none'>Verify</button>
        </div>
        <p className='flex md:hidden underline hover:text-purple-800 justify-end w-full pr-4'>Verify</p>
    </div>        
    </>
  )
}

export default RestaurantInfo