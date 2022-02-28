import React from 'react'
import '../../../assets/css/latestjobdetail.css';
import DetailHeading from '../Latestjobdetail-components/DetailHeading';
import HowToFill from '../Latestjobdetail-components/HowToFill';
import ImportantDates from '../Latestjobdetail-components/ImportantDates';
import ImportantLinks from '../Latestjobdetail-components/ImportantLinks';
import Rightadsec from '../Latestjobdetail-components/Rightadsec';
import ShortDetailSec from '../Latestjobdetail-components/ShortDetailSec';
import TotalVacancyDetail from '../Latestjobdetail-components/TotalVacancyDetail';
import VacancyName from '../Latestjobdetail-components/VacancyName';

const SyllabusDetailSection = () => {
  return (
    <>
      <section className="job-detail">
        <div className="app_wrapper">
          <div className="inner-jobdetail">
            {/* <h1 className="heading">Job Description</h1> */}

            <DetailHeading heading='Download Syllabus' />

            <ShortDetailSec />
            <VacancyName />
            <ImportantDates />
            <TotalVacancyDetail />
            <HowToFill />
            <ImportantLinks />

          </div>
          <div className="inner-adsection">
            <Rightadsec />
          </div>
        </div>
      </section>
    </>
  )
}

export default SyllabusDetailSection