import React from 'react';
import { FaArrowAltCircleRight, FaRegArrowAltCircleRight } from "react-icons/fa";

const Btn = () => {
  return (
    <div className='absolute bottom-14 left-18'>
      <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.</p>
      <div className='flex gap-3 mt-6'>
        <button className='btn rounded-4xl bg-primary'>Track Your Parcel</button>
       
        <section className='-rotate-45 text-4xl '><FaRegArrowAltCircleRight /></section>
         <button className='btn px-6 '>Be a rider</button>
      </div>
    </div>
  );
};

export default Btn;