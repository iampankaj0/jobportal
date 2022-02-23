import React from 'react';

import Breadcrumb from './Breadcrumb';
import '../assets/css/answerkey.css';
import Topads from './AnswerKey-Components/Topads';
import Answerkeylinks from './AnswerKey-Components/Answerkeylinks';
import ConsiderJob from './home-components/ConsiderJob';
import Whyus from './home-components/Whyus';
import Footer from './Footer';

const Answerkey = () => {
  return (
    <>
      <section className="latest-job-bread-sec">
        <Breadcrumb main='Home' firstlinkname="Answer Keys" />
      </section>

      <Topads />
      <Answerkeylinks />
      <ConsiderJob />
      <Whyus />
      <Footer />

    </>
  )
}

export default Answerkey;