import React from 'react';
import ConsiderJob from './home-components/ConsiderJob';
import Whyus from './home-components/Whyus';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import Latestresult from './Result-components/Latestresult';

const Result = () => {
  return (
    <>
      <section className="latest-job-bread-sec">
        <Breadcrumb main='Home' firstlinkname="Results" />
      </section>

      <Latestresult />
      <ConsiderJob />
      <Whyus />
      <Footer />

    </>
  )
}

export default Result;