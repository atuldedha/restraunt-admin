import React, { useEffect, useState } from 'react';
import TimeKeeper from 'react-timekeeper';

const RestaurantType = ({ formData, setFormData }) => {

  const [checkedItems, setCheckedItems] = useState({});
  const [type, setType] = useState('');
  const [openTime, setOpenTime] = useState('08:00 am')
  const [closeTime, setCloseTime] = useState('10:00 pm')
  const [showOpenTime, setShowOpenTime] = useState(true)
  const [showCloseTime, setShowCloseTime] = useState(true)

  const checkboxes = [
    {
      key: 'checkBox1',
      name: 'Bakery',
    },
    {
      key: 'checkBox2',
      name: 'Bar',
    },
    {
      key: 'checkBox3',
      name: 'Beverage Shop',
    },
    {
      key: 'checkBox4',
      name: 'Cafe',
    },
    {
      key: 'checkBox5',
      name: 'Club',
    },
    {
      key: 'checkBox6',
      name: 'Fine Dining',
    }, {
      key: 'checkBox7',
      name: 'Confectionery',
    },
    {
      key: 'checkBox8',
      name: 'Food Court',
    },
    {
      key: 'checkBox9',
      name: 'Food Truck',
    },
    {
      key: 'checkBox10',
      name: 'Sweet Shop',
    },
    {
      key: 'checkBox11',
      name: 'Dhaba',
    },
    {
      key: 'checkBox12',
      name: 'Pub',
    },
    {
      key: 'checkBox13',
      name: 'Bhojanalya',
    }
  ];

  const cuisines = [
    {
      key: 'cuisine1',
      name: 'Asian Fusion',
    },
    {
      key: 'cuisine2',
      name: 'BBQ',
    },
    {
      key: 'cuisine3',
      name: 'Chinese',
    },
    {
      key: 'cuisine4',
      name: 'North Indian',
    },
    {
      key: 'cuisine5',
      name: 'South Indian',
    },
    {
      key: 'cuisine6',
      name: 'Korean',
    }, {
      key: 'cuisine7',
      name: 'French',
    },
    {
      key: 'cuisine8',
      name: 'Drinks only',
    },
    {
      key: 'cuisine9',
      name: 'Street Food',
    },
    {
      key: 'cuisine10',
      name: 'Salad',
    },
    {
      key: 'cuisine11',
      name: 'Oriental',
    },
    {
      key: 'cuisine12',
      name: 'Continental',
    },
    {
      key: 'cuisine13',
      name: 'Mexican',
    }
  ];

  const days = [
    {
      key: '1',
      name: 'Monday',
    },
    {
      key: '2',
      name: 'Tueday',
    },
    {
      key: '3',
      name: 'Wednesday',
    },
    {
      key: '4',
      name: 'Thursday',
    },
    {
      key: '5',
      name: 'Friday',
    },
    {
      key: '6',
      name: 'Saturday',
    },
    {
      key: '7',
      name: 'Sunday',
    },
  ]

  const handleCheck = (event) => {
    setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
  }

  useEffect(() => {
    console.log("checkedItems: ", checkedItems);
  }, [checkedItems]);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleRadio = (e) => {
    setType(e.target.value);
  }


  return (
    <>
      <div className='md:border-[1px] md:border-gray-200 rounded-lg w-full p-2 md:p-7 mb-4'>

        <p className='text-left text-lg font-semibold mb-4'>Restaurant Services</p>
        <form className='flex flex-col p-3'>
          <div className='flex'>
            <input type="radio" value="delivery" id="delivery"
              onChange={handleRadio} name="type" className='mr-3' />
            <label htmlFor="delivery">Delivery only</label>
          </div>
          <div className='flex'>
            <input type="radio" value="dine-in" id="dine-in"
              onChange={handleRadio} name="type" className='mr-3' />
            <label htmlFor="dine-in">Dine-in only</label>
          </div>
          <div className='flex'>
            <input type="radio" value="both" id="both"
              onChange={handleRadio} name="type" className='mr-3' />
            <label htmlFor="both">Both Delivery and Dine-in</label>
          </div>
        </form>
        <p className='text-left text-lg mt-4 '>How do you describe your avenue?</p>
        <div className='flex flex-wrap justify-between items-center bg-purple-100 w-full p-3 rounded-lg'>{
          checkboxes.map(item => (
            <label
              className="w-1/2 md:w-1/3 flex justify-start"
              key={item.key}>
              <input type='checkbox' name={item.name} checked={checkedItems[item.name]} onChange={handleCheck}
                className='m-2'
              />
              {item.name}
            </label>
          ))
        }
        </div>
      </div>

      <div className='md:border-[1px] md:border-gray-200 rounded-lg w-full p-2 md:p-7 mb-4'>
        <p className='text-left text-lg font-semibold mb-4'>Type of Cuisines</p>

        <div className='flex flex-wrap justify-between items-center bg-purple-100 w-full p-3 rounded-lg'>{
          cuisines.map(item => (
            <label
              className="w-1/2 md:w-1/3 flex justify-start"
              key={item.key}>
              <input type='checkbox' name={item.name} checked={checkedItems[item.name]} onChange={handleCheck}
                className='m-2'
              />
              {item.name}
            </label>
          ))
        }
        </div>
      </div>
      <div className='md:border-[1px] md:border-gray-200 rounded-lg w-full p-2 md:p-7 mb-4'>
        <p className=' text-lg font-semibold text-left'>Restaurant Operational Hours</p>
        <div className={`${!showOpenTime ? 'my-8 bg-purple-100 p-3' : 'my-0'} flex justify-center items-center`}>
          <p className={`${!showOpenTime ? 'hidden' : 'flex'} basis-28 ml-4`}>Opens at</p>
          {showOpenTime &&
            <input
              name="openTime"
              value={formData.openTime}
              onChange={handleChange}
              placeholder="08:00 AM"
              type="text"
              required
              onClick={() => setShowOpenTime(false)}
              className=" m-2 w-32 md:w-full p-2 border-[1px] border-gray-200 rounded-lg"
            />
          }
          {!showOpenTime &&
            <TimeKeeper
              time={openTime}
              onChange={(newTime) => setOpenTime(newTime.formatted12)}
              onDoneClick={() => setShowOpenTime(true)}
              switchToMinuteOnHourSelect
            />
          }
        </div>

        <div className={`${!showCloseTime ? 'my-8 bg-purple-100 p-3' : 'my-0'} flex justify-center items-center`}>
          <p className={`${!showCloseTime ? 'hidden' : 'flex'} basis-28 ml-4`}>Closes at</p>
          
          {showCloseTime &&
            <input
              name="openTime"
              value={formData.closeTime}
              onChange={handleChange}
              placeholder="11:00 PM"
              type="text"
              required
              onClick={() => setShowCloseTime(false)}
              className=" m-2 w-32 md:w-full p-2 border-[1px] border-gray-200 rounded-lg"
            />
          }

          {!showCloseTime &&
            <TimeKeeper
              time={closeTime}
              onChange={(newTime) => setCloseTime(newTime.formatted12)}
              onDoneClick={() => setShowCloseTime(true)}
              switchToMinuteOnHourSelect
            />
          }
         
        </div>

        <p className='text-left text-lg mt-4 '>Select Working Days</p>
        <div className='flex flex-wrap justify-between items-center bg-purple-100 w-full p-3 rounded-lg'>{
          days.map(item => (
            <label
              className="w-1/2 flex justify-start"
              key={item.key}>
              <input type='checkbox' name={item.name} checked={checkedItems[item.name]} onChange={handleCheck}
                className='m-2'
              />
              {item.name}
            </label>
          ))
        }
        </div>

      </div>
    </>
  )
}

export default RestaurantType