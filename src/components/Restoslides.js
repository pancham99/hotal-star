import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper style
import "swiper/css";
import "swiper/css/effect-fade";
// import required module
import { EffectFade, Autoplay } from "swiper"
//images
import image1 from "../assets/img/restoslider/image1.webp"
import image2 from "../assets/img/restoslider/image2.jpeg"
import image3 from "../assets/img/restoslider/image3.jpeg"

// import Img1 from "../assets/img/heroSlider/1.jpg";
// import Img2 from "../assets/img/heroSlider/2.jpg";
// import Img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "Best Restaurant on best price",
    bg: image1,
    btnText: "See our REST",
  },
  {
    title: "Best Restaurant on best price ",
    bg: image2,
    btnText: "See our REST",
  },
  {
    title: "Best Restaurant on best price",
    bg: image3,
    btnText: "See our REST",
  }
]

const HeroSlider = () => {
  return (
    <Swiper modules={[EffectFade, Autoplay]} effect={"fade"} loop={true} autoplay={{
      delay: 3000,
      disableOnInteraction: false,

    }} className='heroSlider h-[600px] lg:h-[860px]'>
      {
        slides.map((slide, index) => {
          const { title, bg, btnText } = slide
          return (
            <SwiperSlide className='h-full relative flex justify-center items-center' key={index}>
              <div className='z-20 text-white text-center'>
                <div className='uppercase font-tertiary tracking-[6px] mb-5'>just Enjoy and relax</div>
                <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6'>{title}</h1>

                <button className='btn btn-lg btn-primary mx-auto'>{btnText}</button>
              </div>
              <div className='absolute top-0 w-full h-hull'>
                <img className='object-cover h-full w-full' src={bg} alt="" />
              </div>
              <div className='absolute w-full h-full bg-black/70'>

              </div>
            </SwiperSlide>
          )

        })

      }
    </Swiper>
  );
};

export default HeroSlider;
