import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { IoIosArrowDown } from 'react-icons/io';
import '../../assets/css/Jobsecmobile.css';
import { Link } from 'react-router-dom';

import images from '../../constants/images';

export default function Jobsecmobile() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (

        <>
            <section className="mobile-job-section">
                <div className="app_wrapper">
                    <Accordion className='accor-slide' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary className='accor-heading' expandIcon={<IoIosArrowDown style={{ color: '#fff' }} fontSize='20' />} aria-controls="panel1bh-content" id="panel1bh-header" >
                            <h3 sx={{ width: '33%', flexShrink: 0 }}>
                                Result
                            </h3>
                        </AccordionSummary>
                        <AccordionDetails className='accor-links-sec' >
                            <div className="links">
                                <ul>
                                    <li> <Link to="/resultdetail">RBI Office Attendant 2020 Final Result</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/resultdetail">NSUT Various Non Teaching Post Result 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/resultdetail">NTA UGC NET Result 2022</Link> </li>
                                    <li> <Link to="/resultdetail">RSMSSB Stenographer 2018 Phase II Exam Results</Link> </li>
                                    <li> <Link to="/resultdetail">DSSSB TGT Social Science Result 2022</Link> </li>
                                    <li> <Link to="/resultdetail">UPHESC Assistant Professor Result 2022</Link> </li>
                                    <li> <Link to="/resultdetail">IBPS PO XI Main Result with Score Card 2022</Link> </li>
                                    <li> <Link to="/resultdetail">BPSC Assistant Conservator Forest 2019 Final Result</Link> </li>
                                    <li> <Link to="/resultdetail">IBPS SO XI Main Result 2022</Link> </li>
                                    <li> <Link to="/resultdetail">MPPSC Pre 2020 Result with Score Card</Link> </li>
                                    <li> <Link to="/resultdetail">BPSC Civil Judge 2020 Main Result</Link> </li>
                                    <li> <Link to="/resultdetail">RPSC Sub Inspector SI 2021 Marks</Link> </li>
                                    <li> <Link to="/resultdetail">CISCE Board 12 & 10 1st Semester Result 2022</Link> </li>
                                    <li> <Link to="/resultdetail">DFCCIL Various Post 04/2021 Result</Link> </li>
                                    <li> <Link to="/resultdetail">SSC Upcoming Result 2022</Link> </li>
                                    <li> <Link to="/resultdetail">Bihar Police BPSSSC Sub Inspector SI Result 2022</Link> </li>
                                    <li> <Link to="/resultdetail">UPSC Civil Services 2020 Not Qualified Candidate Marks</Link> </li>
                                    <li> <Link to="/resultdetail">SSC CPO SI 2019 Final Result</Link> </li>
                                </ul>
                                <Link to='/result'>
                                    <button type='button' className='view-morebtn'>View More</button>
                                </Link>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accor-slide' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary className='accor-heading' expandIcon={<IoIosArrowDown style={{ color: '#fff' }} fontSize='20' />} aria-controls="panel2bh-content" id="panel2bh-header" >
                            <h3 sx={{ width: '33%', flexShrink: 0 }}>
                                Admit Card
                            </h3>
                        </AccordionSummary>
                        <AccordionDetails className='accor-links-sec' >
                            <div className="links">
                                <ul>
                                    <li> <Link to="/admitcarddetail">RPSC RAS 2021 Mains Admit Card</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/admitcarddetail">BPSC Lower Division Clerk LDC Admit Card 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/admitcarddetail">DSSSB Exam 20-27 February 2022 Admit Card</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/admitcarddetail">RSMSSB Patwari Document Verification Schedule 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/admitcarddetail">Delhi District Court Process Server Interview Letter 2022</Link> </li>
                                    <li> <Link to="/admitcarddetail">ICAR IARI Technician Exam Admit Card 2022</Link> </li>
                                    <li> <Link to="/admitcarddetail">IBPS PO XI Interview Letter 2022</Link> </li>
                                    <li> <Link to="/admitcarddetail">NHB Bank Assistant Manager Admit Card 2022</Link> </li>
                                    <li> <Link to="/admitcarddetail">MP High Court AG III, Stenographer Admit Card 2022</Link> </li>
                                    <li> <Link to="/admitcarddetail">CSBC Bihar Police Sepoy Constable PET Exam Date 2022</Link> </li>
                                    <li> <Link to="/admitcarddetail">UPPCL JE Civil Admit Card 2022</Link> </li>
                                    <li> <Link to="/admitcarddetail">UPPCL Assistant Accountant Admit Card 2022</Link> </li>
                                    <li> <Link to="/admitcarddetail">UPPCL ARO 2021 Admit Card</Link> </li>
                                    <li> <Link to="/admitcarddetail">AWES Army School TGT PGT PRT Admit Card 2022</Link> </li>
                                    <li> <Link to="/admitcarddetail">CSBC Bihar Police Prohibition Constable Admit Card 2022</Link> </li>
                                    <li> <Link to="/admitcarddetail">SEBI Assistant Manager Admit Card 2022</Link> </li>
                                    <li> <Link to="/admitcarddetail">DSSSB Exam Date March 2022</Link> </li>
                                    <li> <Link to="/admitcarddetail">UPSC IFS 2021 Main Admit Card</Link> </li>
                                </ul>
                                <Link to='/admitcard'>
                                    <button type='button' className='view-morebtn'>View More</button>
                                </Link>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accor-slide' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary className='accor-heading' expandIcon={<IoIosArrowDown style={{ color: '#fff' }} fontSize='20' />} aria-controls="panel3bh-content" id="panel3bh-header" >
                            <h3 sx={{ width: '33%', flexShrink: 0 }}>
                                Latest Jobs
                            </h3>
                        </AccordionSummary>
                        <AccordionDetails className='accor-links-sec' >
                            <div className="links">
                                <ul>
                                    <li> <Link to="/latestjobdetail">UPRVUNL Various Post Online Form 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/latestjobdetail">Indian Navy Various Officers Entry Online Form 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/latestjobdetail">Indian Navy Tradesman Online Form 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/latestjobdetail">Coast Guard Assistant Commandant 01/2023 Online Form</Link> </li>
                                    <li> <Link to="/latestjobdetail">UPPSC Assistant Professor 2020 Online Form Re Open</Link> </li>
                                    <li> <Link to="/latestjobdetail">RBI Assistant Online Form 2022</Link> </li>
                                    <li> <Link to="/latestjobdetail">MPPSC Pre 2021 Online Form Re Open</Link> </li>
                                    <li> <Link to="/latestjobdetail">UP NHM CHO Online Form 2022 Extended</Link> </li>
                                    <li> <Link to="/latestjobdetail">Bihar SHSB CHO Online Form 2022</Link> </li>
                                    <li> <Link to="/latestjobdetail">Indian Airforce Apprentice Online Form 2022</Link> </li>
                                    <li> <Link to="/latestjobdetail">East Coast Railway Apprentice Online Form 2022</Link> </li>
                                    <li> <Link to="/latestjobdetail">UPPSC Region Inspector 2020 Main Online Form</Link> </li>
                                    <li> <Link to="/latestjobdetail">MPPSC Pre 2021 Online Form Re Open</Link> </li>
                                    <li> <Link to="/latestjobdetail">UP NHM CHO Online Form 2022 Extended</Link> </li>
                                    <li> <Link to="/latestjobdetail">Bihar SHSB CHO Online Form 2022</Link> </li>
                                    <li> <Link to="/latestjobdetail">Indian Airforce Apprentice Online Form 2022</Link> </li>
                                    <li> <Link to="/latestjobdetail">East Coast Railway Apprentice Online Form 2022</Link> </li>
                                    <li> <Link to="/latestjobdetail">UPPSC Region Inspector 2020 Main Online Form</Link> </li>
                                </ul>
                                <Link to='/latestjob'>
                                    <button type='button' className='view-morebtn'>View More</button>
                                </Link>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accor-slide' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary className='accor-heading' expandIcon={<IoIosArrowDown style={{ color: '#fff' }} fontSize='20' />} aria-controls="panel4bh-content" id="panel4bh-header" >
                            <h3 sx={{ width: '33%', flexShrink: 0 }}>
                                Answer Key
                            </h3>
                        </AccordionSummary>
                        <AccordionDetails className='accor-links-sec' >
                            <div className="links">
                                <ul>
                                    <li> <Link to="/anskeydetail">RBI Office Attendant 2020 Final Result</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/anskeydetail">NSUT Various Non Teaching Post Result 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/anskeydetail">NTA UGC NET Result 2022</Link> </li>
                                    <li> <Link to="/anskeydetail">RSMSSB Stenographer 2018 Phase II Exam Results</Link> </li>
                                    <li> <Link to="/anskeydetail">DSSSB TGT Social Science Result 2022</Link> </li>
                                    <li> <Link to="/anskeydetail">UPHESC Assistant Professor Result 2022</Link> </li>
                                    <li> <Link to="/anskeydetail">IBPS PO XI Main Result with Score Card 2022</Link> </li>
                                    <li> <Link to="/anskeydetail">BPSC Assistant Conservator Forest 2019 Final Result</Link> </li>
                                    <li> <Link to="/anskeydetail">IBPS SO XI Main Result 2022</Link> </li>
                                    <li> <Link to="/anskeydetail">MPPSC Pre 2020 Result with Score Card</Link> </li>
                                </ul>
                                <Link to='/answerkey'>
                                    <button type='button' className='view-morebtn'>View More</button>
                                </Link>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accor-slide' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary className='accor-heading' expandIcon={<IoIosArrowDown style={{ color: '#fff' }} fontSize='20' />} aria-controls="panel5bh-content" id="panel5bh-header" >
                            <h3 sx={{ width: '33%', flexShrink: 0 }}>
                                Important News
                            </h3>
                        </AccordionSummary>
                        <AccordionDetails className='accor-links-sec' >
                            <div className="links">
                                <ul>
                                    <li> <Link to="/impdetail">RPSC RAS 2021 Mains Admit Card</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/impdetail">BPSC Lower Division Clerk LDC Admit Card 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/impdetail">DSSSB Exam 20-27 February 2022 Admit Card</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/impdetail">RSMSSB Patwari Document Verification Schedule 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/impdetail">Delhi District Court Process Server Interview Letter 2022</Link> </li>
                                    <li> <Link to="/impdetail">ICAR IARI Technician Exam Admit Card 2022</Link> </li>
                                    <li> <Link to="/impdetail">IBPS PO XI Interview Letter 2022</Link> </li>
                                    <li> <Link to="/impdetail">NHB Bank Assistant Manager Admit Card 2022</Link> </li>
                                    <li> <Link to="/impdetail">MP High Court AG III, Stenographer Admit Card 2022</Link> </li>
                                    <li> <Link to="/impdetail">CSBC Bihar Police Sepoy Constable PET Exam Date 2022</Link> </li>
                                </ul>
                                <Link to='/'>
                                    <button type='button' className='view-morebtn'>View More</button>
                                </Link>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accor-slide' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary className='accor-heading' expandIcon={<IoIosArrowDown style={{ color: '#fff' }} fontSize='20' />} aria-controls="panel6bh-content" id="panel6bh-header" >
                            <h3 sx={{ width: '33%', flexShrink: 0 }}>
                                Syllabus
                            </h3>
                        </AccordionSummary>
                        <AccordionDetails className='accor-links-sec' >
                            <div className="links">
                                <ul>
                                    <li> <Link to="/syllabusbsdetail">UPRVUNL Various Post Online Form 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/syllabusbsdetail">Indian Navy Various Officers Entry Online Form 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/syllabusbsdetail">Indian Navy Tradesman Online Form 2022</Link> <img src={images.newBadge} alt="newBadge" /> </li>
                                    <li> <Link to="/syllabusbsdetail">Coast Guard Assistant Commandant 01/2023 Online Form</Link> </li>
                                    <li> <Link to="/syllabusbsdetail">UPPSC Assistant Professor 2020 Online Form Re Open</Link> </li>
                                    <li> <Link to="/syllabusbsdetail">RBI Assistant Online Form 2022</Link> </li>
                                    <li> <Link to="/syllabusbsdetail">MPPSC Pre 2021 Online Form Re Open</Link> </li>
                                    <li> <Link to="/syllabusbsdetail">UP NHM CHO Online Form 2022 Extended</Link> </li>
                                    <li> <Link to="/syllabusbsdetail">Bihar SHSB CHO Online Form 2022</Link> </li>
                                    <li> <Link to="/syllabusbsdetail">Indian Airforce Apprentice Online Form 2022</Link> </li>
                                </ul>
                                <Link to='/syllabus'>
                                    <button type='button' className='view-morebtn'>View More</button>
                                </Link>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </section>
        </>
    );
}