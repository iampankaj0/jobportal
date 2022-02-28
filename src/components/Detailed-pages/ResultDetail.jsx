import React from 'react';
import Breadcrumbthree from '../Breadcrumbthree';
import Footer from '../Footer';
import ConsiderJob from '../home-components/ConsiderJob';
import Whyus from '../home-components/Whyus';
import Bottomadsec from './Latestjobdetail-components/Bottomadsec';
import JobDetailSection from './Latestjobdetail-components/JobDetailSection';
import Topadsec from './Latestjobdetail-components/Topadsec';

const ResultDetail = () => {
    return (
        <>

            <section className="latest-job-bread-sec">
                <Breadcrumbthree main='Home' firstlinkname="Results" link='/result' secondlinkname='You&#x27;re Here' />
            </section>


            <Topadsec />
            <JobDetailSection />
            <Bottomadsec />
            <ConsiderJob />
            <Whyus />
            <Footer />


        </>
    )
}

export default ResultDetail;