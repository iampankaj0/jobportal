import React from 'react';
import Breadcrumb from './Breadcrumb';
import '../assets/css/contact.css';
import Contactads from './contact-components/Contactads';
import Contactadstop from './contact-components/Contactadstop';
import { Link } from 'react-router-dom';
import { Tbody, Tr, Th } from 'react-super-responsive-table';
import { Table } from 'react-bootstrap';
import ConsiderJob from './home-components/ConsiderJob';
import Whyus from './home-components/Whyus';
import Footer from './Footer';


const Contactus = () => {
  return (
    <>
      <section className="latest-job-bread-sec">
        <Breadcrumb main='Home' firstlinkname="Contact Us" />
      </section>

      <Contactadstop />

      <section className="contact-sec">
        <div className="app_wrapper">
          <div className="inner-contact">
            <h1 className='heading'>contact us</h1>

            <p className='welcome-top'>WELCOME TO <span>SARKAARIPARIKSHA.COM</span></p>
            <p className='ranking'>Top Education Website in India</p>
            <p className='more-info'>Contact us For More Information</p>

            <hr className='seprator' />

            <p className="cont-wel">
              Welcome to Sarkaari Pariksha Contact Us Page
            </p>

            <hr className='seprator' />

            <p className="mail-us">
              if Any Feedback or Problem Kindly Mail us on <br />
              <span>SarkaariParikshat@gmail.com</span> OR <span>contact@sarkaaripariksha.com</span> OR <br />
              For Instant Support / Contact Kindly Contact Follow <Link to='/'>Twitter</Link>
            </p>

            <hr className='seprator' />

            <div className="benefits">
              <h2>Benefit of Sarkari Pariksha Wensite</h2>
              <p> <span>Notification Service :</span> After the click ON the Sarkaari Pariksha Website You Get the All Vacancy, Result, Admit Card and Other Information Through Notification / Message.</p>
              <p>Easy to Find Latest Jobs, Sarkari Naukri, Latest Result, Download Admit Card, Answer Key, Syllabus, Exam Pattern, Admission Notification.</p>
            </div>
            <hr className='seprator' />

            <div className="stay-connected">
              <h3>Stay Connected With Sarkari Result</h3>
              <div className="stay-connect-table">
                <Table>
                  <Tbody>
                    <Tr>
                      <Th>For Instant Reply Kindly Contact us Twitter</Th>
                      <Th> <Link to="/"> Click Here </Link> </Th>
                    </Tr>
                    <Tr>
                      <Th>Join Us Our Telegram Page</Th>
                      <Th> <Link to="/"> Click Here </Link> </Th>
                    </Tr>
                    <Tr>
                      <Th>Follow Us for Instagram Page</Th>
                      <Th> <Link to="/"> Click Here </Link> </Th>
                    </Tr>
                    <Tr>
                      <Th>Visit Main Website</Th>
                      <Th> <Link to="/"> Click Here </Link> </Th>
                    </Tr>
                    <Tr>
                      <Th>Join Us on Facebook Like Us to Get All Updates</Th>
                      <Th> <Link to="/"> Click Here </Link> </Th>
                    </Tr>
                  </Tbody>
                </Table>
              </div>
            </div>

          </div>

          <div className="inner-ads-sec">
            <Contactads />
          </div>

        </div>
      </section>

      <Contactadstop />

      <ConsiderJob />
      <Whyus />
      <Footer />



    </>
  )
}

export default Contactus;