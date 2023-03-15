import React from 'react';
//componnent
import Header from "./components/Header"
import Footer from "./components/Footer"
import Restaurant from './pages/Restaurant.js';
//page
import Home from "./pages/Home"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

  {
    path: "/restaurant",
    element: <Restaurant/>
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
