import React from 'react'
import Spaheder from '../components/Spaheder'
import SpaSlider from '../components/Spaslider'
import Landing from './Landing'



const Spa = () => {
    return (
        <>
            <div className='mb-4'>
                <Spaheder />
                <SpaSlider/>
                <Landing/>
            </div>
        </>
    )
}

export default Spa