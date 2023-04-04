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
import Contact from './pages/Contact';
import RestoDetails from './pages/RestoDetails';
import Tattva from './pages/Tattva';
import AboutAd from './pages/AboutAd';



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
    path: "/about",
    element: <AboutAd/>
  },
  {
    path: "/tattva",
    element: <Tattva/>
  },


  {
    path: "/contact",
    element: <Contact/>
  },

  {
    path: "/room/:id",
    element: <RoomDetails/>
  },
  {
    path: "/resto/:id",
    element:<RestoDetails/>
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
