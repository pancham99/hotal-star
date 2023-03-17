import React, { useEffect, useState } from 'react';
//context
// import { RoomContext } from '../context/RoomContext';
import Rdata from "./Rdata"
import Resto from './Resto';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Restos = () => {
  const [resto, setResto] = useState(Rdata)


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  // const [resto, setResto] = useState([])  // for store all rarry [] in this 

  // const fetchData = async () =>{
  //   const data = await fetch ("");
  //   const data = await response.jsn()
  //   setResto(data);
  // } 

  // []dependency for infinite  ()function code {} obeject js 


  // useEffec(()=> {
  //   const fetchData = async () =>{
  //     const data = await fetch ("");
  //     const data = await response.jsn()
  //     setResto(data);
  //   } 
  //   fetchData()
  // },[]) 

  console.log(resto, "hhhhhhhhhh")


  return <section className=' py-24'>
    <div className='container mx-auto lg:px-0'>

      <div className='text-center'>
        <div className='font-tertiary text-[15px] tracking-[6px]'>Welcome to my website..</div>
        <h2 className='font-primary text-[45px] mb-4'>Best Restaurant on best price..</h2>
      </div>
      {/* grid */}

      <div
        className="space-x-2"
      // className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0 '
      >
        <Carousel responsive={responsive}  >
          {
            resto.map((jagriti) => {
              return (
                <>
                  <Resto mish={jagriti} />

                </>
              )
            })
          }
        </Carousel>
      </div>

    </div>
  </section>;
};

export default Restos;
