import React from 'react';
import Applicationprocess from './About-components/Applicationprocess';
import Jobhelp from './About-components/Jobhelp';
import Jobkind from './About-components/Jobkind';
import Resourceshelp from './About-components/Resourceshelp';
import Witness from './About-components/Witness';
import ConsiderJob from './home-components/ConsiderJob';
import Whyus from './home-components/Whyus';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <section className="latest-job-bread-sec">
        <Breadcrumb main='Home' firstlinkname="About Us" />
      </section>

      <Resourceshelp />
      <Jobkind />
      <Witness />
      <Applicationprocess />
      <Jobhelp />
      <ConsiderJob />
      <Whyus />
      <Footer />



    </>
  )
}

export default About;