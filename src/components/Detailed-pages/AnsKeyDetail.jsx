import React from 'react';
import Breadcrumbthree from '../Breadcrumbthree';
import Footer from '../Footer';
import ConsiderJob from '../home-components/ConsiderJob';
import Whyus from '../home-components/Whyus';
import Bottomadsec from './Latestjobdetail-components/Bottomadsec';
import JobDetailSection from './Latestjobdetail-components/JobDetailSection';
import Topadsec from './Latestjobdetail-components/Topadsec';

const AnsKeyDetail = () => {
    return (
        <div>

            <section className="latest-job-bread-sec">
                <Breadcrumbthree main='Home' firstlinkname="Answer Key" link='/answerkey' secondlinkname='You&#x27;re Here' />
            </section>


            <Topadsec />
            <JobDetailSection />
            <Bottomadsec />
            <ConsiderJob />
            <Whyus />
            <Footer />


        </div>
    )
}

export default AnsKeyDetail;