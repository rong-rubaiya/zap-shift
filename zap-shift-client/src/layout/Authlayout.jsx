import React from 'react';
import Logo from '../components/logo/Logo';
import { Outlet } from 'react-router';
import img from '../assets/authImage.png'

const Authlayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Logo></Logo>
      <div className='flex'>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
        <div className='flex-1'>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Authlayout;