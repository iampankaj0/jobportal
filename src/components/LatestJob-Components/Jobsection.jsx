import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaRegHandPointRight } from 'react-icons/fa';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import images from '../../constants/images';

const Jobsection = () => {



    const [jobs, setJobs] = useState([]);



    const getjob = async () => {
        const response = await fetch('https://gorest.co.in/public/v2/users');
        setJobs(await response.json());
    }

    useEffect(() => {
        getjob();
    }, [])






    return (
        <>
            <section className="lst-job-sec">
                <div className="app_wrapper">
                    <div className="inner-body">
                        <h1 className='heading'>Latest Jobs</h1>

                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>Job Name</Th>
                                    <Th>Start Date</Th>
                                    <Th>Last Date</Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                                {
                                    jobs.map((curjob, i) => {
                                        return (
                                            <>
                                                <Tr>
                                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/latestjobdetail">{curjob.name} , {curjob.email}</Link> </Td>
                                                    <Td> {curjob.gender} </Td>
                                                    <Td> {curjob.status} </Td>
                                                </Tr>
                                            </>
                                        )
                                    })
                                }
                            </Tbody>


                            {/*<Tbody>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">ECL Mining Sirdar Online Form 2022</Link> <img src={images.newBadge} width="33" height="18" alt="new" />  </Td>
                                    <Td>9 April 2019</Td>
                                    <Td>30 April 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Various Officers Entry Online Form 2022</Link> <img src={images.newBadge} width="33" height="18" alt="new" /> </Td>
                                    <Td>19 May 2019</Td>
                                    <Td>19 June 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> <img src={images.newBadge} width="33" height="18" alt="new" /> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                                <Tr>
                                    <Td> <FaRegHandPointRight className='right-hand-icon' /> <Link to="/">Indian Navy Tradesman Online Form 2022</Link> </Td>
                                    <Td>29 June 2019</Td>
                                    <Td>11 July 2019</Td>
                                </Tr>
                            </Tbody> */}
                        </Table>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Jobsection;