import React from 'react'
import Spaheader from '../components/Spaheder'
import AboutAdina from '../components/AboutAdina'

const AboutAd = () => {
  return (
    <div className='mb-6'>
        <Spaheader/>
        <section className='pt-[20vh] border-b-2  border-orange-800'>
                <div className='bg-orange-50 flex text-center h-[100vh] p-20'>
                    <div>
                        <h1 className='py-4 font-semibold '>ADINA SPA</h1>
                        <p className='mx-w-[920px] mx-auto leading-6 max-w-xl text-center font-light'>Prithivi, Akash, Jal, Agni, Vayu (Earth, Sky, Water, Fire, Air) are the five Tattva’s or elements that the universe and the human body is composed of. Ancient eastern philosophy holds that the balance of these five Tattvas or elements in entire universe, including the human body, is the essence of wellness. Balance. That is what Tattva Spa aims to strive for your mind, body and soul. </p>
                    </div>
                    <div className=''>
                        <img className='w-[80vh]' src='https://img.freepik.com/premium-photo/young-beautiful-healthy-woman-spa-salon_93675-13757.jpg?w=900' />
                    </div>
                </div>
            </section>
            <div className='pt-[20vh] flex bg-orange-50 text-center py-10 h-[100vh] p-20'>
                <div >
                    <img className='w-[80vh]' src='https://img.freepik.com/free-photo/woman-relaxing-bathtub-with-serum_23-2148875038.jpg?w=1060&t=st=1680618151~exp=1680618751~hmac=fdb5bec3f247d4a1e9d4ad60a90dab4a7176e282bf0fe3708a203e4ef2e08d3f' />
                </div>
                <div className='px-4'>
                    <h1 className='py-4 font-semibold '>SPA LOCATIONS</h1>
                    <p className='mx-w-[920px] mx-auto leading-6 max-w-xl text-center font-light'>Since opening that first spa in 2012 in the quaint hills of Manali, we have come a long way with our Spas now located across 70+ locations. Whether it be a spa located in the heart of the city or our Spa located in idyllic resort spa destinations, you can be assured of the warm hospitality and professional nature of services. Magnificently accoutred, Tattva Spa spaces evokes the feelings of tranquillity, balance, and serenity in the consumer by using elements from nature, beautiful landscapes, that and  a pastel soothing colour pallette.   </p>
                </div>
            </div>

            {/* OUR SPAS START */}



            {/* VILASA BY ADINA */}
            <section className='w-screen'>
                <div className='bg-orange-50 flex text-center  h-[100vh]  p-20 '>
                    <div>
                        <h1 className='py-4 font-semibold '>VILASA BY ADINA</h1>
                        <p className='mx-w-[920px] mx-auto leading-6 max-w-xl text-center font-light'>Prithivi, Akash, Jal, Agni, Vayu (Earth, Sky, Water, Fire, Air) are the five Tattva’s or elements that the universe and the human body is composed of. Ancient eastern philosophy holds that the balance of these five Tattvas or elements in entire universe, including the human body, is the essence of wellness. Balance. That is what Tattva Spa aims to strive for your mind, body and soul. </p>
                    </div>
                    <div className='px-4'>
                        <img className='w-[80vh]' src='https://img.freepik.com/free-photo/organic-hygenic-products-with-olive-oil_23-2148337459.jpg?w=900&t=st=1680620901~exp=1680621501~hmac=651e3dbcd7d8bc686611dfe8331ccd6c8c917264bdf73abc782fdc80dd9dfee3' />
                    </div>
                </div>
            </section>

            {/* OUR BRANDS */}
            <div className=' flex bg-orange-50 text-center py-10 h-[100vh] p-20'>
                <div >
                    <img className='w-[80vh]' src='https://img.freepik.com/free-photo/spa-products-with-orchids_93675-128362.jpg?w=900&t=st=1680620991~exp=1680621591~hmac=e9efcc02e50de35befa26868fb80ebdbf1e8f570be24ef1d681dfd7e5aea0727' />
                </div>
                <div className='px-4'>
                    <h1 className='py-4 font-semibold '>OUR BRANDS</h1>
                    <p className='mx-w-[920px] mx-auto leading-6 max-w-xl text-center font-light'>Since opening that first spa in 2012 in the quaint hills of Manali, we have come a long way with our Spas now located across 70+ locations. Whether it be a spa located in the heart of the city or our Spa located in idyllic resort spa destinations, you can be assured of the warm hospitality and professional nature of services. Magnificently accoutred, Tattva Spa spaces evokes the feelings of tranquillity, balance, and serenity in the consumer by using elements from nature, beautiful landscapes, that and  a pastel soothing colour pallette.   </p>
                </div>
            </div>

            {/* OUR TEAM */}
            <section className='w-screen'>
                <div className='bg-orange-50 flex text-center  h-[100vh]  px-24'>
                    <div>
                        <h1 className='py-4 font-semibold '>OUR TEAM</h1>
                        <p className='mx-w-[920px] mx-auto leading-6 max-w-xl text-center font-light'>Prithivi, Akash, Jal, Agni, Vayu (Earth, Sky, Water, Fire, Air) are the five Tattva’s or elements that the universe and the human body is composed of. Ancient eastern philosophy holds that the balance of these five Tattvas or elements in entire universe, including the human body, is the essence of wellness. Balance. That is what Tattva Spa aims to strive for your mind, body and soul. </p>
                    </div>
                    <div className='px-4'>
                        <img className='w-[80vh]' src='https://img.freepik.com/free-photo/mother-daughter-being-silly-with-make-up-brushes_23-2148396062.jpg?w=900&t=st=1680621113~exp=1680621713~hmac=f6498608bedcf9c0a724e276cc48f24df3bb78e7fb70bb8f9d365a3d09ed27f7' />
                    </div>
                </div>
            </section>

            {/* OUR TEAM  END*/}
            <section className=''>
                <div className='relative'>
                    <div className='absolute w-full h-full bg-black/60'></div>
                    <div className='absolute text-white top-[40vh] left-[80vh] text-3xl font-semibold'>
                        <p>
                            FEEL LIKE YOURSELF AGAIN</p>
                        <button className='btn btn-lg btn-primary mx-auto mt-4'>BOOK NOW</button>
                    </div>


                    <img className='w-screen h-[80vh]' src='https://img.freepik.com/free-photo/suction-cup-process-male-client_23-2148824058.jpg?w=900&t=st=1680621485~exp=1680622085~hmac=00920108e400282e0bdd9496bf019a1815ea93c78a6105465a3162285a2baa2f' />
                </div>
            </section>

            {/* ABOUT THE ADINA SECTION */}
            <section className='flex gap-36'>
                <ul>
                    <a>ADINA SPA</a>
                    <a><li>About Us</li></a>
                    <a><li>Careers</li></a>
                    <a><li>Locations</li></a>
                    <a><li>Services</li></a>
                    <a><li>Reservations</li></a>
                    <a><li>Privacy Policy</li></a>
                </ul>
                <ul>
                <a>SPA SPECIALS</a>
                    <a><li>Wellness Blog</li></a>
                    <a><li>Careers</li></a>
                    <a><li>Spa Party</li></a>
                    <a><li>Gifting Categories</li></a>
                </ul>
                <ul>
                <a>ADINA SPA</a>
                    <a><li>About Us</li></a>
                    <a><li>Careers</li></a>
                    <a><li>Locations</li></a>
                    <a><li>Services</li></a>
                    <a><li>Reservations</li></a>
                    <a><li>Privacy Policy</li></a>
                </ul>
                <ul>
                <a>ADINA SPA</a>
                    <a><li>About Us</li></a>
                    <a><li>Careers</li></a>
                    <a><li>Locations</li></a>
                    <a><li>Services</li></a>
                    <a><li>Reservations</li></a>
                    <a><li>Privacy Policy</li></a>
                </ul>
            </section>
        </>
    </div>
  )
}

export default AboutAd
