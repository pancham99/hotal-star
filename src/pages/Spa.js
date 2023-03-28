import React from 'react'
import Spaheder from '../components/Spaheder'
import SpaSlider from '../components/Spaslider'
import Landing from './Landing'



const Spa = () => {
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

            </div>
        </>
    )
}

export default Spa