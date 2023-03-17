import React, { createContext,  useState } from 'react';

// data
import { roomData } from "../data"

// create context
export const RoomContext = createContext()



const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adults")
  const [kids, setKids] = useState("0 kids")

  console.log(rooms)


  return <RoomContext.Provider value={{rooms, adults, setAdults, kids, setKids}}>
    {children}
  </RoomContext.Provider>
};

export default RoomProvider;
