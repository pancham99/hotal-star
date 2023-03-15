import React from 'react';
import { Link, link } from "react-router-dom"
// import { BsArrowsFullscreen, BsPeople } from "react-icons/bs"



const Resto = ({rest}) => {
  console.log(rest, "madhu")
const {Rate, foodtype, imgsrc, offer, seoffer, name} = rest
  return (
    <div className='bg-white shadow-2xl mb-4 min-h-[500px] group'>

      <div className='overflow-hidden'>
        <img className='group-hover:scale-110 transition-all durration-300 w-full' src={imgsrc} alt="#" />
      </div>
    </div>
  );
};
export default Resto;
