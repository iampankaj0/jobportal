import React from 'react';

import Breadcrumb from './Breadcrumb';
import Syllabuslink from './Syllabus-Components/Syllabuslink';
import Topads from './Syllabus-Components/Topads';
import ConsiderJob from '../components/home-components/ConsiderJob';
import Whyus from '../components/home-components/Whyus';
import Footer from './Footer';


import '../assets/css/syllabus.css';

const Notice = () => {
  return (
    <>
      <section className="latest-job-bread-sec">
        <Breadcrumb main='Home' firstlinkname="Syllabus" />
      </section>

      <Topads />
      <Syllabuslink />
      <ConsiderJob />
      <Whyus />
      <Footer />






    </>
  )
}

export default Notice;