import React from 'react'
import Rdata from './Rdata'
import Card from './Card'

function Restoslides(props) {
  return (
    <>
    {
      Rdata.map((val,ind)=>{
        return <Card 
        sname={val.sname}
        imgsrc={val.imgsrc}
        offer={val.offer}
        seoffer={val.seoffer}
        Rate={val.Rate}
        foodtype={val.foodtype}
        />
        }) 
        }
    }
    </>
  )
}

export default Restoslides