import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../page/home/shared/footer/Footer';
import Nav from '../page/home/shared/navbar/Nav';

const Rootlayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Rootlayout;