import React from 'react';
import { Link, link } from "react-router-dom"
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs"



const Room = ({ room }) => {
  const { id, image, imageLg, maxPerson, description, name, price, size } = room
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
                <BsPeople className='text-[15px]' />
              </div>
            </div>

            <div className='flex gap-x-1'>
              <div>max people</div>
              <div>{maxPerson}</div>
            </div>

          </div>
        </div>
      </div>

      {/* name and descripation */}
      <div className='text-center'>
        <Link>
          <h3 className='h3'>{name}</h3>
        </Link>
        <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>{description.slice(0,56)}</p>
      </div>

      {/* book button  */}
    <Link to={`/room/${id}`} className='btn btn-secondary btn-sm max-w-[240px] mx-auto
    '>
      Book now from ${price}
    </Link>
    </div>
  );
};
export default Room;
