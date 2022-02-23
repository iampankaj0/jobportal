import React from 'react'
import { Link } from 'react-router-dom';
import { GrNew } from 'react-icons/gr';

import images from '../../constants/images';
import '../../assets/css/jobsection.css';
const jobsection = () => {
    return (
        <>
            <section className="job-section">
                <div className="app_wrapper">
                    <h2 className='heading'> <GrNew /> Sarkaari Pariksha : sarkaaripariksha.Com Sarkari Naukri Latest Jobs Online Form at Sarkaari Pariksha 2022</h2>
                </div>
                <div className="app_wrapper">
                    {/* Result Start */}
                    <div className="result">
                        <div className="sec-body">
                            <h2>Result</h2>
                            <div className="links">
                                <ul>
                                    <li> <Link to="/">RBI Office Attendant 2020 Final Result</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">NSUT Various Non Teaching Post Result 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">NTA UGC NET Result 2022</Link> </li>
                                    <li> <Link to="/">RSMSSB Stenographer 2018 Phase II Exam Results</Link> </li>
                                    <li> <Link to="/">DSSSB TGT Social Science Result 2022</Link> </li>
                                    <li> <Link to="/">UPHESC Assistant Professor Result 2022</Link> </li>
                                    <li> <Link to="/">IBPS PO XI Main Result with Score Card 2022</Link> </li>
                                    <li> <Link to="/">BPSC Assistant Conservator Forest 2019 Final Result</Link> </li>
                                    <li> <Link to="/">IBPS SO XI Main Result 2022</Link> </li>
                                    <li> <Link to="/">MPPSC Pre 2020 Result with Score Card</Link> </li>
                                    <li> <Link to="/">BPSC Civil Judge 2020 Main Result</Link> </li>
                                    <li> <Link to="/">RPSC Sub Inspector SI 2021 Marks</Link> </li>
                                    <li> <Link to="/">CISCE Board 12 & 10 1st Semester Result 2022</Link> </li>
                                    <li> <Link to="/">DFCCIL Various Post 04/2021 Result</Link> </li>
                                    <li> <Link to="/">SSC Upcoming Result 2022</Link> </li>
                                    <li> <Link to="/">Bihar Police BPSSSC Sub Inspector SI Result 2022</Link> </li>
                                    <li> <Link to="/">UPSC Civil Services 2020 Not Qualified Candidate Marks</Link> </li>
                                    <li> <Link to="/">SSC CPO SI 2019 Final Result</Link> </li>
                                </ul>
                                <Link to='/result'>
                                    <button type='button' className='view-morebtn'>View More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Result Ends */}

                    {/* Admit Card Start */}
                    <div className="admit-card">
                        <div className="sec-body">
                            <h2>Admit Card</h2>
                            <div className="links">
                                <ul>
                                    <li> <Link to="/">RPSC RAS 2021 Mains Admit Card</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">BPSC Lower Division Clerk LDC Admit Card 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">DSSSB Exam 20-27 February 2022 Admit Card</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">RSMSSB Patwari Document Verification Schedule 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">Delhi District Court Process Server Interview Letter 2022</Link> </li>
                                    <li> <Link to="/">ICAR IARI Technician Exam Admit Card 2022</Link> </li>
                                    <li> <Link to="/">IBPS PO XI Interview Letter 2022</Link> </li>
                                    <li> <Link to="/">NHB Bank Assistant Manager Admit Card 2022</Link> </li>
                                    <li> <Link to="/">MP High Court AG III, Stenographer Admit Card 2022</Link> </li>
                                    <li> <Link to="/">CSBC Bihar Police Sepoy Constable PET Exam Date 2022</Link> </li>
                                    <li> <Link to="/">UPPCL JE Civil Admit Card 2022</Link> </li>
                                    <li> <Link to="/">UPPCL Assistant Accountant Admit Card 2022</Link> </li>
                                    <li> <Link to="/">UPPCL ARO 2021 Admit Card</Link> </li>
                                    <li> <Link to="/">AWES Army School TGT PGT PRT Admit Card 2022</Link> </li>
                                    <li> <Link to="/">CSBC Bihar Police Prohibition Constable Admit Card 2022</Link> </li>
                                    <li> <Link to="/">SEBI Assistant Manager Admit Card 2022</Link> </li>
                                    <li> <Link to="/">DSSSB Exam Date March 2022</Link> </li>
                                    <li> <Link to="/">UPSC IFS 2021 Main Admit Card</Link> </li>
                                </ul>
                                <Link to='/admitcard'>
                                    <button type='button' className='view-morebtn'>View More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Admit Card Ends */}

                    {/* Latest Jobs Start */}
                    <div className="lst-job">
                        <div className="sec-body">
                            <h2>Latest Jobs</h2>
                            <div className="links">
                                <ul>
                                    <li> <Link to="/">UPRVUNL Various Post Online Form 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">Indian Navy Various Officers Entry Online Form 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">Coast Guard Assistant Commandant 01/2023 Online Form</Link> </li>
                                    <li> <Link to="/">UPPSC Assistant Professor 2020 Online Form Re Open</Link> </li>
                                    <li> <Link to="/">RBI Assistant Online Form 2022</Link> </li>
                                    <li> <Link to="/">MPPSC Pre 2021 Online Form Re Open</Link> </li>
                                    <li> <Link to="/">UP NHM CHO Online Form 2022 Extended</Link> </li>
                                    <li> <Link to="/">Bihar SHSB CHO Online Form 2022</Link> </li>
                                    <li> <Link to="/">Indian Airforce Apprentice Online Form 2022</Link> </li>
                                    <li> <Link to="/">East Coast Railway Apprentice Online Form 2022</Link> </li>
                                    <li> <Link to="/">UPPSC Region Inspector 2020 Main Online Form</Link> </li>
                                    <li> <Link to="/">MPPSC Pre 2021 Online Form Re Open</Link> </li>
                                    <li> <Link to="/">UP NHM CHO Online Form 2022 Extended</Link> </li>
                                    <li> <Link to="/">Bihar SHSB CHO Online Form 2022</Link> </li>
                                    <li> <Link to="/">Indian Airforce Apprentice Online Form 2022</Link> </li>
                                    <li> <Link to="/">East Coast Railway Apprentice Online Form 2022</Link> </li>
                                    <li> <Link to="/">UPPSC Region Inspector 2020 Main Online Form</Link> </li>
                                </ul>
                                <Link to='/latestjob'>
                                    <button type='button' className='view-morebtn'>View More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Latest Jobs Ends */}
                </div>

                <div className="app_wrapper">
                    {/* Answer Key Start */}
                    <div className="answer-key">
                        <div className="sec-body">
                            <h2>Answer Key</h2>
                            <div className="links">
                                <ul>
                                    <li> <Link to="/">RBI Office Attendant 2020 Final Result</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">NSUT Various Non Teaching Post Result 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">NTA UGC NET Result 2022</Link> </li>
                                    <li> <Link to="/">RSMSSB Stenographer 2018 Phase II Exam Results</Link> </li>
                                    <li> <Link to="/">DSSSB TGT Social Science Result 2022</Link> </li>
                                    <li> <Link to="/">UPHESC Assistant Professor Result 2022</Link> </li>
                                    <li> <Link to="/">IBPS PO XI Main Result with Score Card 2022</Link> </li>
                                    <li> <Link to="/">BPSC Assistant Conservator Forest 2019 Final Result</Link> </li>
                                    <li> <Link to="/">IBPS SO XI Main Result 2022</Link> </li>
                                    <li> <Link to="/">MPPSC Pre 2020 Result with Score Card</Link> </li>
                                </ul>
                                <Link to='/answerkey'>
                                    <button type='button' className='view-morebtn'>View More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Answer Key Ends */}

                    {/* Important News Start */}
                    <div className="imp-news">
                        <div className="sec-body">
                            <h2>Important</h2>
                            <div className="links">
                                <ul>
                                    <li> <Link to="/">RPSC RAS 2021 Mains Admit Card</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">BPSC Lower Division Clerk LDC Admit Card 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">DSSSB Exam 20-27 February 2022 Admit Card</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">RSMSSB Patwari Document Verification Schedule 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">Delhi District Court Process Server Interview Letter 2022</Link> </li>
                                    <li> <Link to="/">ICAR IARI Technician Exam Admit Card 2022</Link> </li>
                                    <li> <Link to="/">IBPS PO XI Interview Letter 2022</Link> </li>
                                    <li> <Link to="/">NHB Bank Assistant Manager Admit Card 2022</Link> </li>
                                    <li> <Link to="/">MP High Court AG III, Stenographer Admit Card 2022</Link> </li>
                                    <li> <Link to="/">CSBC Bihar Police Sepoy Constable PET Exam Date 2022</Link> </li>
                                </ul>
                                <Link to='/'>
                                    <button type='button' className='view-morebtn'>View More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Importbt News Ends */}

                    {/* Syllabus Start */}
                    <div className="syllabus">
                        <div className="sec-body">
                            <h2>Syllabus</h2>
                            <div className="links">
                                <ul>
                                    <li> <Link to="/">UPRVUNL Various Post Online Form 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">Indian Navy Various Officers Entry Online Form 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/">Coast Guard Assistant Commandant 01/2023 Online Form</Link> </li>
                                    <li> <Link to="/">UPPSC Assistant Professor 2020 Online Form Re Open</Link> </li>
                                    <li> <Link to="/">RBI Assistant Online Form 2022</Link> </li>
                                    <li> <Link to="/">MPPSC Pre 2021 Online Form Re Open</Link> </li>
                                    <li> <Link to="/">UP NHM CHO Online Form 2022 Extended</Link> </li>
                                    <li> <Link to="/">Bihar SHSB CHO Online Form 2022</Link> </li>
                                    <li> <Link to="/">Indian Airforce Apprentice Online Form 2022</Link> </li>
                                </ul>
                                <Link to='/syllabus'>
                                    <button type='button' className='view-morebtn'>View More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Syllabus Ends */}
                </div>

            </section>
        </>
    )
}

export default jobsection;