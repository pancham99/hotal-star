import React from 'react'

//img

import img1 from '../assets/img/theorypy/therapist-1.webp';
import img2 from '../assets/img/theorypy/Therapist-2.webp';
import img3 from '../assets/img/theorypy/therapist-3.webp';
import img4 from '../assets/img/theorypy/therapist-4.webp';
import img5 from '../assets/img/theorypy/therapist-5.webp';
import img6 from '../assets/img/theorypy/therapist-6.webp';

const About = () => {
    return (
        <>
            <div className='about_section bg-orange-50 p-16'>
                <div className=' items-center text-center font-serif'>
                    <div className='mx-w-3xl mx-w-[460] mx-auto  items-center'>
                        <h1 className='uppercase text-2xl font-semibold'> Adina Spa near for you</h1>
                        <p className='mx-w-[790px] leading-6 max-w-3xl mx-auto text-sm text-slate-500'> The daily grind of work and personal takes a toll on your body and mind. A regular
                            Spa helps you unwind, relax and re-energise. Choose from across the signature, home-crafted
                            massages & therapies or go for
                            the good old Deep tissue massage, Swedish massage, Ayurvedic massages or the Thai massage.</p>
                        <p className='mx-w-[890px] leading-6 max-w-2xl mx-auto text-sm text-slate-500'>Tattva Spa therapies will help keep your body running smoothly, so you
                            can run that half marathon or that full day of meetings.</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold py-4'>Make time for Spa & Self-care.</h1>
                    </div>
                    <div className=' py-6 mx-w-[690px] text-slate-400 leading-7 max-w-2xl mx-auto text-center items-center justify-center'>
                        <ul className='flex justify-center gap-16'>
                            <li ><img  className='ml-7'src={img1} title='' />Bespoke Experiences</li>
                            <li ><img  className='ml-2' src={img4} title='' />Quaity Products</li>
                            <li><img  className='ml-8' src={img2} title='' />Commitment to Hygiene</li>

                        </ul>
                        <ul className='flex justify-center gap-16 items-center text-center py-6'>
                            <li><img   className='ml-5' src={img3} title='' />Ensuite Steam/Shower*</li>
                            <li><img  className='ml-5' src={img5} title='' />Certified Therapists</li>
                            <li>< img  className='ml-5' src={img6} title='' />Researched Therapies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
