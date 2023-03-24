import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper style
import "swiper/css";
import "swiper/css/effect-fade";
// import required module
import { EffectFade, Autoplay } from "swiper"
//images
import Img1 from "../assets/img/spaslider/SPA_silde1.webp";
import Img2 from "../assets/img/spaslider/SPA_SLIDE2.webp"
import Img3 from "../assets/img/spaslider/SPA_SLIDE3.webp"
import Img4 from "../assets/img/spaslider/spa1.avif"
import Img5 from "../assets/img/spaslider/spa4.avif"
const slides = [
  {
    title: "A regular Spa helps you unwind",
    bg: Img1,
    btnText: "BOOK NOW",
  },
  {
    title: "Relax, indulge, enjoy, and love yourself, too... ",
    bg: Img2,
    btnText: "BOOK NOW",
  },
  {
    title: "Rest and your energy will be restored...",
    bg: Img3,
    btnText: "BOOK NOW",
  },
  {
    title: "Give your body a little love it deserve it...",
    bg: Img4,
    btnText: "BOOK NOW",
  },
  {
    title: "Beauty comes from within ...The Spa",
    bg: Img5,
    btnText: "BOOK NOW",
  }
]

const SpaSlider = () => {
  return (
    <Swiper modules={[EffectFade, Autoplay]} effect={"fade"} loop={true} autoplay={{
      delay: 3000,
      disableOnInteraction: false,

    }} className='heroSlider h-[600px] lg:h-screen'>
      {
        slides.map((slide, index) => {
          const { title, bg, btnText } = slide
          return (
            <SwiperSlide className='h-full relative flex justify-center items-center' key={index}>
              <div className='z-20 text-white text-center'>
                <div className='uppercase font-tertiary tracking-[6px] mb-5'>just Enjoy and fell relax</div>
                <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[58px] leading-tight mb-6'>{title}</h1>

                <button className='btn btn-lg btn-primary mx-auto'>{btnText}</button>
              </div>
              <div className='absolute top-0 w-full h-hull'>
                <img className='object-cover h-screen w-full' src={bg} alt="" />
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

export default SpaSlider;
