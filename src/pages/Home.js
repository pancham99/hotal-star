import React from 'react';
import BookForm from '../components/BookForm';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import Rooms from '../components/Rooms';

const Home = () => {
  return (
    <div className=''>
      <Header />
      <HeroSlider />
      <div className='container mx-auto relative'>
        <div className='bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute left-0 right-0 lg:p-0 lg:z-30 lg:-top-12'>
          <BookForm />
        </div>
      </div>
      {/* <Rooms /> */}
    </div>
  );
};

export default Home;
