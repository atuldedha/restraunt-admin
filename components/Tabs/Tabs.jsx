import React from 'react'

function Tabs({active, handleChange}) {
  const tabsData =  ["New", "Preparing", "Delivery"];
  
  return (
    <div className='border border-gray-300 rounded-md'>
        <div className='flex w-full justify-between items-center bg-gray-300'>
          {tabsData.map((tab, index) => (
            <div key={index} className='p-2'>
              <button className={`text-sm font-medium ${active === index && "text-base border-b-blue-500 text-blue-500 transition-all duration-150 ease-in-out"} hover:cursor-pointer`}
                onClick={()=>handleChange(index)}
              >
                {tab}
              </button>
            </div>
                  
          ))}
      </div>
    </div>
  )
}

export default Tabs
