import React from 'react';
import { Link, link } from "react-router-dom"
import Star from '../Star';

// import { BsArrowsFullscreen, BsPeople } from "react-icons/bs"



const Resto = ({ mish }) => {  //
  console.log(mish, "tpam")
  const { Rate, foodtype, imgsrc, offer, seoffer, sname, star, id } = mish // disstructure
  return (
    <div className='bg-gray-300 p-2'>
      <div className='bg-white p-2 min-h-[300px] group'>

        <div className='overflow-hidden'>
          <img className='group-hover:scale-110 transition-all durration-300 w-full' src={imgsrc} alt="#" />
        </div>
        <div className='resto_info p-3'>
          <span className='resto_name text-2xl capitalize'> {sname}</span>
          <div className=' flex flex-row items-center gap-1' >
            <div className=' flex gap-1 py-2'>
              <Star stars={star} />
            </div>
            <div>
              <a href='#' className='card_rate text-md '>{Rate} </a>
            </div>
          </div>
          <h2 className='text-gray-400'>{foodtype}</h2>
          <div className='flex items-center py-2 justify-between'>
            <Link to={`/resto/${id}`}>
            <h3 className=' bg-green-600 cursor-pointer text-xs text-white flex-1 rounded-md py-2 p-1 text-center capitalize items-center '>{offer} </h3>
            </Link>
           
             <span className='card_seoffer font-semibold text-xs font-mono'> {seoffer}</span>
          
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resto;
