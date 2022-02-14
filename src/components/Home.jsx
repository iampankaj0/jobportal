import React from 'react';
import Carousel from './home-components/Carousel';
import Jobsection from './home-components/Jobsection';
import Marquee from './home-components/Marquee';
import NoticeMessage from './home-components/NoticeMessage';

const Home = () => {
  return (
    <>
    <Carousel />
    <Marquee />
    <NoticeMessage />
    <Jobsection />
    </>
  )
}

export default Home;