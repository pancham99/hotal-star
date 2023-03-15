import React from 'react';
//componnent
import Header from "./components/Header"
import Footer from "./components/Footer"
//page
import Home from "./pages/Home"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Restaurent from './pages/Restaurent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/restaurant",
    element:<Restaurent />
  },

  // {
  //   path: "/room/:id",
  //   element: <RoomDetails/>
  // }
])

const App = () => {
  return <div>
    <Header/>
    <RouterProvider router={router}/>
    <Footer/>
  </div>;
};

export default App;
