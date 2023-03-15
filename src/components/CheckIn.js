import React, { useState } from 'react';
import { BsFillCalendarFill } from "react-icons/bs";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false)
  return (
    <div className='relative flex items-center justify-end h-full'>
      <div className='absolute z-10 pr-8 text-accent text-ba'>
        <div>
          <BsFillCalendarFill/>
        </div>
      </div>

      <DatePicker className='w-full h-full'
      selected={startDate}
      placeholderText="Check in"
      onChange={(date)=> setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
