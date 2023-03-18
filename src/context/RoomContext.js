import React, { createContext, useEffect, useState } from 'react';

// data
import { roomData } from "../data"

// create context
export const RoomContext = createContext()

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adults")
  const [kids, setKids] = useState("0 kids")

  const [topers, setTopers] = useState(0);

  
  useEffect(() => {
    setTopers(Number(adults[0]) + Number(kids[0]))
  });

  const handleClick = (e) => {
    e.preventDefault()
const newRoom = roomData.filter((room)=>{
  return topers <= room.maxPerson 
})
setRooms(newRoom)
  }

  // console.log(topers, 'total');

  console.log(rooms)


  return <RoomContext.Provider value={{ rooms, adults, setAdults, kids, setKids, handleClick }}>
    {children}
  </RoomContext.Provider>
};

export default RoomProvider;
