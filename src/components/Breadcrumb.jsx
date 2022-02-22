import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/breadcrumb.css';

const Breadcrumb = ({ main, firstlinkname, secondlinkname }) => (
    <>
        <section class="breadcrumb-section">
            <div className="app_wrapper">
                <ul>
                    <li> <Link to='/'> {main} </Link> </li> 
                    <li> {firstlinkname} </li> 
                    <li> {secondlinkname} </li>
                </ul>
            </div>
        </section>
    </>
);

export default Breadcrumb;