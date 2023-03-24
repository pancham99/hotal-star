import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Rdata from "../components/restojm/Rdata"

const RestoDetails = () => {
    const [resto, setResto] = useState(Rdata)
    console.log(resto, "madhu details")
    const {id} = useParams()

       // find id single resto
    const singleResto = resto.find((item)=>{
        return item.id === Number(id)
       })

       const {imgsrc } = singleResto

       console.log(singleResto, "single madhu")


  return (
    <div>
        <Header/>

        <div className='bg-room h-[560px] bg-cover bg-center relative flex justify-center items-center'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/70'></div>
        {/* title */}

        <h1  className='text-6xl text-white z-20 font-primary text-center'> Wecome to </h1>
      </div>
        <img src={imgsrc}/>
    </div>
  )
}

export default RestoDetails