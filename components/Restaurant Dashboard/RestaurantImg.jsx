import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const RestaurantImg = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <>
      <div className='md:border-[1px] md:border-gray-200 rounded-lg w-full p-2 md:p-7 mb-4'>

        <p className='text-left text-lg font-semibold mb-4'>Restaurant images</p>
        <div className='flex flex-col justify-center items-center border-2 md:border-gray-200 border-dashed rounded-lg w-full p-2 md:p-7 mb-4'>
          <CloudUploadIcon className='text-purple-100 w-20 h-20' />
          <button className='hidden md:flex m-auto py-2 px-8 rounded-md bg-[#843cd4] font-normal text-white shadow-md hover:cursor-pointer hover:bg-[#642ea2] focus:border focus:border-blue-900 focus:outline-none'>Choose Files</button>
          <p className='flex mb-2 md:hidden underline hover:text-purple-800 justify-center w-full pr-4'>Choose Files</p>
          <p className='hidden md:flex text-[#843cd4] my-3'>Or drag them here.</p>
        </div>


      </div>

      <div className='md:border-[1px] md:border-gray-200 rounded-lg w-full p-2 md:p-7 mb-4'>
        <p className='text-left text-lg font-semibold mb-4'>Food Images</p>
        <div className='flex flex-col justify-center items-center border-2 md:border-gray-200 border-dashed rounded-lg w-full p-2 md:p-7 mb-4'>
          <CloudUploadIcon className='text-purple-100 w-20 h-20' />
          <button className='hidden md:flex m-auto py-2 px-8 rounded-md bg-[#843cd4] font-normal text-white shadow-md hover:cursor-pointer hover:bg-[#642ea2] focus:border focus:border-blue-900 focus:outline-none'>Choose Files</button>
          <p className='flex mb-2 md:hidden underline hover:text-purple-800 justify-center w-full pr-4'>Choose Files</p>
          <p className='hidden md:flex text-[#843cd4] my-3'>Or drag them here.</p>
        </div>
      </div>

      <div className='md:border-[1px] md:border-gray-200 rounded-lg w-full p-2 md:p-7 mb-4'>
        <p className='text-left text-lg font-semibold mb-4'>Odering Menu Images</p>
        <div className='flex flex-col justify-center items-center border-2 md:border-gray-200 border-dashed rounded-lg w-full p-2 md:p-7 mb-4'>
          <CloudUploadIcon className='text-purple-100 w-20 h-20' />
          <button className='hidden md:flex m-auto py-2 px-8 rounded-md bg-[#843cd4] font-normal text-white shadow-md hover:cursor-pointer hover:bg-[#642ea2] focus:border focus:border-blue-900 focus:outline-none'>Choose Files</button>
          <p className='flex mb-2 md:hidden underline hover:text-purple-800 justify-center w-full pr-4'>Choose Files</p>
          <p className='hidden md:flex text-[#843cd4] my-3'>Or drag them here.</p>
        </div>
      </div>

      <div className='md:border-[1px] md:border-gray-200 rounded-lg w-full p-2 md:p-7 mb-4'>
        <p className='text-left text-lg font-semibold mb-4'>Certificates and Bank Details</p>
        <input
          name="PAN"
          value={formData.PAN}
          onChange={handleChange}
          type="text"
          placeholder="PAN Number of the owner"
          className="m-2 w-full p-2 border-[1px] border-gray-200 rounded-lg"
        />

        <input
          name="GST"
          value={formData.GST}
          onChange={handleChange}
          type="text"
          placeholder="GST Certificate Number"
          className="m-2 w-full p-2 border-[1px] border-gray-200 rounded-lg"
        />

        <input
          name="FSSAI"
          value={formData.FSSAI}
          onChange={handleChange}
          type="text"
          placeholder="FSSAI Certificate Number"
          className="m-2 w-full p-2 border-[1px] border-gray-200 rounded-lg"
        />

        <p className='text-left text-lg mt-4 '>Bank Account Details</p>
        <input
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
          type="text"
          placeholder="Name of the Bank"
          className="m-2 w-full p-2 border-[1px] border-gray-200 rounded-lg"
        />

        <input
          name="bankBranch"
          value={formData.bankBranch}
          onChange={handleChange}
          type="text"
          placeholder="Branch"
          className="m-2 w-full p-2 border-[1px] border-gray-200 rounded-lg"
        />


        <input
          name="IFSCCode"
          value={formData.IFSCCode}
          onChange={handleChange}
          type="text"
          placeholder="IFSC Code"
          className="m-2 w-full p-2 border-[1px] border-gray-200 rounded-lg"
        />

        <input
          name="accHolderName"
          value={formData.accHolderName}
          onChange={handleChange}
          type="text"
          placeholder="Acccount holder name"
          className="m-2 w-full p-2 border-[1px] border-gray-200 rounded-lg"
        />


        <input
          name="ACno"
          value={formData.ACno}
          onChange={handleChange}
          type="text"
          placeholder="Acccount number"
          className="m-2 w-full p-2 border-[1px] border-gray-200 rounded-lg"
        />

      </div>

    </>
  )
}

export default RestaurantImg