import React from 'react';
import Breadcrumbthree from '../Breadcrumbthree';
import Footer from '../Footer';
import ConsiderJob from '../home-components/ConsiderJob';
import Whyus from '../home-components/Whyus';
import Bottomadsec from './Latestjobdetail-components/Bottomadsec';
import AdmitDetailSection from './AdmitDetail-Component/AdmitDetailSection';
import Topadsec from './Latestjobdetail-components/Topadsec';

const AdmitCardDetail = () => {
    return (
        <div>

            <section className="latest-job-bread-sec">
                <Breadcrumbthree main='Home' firstlinkname="Admit Card" link='/admitcard' secondlinkname='You&#x27;re Here' />
            </section>

            <Topadsec />
            <AdmitDetailSection />
            <Bottomadsec />
            <ConsiderJob />
            <Whyus />
            <Footer />

        </div>
    )
}

export default AdmitCardDetail;