import React from 'react';
import { Link } from 'react-router-dom';

import images from '../../constants/images';
import '../../assets/css/noticemessage.css'
const NoticeMessage = () => {

    return (
        <>
            <section className="notice-message">
                <div className="app_wrapper">
                    <div className="notice-board">
                        <div className="card">
                            <h2>Notice Board</h2>
                            <marquee behavior="scroll" direction="up" onmouseover="this.stop();">
                                <Link to="/">UP Election 2022 Voter Slip Download</Link>
                                <Link to="/">Aadhar Card Download | Appointment Book | Update | PVC Order | Etc 2022</Link>
                                <Link to="/"> UP Scholarship 2021 Online Form </Link>
                                <Link to="/"> MP Rojgar Panjiyan Online Form</Link>
                                <Link to="/"> UP Scholarship Class 9 to 12 Online Form 2020</Link>
                                <Link to="/"> CCC Result, Admit Card,Certificate, Online Form</Link>
                                <Link to="/"> UP Teacher Transfer Online Form 2021 </Link>
                                <Link to="/"> High Security Number Plate HSRP Online Registration 2021
                                    UPSSSC OTR Registration Online Form 2021
                                    Corona Vaccine Online Registration 2021
                                    UP NTSE Online Form 2020
                                </Link>
                                <Link to="/"> MP Rojgar Panjiyan Online Form</Link>
                                <Link to="/"> UP Scholarship Class 9 to 12 Online Form 2020</Link>
                                <Link to="/"> CCC Result, Admit Card,Certificate, Online Form</Link>
                            </marquee>
                        </div>
                    </div>
                    <div className="motivate-mess">
                        <div className="card">
                            <h2>Motivational Message</h2>
                            <div className="motivational-section">
                                <img src={images.Gandhi} alt="gandhiji image" />
                                <p>"If I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning."</p>
                                <p className="writer">-Mahatma Gandhi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NoticeMessage;