import React from 'react'
import '../../../assets/css/latestjobdetail.css';
import ImportantDates from './ImportantDates';
import Rightadsec from './Rightadsec';
import ShortDetailSec from './ShortDetailSec';
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