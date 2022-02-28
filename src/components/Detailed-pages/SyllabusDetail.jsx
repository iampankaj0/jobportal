import React from 'react';
import Breadcrumbthree from '../Breadcrumbthree';
import Footer from '../Footer';
import ConsiderJob from '../home-components/ConsiderJob';
import Whyus from '../home-components/Whyus';
import Bottomadsec from './Latestjobdetail-components/Bottomadsec';
import SyllabusDetailSection from './Syllabusdetail-component/SyllabusDetailSection';
import Topadsec from './Latestjobdetail-components/Topadsec';

const SyllabusDetail = () => {
    return (
        <div>

            <section className="latest-job-bread-sec">
                <Breadcrumbthree main='Home' firstlinkname="Syllabus" link='/syllabus' secondlinkname='You&#x27;re Here' />
            </section>

            <Topadsec />
            <SyllabusDetailSection />
            <Bottomadsec />
            <ConsiderJob />
            <Whyus />
            <Footer />

        </div>
    )
}

export default SyllabusDetail;