import React from 'react';


import '../assets/css/latestjob.css';
import Breadcrumb from './Breadcrumb';
import Jobsection from './LatestJob-Components/Jobsection';
import ConsiderJob from './home-components/ConsiderJob';
import Whyus from './home-components/Whyus';
import Footer from './Footer';
const Latestjob = () => {
  return (
    <>

      <section className="latest-job-bread-sec">
        <Breadcrumb main='Home' firstlinkname="Latest Job" />
      </section>

      <Jobsection />
      <ConsiderJob />
      <Whyus />
      <Footer />

    </>
  )
}

export default Latestjob;