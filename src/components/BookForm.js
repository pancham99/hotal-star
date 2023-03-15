import React from 'react';
import CheckIn from './CheckIn';
import CheckOut from './CheckOut';

const BookForm = () => {
  return (
    <form className='h-[300px] w-full lg:h-[70px]'>
      <div className='flex flex-col w-full h-full lg:flex-row'>

        <div className='flex-1 border-r'>
          <CheckIn />
        </div>

        <div className='flex-1 border-r'>
          <CheckOut/>
        </div>

        <div className='flex-1 border-r'>
          <CheckOut/>
        </div>

        <div className='flex-1 border-r'>
          <CheckOut/>
        </div>
        <button className='btn btn-primary'>Check now</button>
      </div>
    </form>
  );
};

export default BookForm;
