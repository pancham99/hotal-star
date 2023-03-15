import React from 'react';
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs"



const Room = ({ room }) => {
  const { id, image, imageLg, maxPerson, name, price, size } = room
  return (
    <div className='bg-white shadow-2xl mb-4 min-h-[500px] group'>

      {/* image section */}
      <div className='overflow-hidden'>
        <img className='group-hover:scale-110 transition-all durration-300 w-full' src={image} alt="#" />
      </div>

      {/* details section */}
      <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex
       justify-center items-center font-tertiary tracking-[1px] font-medium text-base'>
        <div className='flex justify-between w-[80%]'>
          {/* room size */}
          <div className='flex justify-between items-center gap-x-2'>
            <div className='text-center'>
              <BsArrowsFullscreen className='text-[15px]' />
            </div>

            <div className='flex gap-x-1'>
              <div>size</div>
              <div>{size}m2</div>
            </div>
          </div>
          {/* room capacity */}
          <div className='flex justify-between w-[80%]'>

              <div className='flex items-center gap-x-2'>
                <div className='text-accent'>
                  <BsPeople className='text-[15px]'/>
                </div>
              </div>

              <div className='flex gap-x-1'>
                <div>max people</div>
                <div>{maxPerson}</div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Room;
