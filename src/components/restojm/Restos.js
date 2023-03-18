import React, { useEffect, useState } from 'react';
//context
// import { RoomContext } from '../context/RoomContext';
import Rdata from "./Rdata"
import Resto from './Resto';
import Sdata from './Sdata';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Restos = () => {
  //  const [rest, setRest] = useState(Sdata)
  const [resto, setResto] = useState(Rdata)
  console.log(resto);
  const dataFilter = Rdata.filter((sname) => {
    return sname.categry === 'Online delivery' || sname.categry === 'Fast food'
  })
  console.log(dataFilter);

  const outdoorFilter = Rdata.filter((offer) => {
    return offer.categry === 'Outdoor  Service'
  })


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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


  return <section className=' py-24 bg-gray-200'>
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
        <div className=' online_delevery pt-2'>
          <div className='text-center p-6'>
            <p className='tracking-[3px] text-3xl'>Online Delivery Service</p>
            <p className='font-tertiary text-[15px] text-gray-500'>Enjoy Online Service..</p>
          </div>
          <Carousel responsive={responsive}  >
            {
              dataFilter.map((jagriti) => {
                return (
                  <>
                    <Resto mish={jagriti} />

                  </>
                )
              })
            }
          </Carousel>
        </div>

        <div className='outdoor_bar pt-2'>
       < div className='text-center p-6'>
            <p className='tracking-[3px] text-3xl'>Outdoor Seating Service Available </p>
            <p className='font-tertiary text-[15px] text-gray-500 mt-1'>Enjoy your day..</p>
          </div>
          <Carousel responsive={responsive}  >
            {
              outdoorFilter.map((jagriti) => {
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

    </div>
  </section>;
};

export default Restos;
