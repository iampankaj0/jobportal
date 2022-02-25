import React from 'react';
import { Link } from 'react-router-dom';


const ShortDetailSec = () => {
    return (
        <>
            <div className="post-details">
                <h2 className="post-name">
                    <span>Post Name:</span>
                    <span>Join Indian Navy Various Entries January 2023 Short Service Commission Officers Online Form 2022</span>
                </h2>
                <p className="postdate">
                    <span>Post Date / Update:</span>
                    <span>25 February 2022 | 12:57 AM</span>
                </p>
                <p className="short-info">
                    <span>
                        Short Information:
                    </span>
                    <span>
                        <Link to='/'>Indian Navy (Join Indian Navy)</Link> has issued various entries January 2023 for the recruitment of Short Service Commission Officers. Any candidate who wants to apply Navy Officers 2022 and fulfill the eligibility, they can apply online from 25 February 2022 to 12 March 2022. For complete information related to Navy Recruitment Exam like entry information, eligibility wise post, syllabus information, apply only after reading the advertisement.
                    </span>
                </p>
            </div>
        </>
    )
}

export default ShortDetailSec