import React from 'react';
import img from '../../../assets/service.png'

const Service = () => {
  return (
    <div className='text-center p-12  bg-secondary text-white rounded-3xl'>
      <h1 className='text-4xl my-4 font-semibold'>Our Services</h1>
      <p className='mb-4'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
      <div className='grid grid-cols-3 gap-6'>

     <div className='space-y-4 bg-white text-secondary w-96 rounded-3xl p-4 text-center items-center flex flex-col hover:bg-primary cursor-pointer' >
     <div className='bg-gray-200 rounded-full p-5'>
       <img src={img} className=' ' alt="" />
     </div>
      <h2 className='font-bold text-xl'>Express  & Standard Delivery</h2>
      <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
     </div>
     <div className='space-y-4 bg-white text-secondary w-96 rounded-3xl p-4 text-center items-center flex flex-col hover:bg-primary cursor-pointer' >
     <div className='bg-gray-200 rounded-full p-5'>
       <img src={img} className=' ' alt="" />
     </div>
      <h2 className='font-bold text-xl'>Express  & Standard Delivery</h2>
      <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
     </div>
     <div className='space-y-4 bg-white text-secondary w-96 rounded-3xl p-4 text-center items-center flex flex-col hover:bg-primary cursor-pointer' >
     <div className='bg-gray-200 rounded-full p-5'>
       <img src={img} className=' ' alt="" />
     </div>
      <h2 className='font-bold text-xl'>Express  & Standard Delivery</h2>
      <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
     </div>
     <div className='space-y-4 bg-white text-secondary w-96 rounded-3xl p-4 text-center items-center flex flex-col hover:bg-primary cursor-pointer' >
     <div className='bg-gray-200 rounded-full p-5'>
       <img src={img} className=' ' alt="" />
     </div>
      <h2 className='font-bold text-xl'>Express  & Standard Delivery</h2>
      <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
     </div>
     <div className='space-y-4 bg-white text-secondary w-96 rounded-3xl p-4 text-center items-center flex flex-col hover:bg-primary cursor-pointer' >
     <div className='bg-gray-200 rounded-full p-5'>
       <img src={img} className=' ' alt="" />
     </div>
      <h2 className='font-bold text-xl'>Express  & Standard Delivery</h2>
      <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
     </div>
     <div className='space-y-4 bg-white text-secondary w-96 rounded-3xl p-4 text-center items-center flex flex-col hover:bg-primary cursor-pointer' >
     <div className='bg-gray-200 rounded-full p-5'>
       <img src={img} className=' ' alt="" />
     </div>
      <h2 className='font-bold text-xl'>Express  & Standard Delivery</h2>
      <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
     </div>
     
      </div>
    </div>
  );
};

export default Service;