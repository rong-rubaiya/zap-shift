import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';



const Card = ({review}) => {
  const {user_photoURL,review:reviwMsg,userName,ratings}=review
  return (
     <div className="max-w-md bg-white shadow-lg p-8 rounded-3xl border border-gray-100">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-teal-500 text-3xl mb-4" />

      {/* Text */}
      <p className="text-gray-600 leading-relaxed">
       {reviwMsg}
      </p>

      {/* Dotted Line */}
      <div className="border-b border-dashed border-teal-300 my-5"></div>

      {/* Profile */}
      <div className="flex items-center gap-4">
        <img className='rounded-full' src={user_photoURL} alt="" />

        <div>
          <h3 className="text-lg font-semibold text-teal-900">
            {userName}
          </h3>
          <p className="text-gray-500 text-sm">{ratings}</p>
        </div>
      </div>
    </div>
         
  );
};

export default Card;