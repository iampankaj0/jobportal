import React from 'react';
import Admitlinks from './AdmitCard-Component/Admitlinks';
import Breadcrumb from './Breadcrumb';
import '../assets/css/admitcard.css';
import Latestresult from './Result-components/Latestresult';
import ConsiderJob from './home-components/ConsiderJob';
import Whyus from './home-components/Whyus';
import Footer from './Footer';

const Admitcard = () => {
  return (
    <>
      <section className="latest-job-bread-sec">
        <Breadcrumb main='Home' firstlinkname="Admit Card" />
      </section>


      <Admitlinks />
      <ConsiderJob />
      <Whyus />
      <Footer />

    </>
  )
}

export default Admitcard;