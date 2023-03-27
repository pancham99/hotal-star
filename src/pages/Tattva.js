import React from 'react'
import Header from '../components/Header'
import SpaSlider from '../components/Spaslider'

const Tattva = () => {
  return (
    <div>
        <Header/>
        <SpaSlider/>

        {/* CHOOSE FROM OUR 70+ SPAS ACROSS INDIA */}
        <section className='h-[340px] bg-center bg-cover' style={{ backgroundImage: `url("https://tattvaspa.com/wp-content/uploads/2022/08/getaway.jpg")`}}>

        </section>
    </div>
  )
}

export default Tattva