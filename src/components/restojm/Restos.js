import React,{useState} from 'react';
//context
// import { RoomContext } from '../context/RoomContext';
import Rdata from "./Rdata"
import Resto from './Resto';



const Restos = () => {
const [resto, setResto] = useState(Rdata)
console.log(resto, "hhhhhhhhhh")


  return <section className=' py-24'>
    <div className='container mx-auto lg:px-0'>

      <div className='text-center'>
        <div className='font-tertiary text-[15px] tracking-[6px]'>Welcome to my website..</div>
        <h2 className='font-primary text-[45px] mb-4'>Best Restaurant on best price..</h2>
      </div>
      {/* grid */}
      <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0 '>
        {
          resto.map((rest) =>{
            return(
              <>
             <Resto rest={rest} />
              </>
            )
          })
        }
      </div>
    </div>
  </section>;
};

export default Restos;