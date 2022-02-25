import React from 'react'

const ImportantDates = () => {
    return (
        <>
            <section className="important-details">
                <div className="imp-dates">
                    <h2>Important Dates</h2>
                    <ul>
                        <li>
                            <span>Application Begin:</span><span>25/02/2022</span>
                        </li>
                        <li>
                            <span>Last Date for Registration:</span><span>12/03/2022</span>
                        </li>
                        <li>
                            <span>Last Date Complete Form:</span><span>12/03/2022</span>
                        </li>
                        <li>
                            <span>Exam Date:</span><span>Notified Soon</span>
                        </li>
                    </ul>
                </div>
                <div className="app-fees">
                    <h2>Application Fee</h2>
                    <ul>
                        <li>
                            <span>General / OBC:</span><span>0/-</span>
                        </li>
                        <li>
                            <span>SC / ST:</span><span>0/-</span>
                        </li>
                        <li>
                            <span>No Application Fee in Indian Navy SSCO Entry January 2023.</span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default ImportantDates