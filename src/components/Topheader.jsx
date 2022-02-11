import React from 'react';
import { Link } from 'react-router-dom';
import images from '../constants/images';

import './Topheader.css';
const Topheader = () => {
    return (
        <>
            <section className="top-header">
                <div className="app_wrapper">
                    <div className="app-logo">
                        <Link to='/'>
                            <img src={images.Logo} alt="app-logo" />
                        </Link>
                    </div>
                    <div className="web-link">
                        <Link className='top-link' to='/'>www.sarkaaricarrier.com</Link>
                    </div>
                    <div className="right-logo">
                        <img src={images.RightLogo} alt="right-logo" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Topheader;