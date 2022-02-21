import React from 'react';
import Carousel from './home-components/Carousel';
import ConsiderJob from './home-components/ConsiderJob';
import Jobsecmobile from './home-components/Jobsecmobile';
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
    <Jobsecmobile />
    <ConsiderJob />
    </>
  )
}

export default Home;