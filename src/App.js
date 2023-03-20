import React from 'react';
//componnent
import Header from "./components/Header"
import Footer from "./components/Footer"

//page
import Home from "./pages/Home"
import Restaurant from "./pages/Restaurant"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RoomDetails from './pages/RoomDetails';
import Spa from './pages/Spa';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/restaurant",
    element: <Restaurant/>
  },
  {
    path: "/spa",
    element: <Spa/>
  },
 

  {
    path: "/room/:id",
    element: <RoomDetails/>
  }
])

const App = () => {
  return <div>
    {/* <Header/> */}
    <RouterProvider router={router}/>
    <Footer/>
  </div>;
};

export default App;
