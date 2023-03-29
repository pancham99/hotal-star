import React, { useState } from 'react'
import Spaheder from '../components/Spaheder'
import SpaSlider from '../components/Spaslider'
import Landing from './Landing'
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from '../assets/img/logo.jpeg'
import video from '../assets/img/spaslider/spavideo1.mp4';
import Carousel from 'react-multi-carousel';

const review = [
    {
        img: img1,
        username: 'Jagriti Mishra',
        place: 'undro spa at the merdien gurgaon'
    },
    {
        img: img1,
        username: 'Jagriti Mishra',
        place: 'undro spa at the merdien gurgaon'
    },
    {
        img: img1,
        username: 'Jagriti Mishra',
        place: 'undro spa at the merdien gurgaon'
    },
    {
        img: img1,
        username: 'Jagriti Mishra',
        place: 'undro spa at the merdien gurgaon'
    },
    {
        img: img1,
        username: 'Jagriti Mishra',
        place: 'undro spa at the merdien gurgaon'
    },
];

const Spa = () => {

    const [data, setData] = useState(review)
    console.log(data, 'review')

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

    return (
        <>
            <div className='mb-4 bg-orange-50'>
                <Spaheder />
                <SpaSlider />
                <Landing />


                {/* WELLNESS SERVICES */}
                <section className='py-20'>
                    <div className='py-5'>
                        <h1 className='text-center text-xl capitalize '>WELLNESS SERVICES</h1>
                    </div>
                    <div className='mx-10 py-5'>

                        <div class="grid lg:grid-cols-4 gap-8">
                            <div className='bg-red-500'>
                                <div className='relative'>
                                    <img src='https://tattvaspa.com/wp-content/uploads/2022/04/Massages-Our-Services.jpg' />
                                    <div className='bg-gray-600/20 h-full w-full absolute top-0'>
                                        <div className='absolute top-[50%] left-[25%] text-center text-xl font-primary tracking-wide text-white'>
                                            <h1 className='cursor-pointer'>MASSAGES</h1>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='bg-green-400'>
                                <div className='relative'>
                                    <img src='https://tattvaspa.com/wp-content/uploads/2022/04/Beauty-Our-Services.jpg' />
                                    <div className='bg-gray-600/20 h-full w-full absolute top-0'>
                                        <div className='absolute top-[50%] left-[25%] text-center text-xl font-primary tracking-wide text-white'>
                                            <h1 className='cursor-pointer'>BEAUTY ELIXIRS</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-yellow-600'>
                                <div className='relative'>
                                    <img src='https://tattvaspa.com/wp-content/uploads/2022/04/Salon-Our-Services.jpg' />
                                    <div className='bg-gray-600/20 h-full w-full absolute top-0'>
                                        <div className='absolute top-[50%] left-[35%] text-center text-xl font-primary tracking-wide text-white'>
                                            <h1 className='cursor-pointer'>SALON</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gray-800'>
                                <div className='relative'>
                                    <img src='https://tattvaspa.com/wp-content/uploads/2022/04/Wellness-Our-Services.jpg' />
                                    <div className='bg-gray-600/20 h-full w-full absolute top-0'>
                                        <div className='absolute top-[50%] left-[35%] text-center text-xl font-primary tracking-wide text-white'>
                                            <h1 className='cursor-pointer'>SPA KIOSK</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* GIFT A SPA */}

                <section className='bg-white py-10'>
                    <div className='mx-10'>
                        <div class="grid lg:grid-cols-2 gap-4">
                            <div>
                                <div>
                                    <img src='https://tattvaspa.com/wp-content/uploads/2022/04/Gift-a-Spa600x500_Tattva.jpg' />
                                </div>
                                <div className='space-y-2'>
                                    <h1 className='text-center text-2xl'>GIFT A SPA</h1>
                                    <p className='text-center text-sm'>
                                        Gift your loved ones a luxurious wellness experience with Tattva Spa. Our Spa E-GIft Cards are the perfect way to pamper and express your care. There’s one for every occasion. Add a heart felt note to make it really special.
                                    </p>

                                    <button className='btn btn-primary btn-sm max-w-[240px] mx-auto p'>BOOK NOW</button>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src='https://tattvaspa.com/wp-content/uploads/2022/04/Gift-a-Spa600x500_Vilasa.jpg' />
                                </div>
                                <div className='space-y-2'>
                                    <h1 className='text-center text-2xl'>GIFT A SPA</h1>
                                    <p className='text-center text-sm'>
                                        Gift your loved ones a luxurious wellness experience with Tattva Spa. Our Spa E-GIft Cards are the perfect way to pamper and express your care. There’s one for every occasion. Add a heart felt note to make it really special.
                                    </p>

                                    <button className='btn btn-primary btn-sm max-w-[240px] mx-auto p'>BOOK NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GOOD DAY SECTION */}


                <section className='bg-orange-50 h-[340px]'>
                    <div className='flex text-center items-center justify-center'>
                        {/* <div className=''>logo</div> */}
                        <p className=' text-xs uppercase mx-w-[920px] leading-6 p-24 w-[100vh] text-gray-500/75'><img className=' h-8' src={img1} />OF SELF CARE AT TATTVA SPA. LOOSE YOUR DAILY STRESSORS & RENEW YOURSELF WITH OUR PROFESSIONALLY TRAINED HEALERS.
                            OUR SPAS FOLLOW HIGH STANDARDS OF HYGIENE & WELCOME FAMILIES FOR ADOPTING WELLNESS AS A WAY OF LIFE</p>
                        <div className='text-center items-center justify-center relative'>
                            {/* <img className='h-[290px] mt-6' src='https://img.freepik.com/free-photo/beautiful-woman-bathrobe-reading-magazine-while-relaxing-beauty-spa-looking-camera_637285-7434.jpg?w=900&t=st=1679997610~exp=1679998210~hmac=c79403d16ec706d7c2fea2cb6b62a3d4607da98865f6f08cdfd4f27131c9877e' /> */}

                            <video className='h-[290px] ' controls>
                                <source src={video} type="video/mp4" />
                            </video>

                            <img className=' absolute top-2 left-2 h-4' src={img1} />
                        </div>
                    </div>

                </section>

                {/* GOOD DAY SECTION END */}

                {/* REVIEW SECTION START */}

                <section className='bg-white h-[420px] mt-6' >

                    <Carousel responsive={responsive}>
                        {
                            review.map((reviews) => {
                                return (
                                    <>
                                        <data mitemsish={reviews} />
                                    </>
                                )
                            })
                        }
                    </Carousel>
                </section>

            </div>
        </>
    )
}

export default Spa