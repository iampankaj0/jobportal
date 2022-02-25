import React from 'react'
import '../../../assets/css/latestjobdetail.css';
import HowToFill from './HowToFill';
import ImportantDates from './ImportantDates';
import ImportantLinks from './ImportantLinks';
import Rightadsec from './Rightadsec';
import ShortDetailSec from './ShortDetailSec';
import TotalVacancyDetail from './TotalVacancyDetail';
import VacancyName from './VacancyName';

const JobDetailSection = () => {
  return (
    <>
      <section className="job-detail">
        <div className="app_wrapper">
          <div className="inner-jobdetail">
            <h1 className="heading">Job Description</h1>

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

export default JobDetailSection