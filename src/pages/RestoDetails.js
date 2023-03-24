import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Rdata from "../components/restojm/Rdata"

const RestoDetails = () => {
    const [resto, setResto] = useState(Rdata)
    console.log(resto, "madhu details")
    const {id} = useParams()

       // find id single resto
    const singleResto = resto.find((item)=>{
        return item.id === Number(id)
       })

       console.log(singleResto, "single madhu")


  return (
    <div>RestoDetails</div>
  )
}

export default RestoDetails