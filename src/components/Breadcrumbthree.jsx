import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/breadcrumb.css';

const Breadcrumbthree = ({ main, firstlinkname, secondlinkname, link }) => (
    <>
        <section className="breadcrumb-section2">
            <div className="app_wrapper">
                <ul>
                    <li> <Link to='/'> {main} </Link> </li> 
                    <li> <Link to={ link }> {firstlinkname} </Link> </li> 
                    <li> {secondlinkname} </li>
                </ul>
            </div>
        </section>
    </>
);

export default Breadcrumbthree;