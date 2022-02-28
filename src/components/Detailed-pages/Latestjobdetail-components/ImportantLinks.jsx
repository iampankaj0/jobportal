import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Tr, Td, Tbody } from 'react-super-responsive-table';

const ImportantLinks = () => {
    return (
        <>
            <section className="important-links">
                <h2>Interested Candidates Can Read the Full Notification Before Apply Online.</h2>

                <h2>Some <span>Useful Important Links</span></h2>


                <Table>
                    <Tbody>
                        <Tr>
                            <Td>Download Answer Key</Td>
                            <Td> <Link to='/'>Click Here</Link> </Td>
                        </Tr>
                        <Tr>
                            <Td>Download Result</Td>
                            <Td> <Link to='/'>Click Here</Link> </Td>
                        </Tr>
                        <Tr>
                            <Td>Download Admit Card</Td>
                            <Td> <Link to='/'>Click Here</Link> </Td>
                        </Tr>
                        <Tr>
                            <Td>Apply Online</Td>
                            <Td> <Link to='/'>Click Here</Link> </Td>
                        </Tr>
                        <Tr>
                            <Td>Download Notification</Td>
                            <Td> <Link to='/'>Click Here</Link> </Td>
                        </Tr>
                        <Tr>
                            <Td>Download Syllabus</Td>
                            <Td> <Link to='/'>Click Here</Link> </Td>
                        </Tr>
                        <Tr>
                            <Td>Join Our Telegram Page</Td>
                            <Td> <Link to='/'>Click Here</Link> </Td>
                        </Tr>
                        <Tr>
                            <Td>Navy Official Website</Td>
                            <Td> <Link to='/'>Click Here</Link> </Td>
                        </Tr>
                    </Tbody>
                </Table>






            </section>
        </>
    )
}

export default ImportantLinks