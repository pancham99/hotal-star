import React from 'react'
import Header from '../components/Header'
// import Restomain from '../components/restojm/Restomain'
import Restos from '../components/restojm/Restos'
import Restoslides from "../components/Restoslides"



const Restaurant = () => {
  return (
    <>
      <Header />
      <Restoslides />
      <Restos />
    </>
  )
}

export default Restaurant;
