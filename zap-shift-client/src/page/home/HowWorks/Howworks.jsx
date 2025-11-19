import React from 'react';
import imgBus from '../../../assets/bookingIcon.png'

const Howworks = () => {
  return (
    <div className='px-6'>
      <h1 className='my-4 font-bold text-secondary text-3xl'>How it works</h1>

     <div className='flex gap-6'>
       <div className='bg-white space-y-4 w-72 p-6 rounded-2xl '>
        <img src={imgBus} alt="" />
        <h2>Booking Pick & Drop</h2>
        <p>From personal packages to business shipments — we deliver on time, every time.</p>

      </div>
      <div className='bg-white space-y-4 w-72 p-6 rounded-2xl'>
        <img src={imgBus} alt="" />
        <h2>Booking Pick & Drop</h2>
        <p>From personal packages to business shipments — we deliver on time, every time.</p>

      </div>
      <div className='bg-white space-y-4 w-72 p-6 rounded-2xl'>
        <img src={imgBus} alt="" />
        <h2>Booking Pick & Drop</h2>
        <p>From personal packages to business shipments — we deliver on time, every time.</p>

      </div>
      <div className='bg-white space-y-4 w-72 p-6 rounded-2xl'>
        <img src={imgBus} alt="" />
        <h2>Booking Pick & Drop</h2>
        <p>From personal packages to business shipments — we deliver on time, every time.</p>

      </div>
     </div>
    </div>
  );
};

export default Howworks;