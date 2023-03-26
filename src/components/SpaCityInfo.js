import React, { useState } from 'react'
import Select from 'react-select';

const options = [
    { label: 'Agartala' },
    { label: "Agra" },
    { label: "Aligarh" },
    { label: "Bengaluru" },
    { label: "Chennai" },
    { label: "Cherrapunji" },
    { label: "Corbett" },
    { label: "Goa" },
    { label: "Gujarat" },
    { label: "Gurgaon" },
    { label: "Guwahati" },
    { label: "Haridwar" },
    { label: "Himachal" }
];

//img 
// import img1 from '../assets/img/spaslider/spainfo.jpg'
const SpaCityInfo = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    //  console.log(selectedOption, 'alldata')
    return (
        <>

            <div className='spa_city'>
                <section className='h-full relative'>
                    <div className=' w-full h-full'>
                    <div className='absolute w-full h-full bg-black/60'>
                    </div>
                        <img className='mx-w-[1024px] object-cover h-screen w-full' src='https://img.freepik.com/free-photo/full-shot-woman-relaxing-boat_23-2149046375.jpg?w=900&t=st=1679824392~exp=1679824992~hmac=2889c89cda0241ca37e7743126cc5a609608b7d25c17e2a666d2f15856faaf3b' title='' /> 
                    </div>
                    <div className='absolute top-16 left-[60vh]'>
                        <h1 className='text-white text-3xl  font-semibold   '>CHOOSE FROM OUR 70+ SPAS ACROSS INDIA</h1>
                    </div>
                    
                    <p className='absolute text-white top-32  leading-5 left-[20vh] text-lg font-light font-serif'>Whether you are seeking a relaxing spa getaway at a resort  or a few hours of calm near you within the city, Tattva has a Spa location for you.</p>

                    <h1 className='text-white text-3xl  font-semibold absolute top-[30vh] left-[80vh]'>FIND A SPA NEAR ME</h1>
                    <div name="cars" id="cars" className='bg-yellow-50 text-black text-bold h-10 w-[30vh] absolute  top-[40vh] left-[90vh]'>

                        {/* {list.map((city) => {
                            return (
                                <>
                                    <h1>{city.city }
                                    </h1>
                                </>
                            )
                        }
                        )

                        } */}
                        <Select 
                            options={options}
                            value={selectedOption}
                            onChange={setSelectedOption}
                            isClearable={true}
                        />
                    </div>
                </section>
            </div>
        </>
    )
}

export default SpaCityInfo
