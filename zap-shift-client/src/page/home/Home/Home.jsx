import React from 'react';
import Banner from '../banner/Banner';
import Howworks from '../HowWorks/Howworks';
import Service from '../Service/Service';
import Swipper from '../Swipper/Swipper';
import Reviwes from '../Reviwes/Reviwes';

const Home = () => {
  const reviewsPromise=fetch("reviews.json").then(res=>res.json())
  return (
    <div className='space-y-12'>
      <Banner/>
      <Howworks/>
      <Service/>
      <Swipper/>
      <Reviwes reviewsPromise={reviewsPromise}></Reviwes>
    </div>
  );
};

export default Home;