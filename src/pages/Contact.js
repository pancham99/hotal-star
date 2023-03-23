import React from 'react'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'

const Contact = () => {
    return (
        <>
            <div className='w-full  '>
                <Header />
                <HeroSlider />
                <div className='container mx-auto h-full  mt-12 mb-12'>
                    <div className='flex-1'>
                        <div className='w-full h-[440px] relative'>
                            <img className=' w-full h-full' src='https://www.businessinsider.in/photo/68664363/heres-why-hotel-room-rates-in-india-may-double-in-the-next-3-to-4-years.jpg?imgsize=225157' />


                            <div className='absolute top-[5%] left-[25%] z-20 flex mx-auto'>
                            <form>
                                <div className='flex-col'>

                                    <div class="mb-3 pt-0">
                                        <label className='py-1 text-xl font-primary text-white'>First Nmae</label>
                                        <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                                    </div>
                                    <div class="mb-3 pt-0">
                                        <label className='py-1 text-xl font-primary text-white'>Last Nmae</label>
                                        <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                                    </div>
                                    <div class="mb-3 pt-0 flex items-center space-x-5 ">
                                        <div className='flex-1'>
                                            <label className='py-1 text-xl font-primary text-white'>Mobile No</label>
                                            <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                                        </div>
                                        <div className='flex-1'>
                                            <label className='py-1 text-xl font-primary text-white'>Adhar No</label>
                                            <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                                        </div>
                                    </div>
                                    <div class="mb-3 pt-0 flex items-center space-x-5 ">
                                        <div className='flex-1'>
                                            <label className='py-1 text-xl font-primary text-white'>City Name</label>
                                            <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                                        </div>
                                        <div className='flex-1'>
                                            <label className='py-1 text-xl font-primary text-white'>Pin Code</label>
                                            <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                                        </div>
                                    </div>
                                    <div class="mb-3 pt-0">
                                        <button type='Submit' className='btn btn-primary w-full py-2 rounded-md' >Check now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        </div>

                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact