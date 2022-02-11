import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../constants/images';
import './Menu.css';
const Menu = () => {

    const [toggleMenu, setToggleMenu] = useState();


    return (
        <>
            <section className='nav-sec'>
                <div className='menu'>
                    <div className="nav-logo">
                        <NavLink to="/" className="nav-link">
                            <img src={images.Logo} alt="" />
                        </NavLink>
                    </div>
                    <div className="desktop-links">
                        <ul>
                            <li> <NavLink exact className='active-css' to="/">Home</NavLink> </li>
                            <li> <NavLink exact className='active-css' to="/latestjob">Latest Jobs</NavLink> </li>
                            <li> <NavLink exact className='active-css' to="/admitcard">Admit card</NavLink></li>
                            <li> <NavLink exact className='active-css' to="/result">Result</NavLink></li>
                            <li> <NavLink exact className='active-css' to="/answerkey">Answer Keys</NavLink></li>
                            <li> <NavLink exact className='active-css' to="/notice">Notices</NavLink></li>
                            <li> <NavLink exact className='active-css' to="/contact">Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="nav-mobile">
                        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

                        {toggleMenu && (
                            <div className="nav-mobile-div slide-bottom">
                                <MdOutlineRestaurantMenu fontSize={27} className='close_navlinks' onClick={() => setToggleMenu(false)} />
                                <ul className='nav-mobile-links'>
                                    <li> <NavLink exact className='active-css' to="/">Home</NavLink> </li>
                                    <li> <NavLink exact className='active-css' to="/latestjob">Latest Jobs</NavLink> </li>
                                    <li> <NavLink exact className='active-css' to="/admitcard">Admit card</NavLink></li>
                                    <li> <NavLink exact className='active-css' to="/result">Result</NavLink></li>
                                    <li> <NavLink exact className='active-css' to="/answerkey">Answer Keys</NavLink></li>
                                    <li> <NavLink exact className='active-css' to="/notice">Notices</NavLink></li>
                                    <li> <NavLink exact className='active-css' to="/contact">Contact Us</NavLink></li>
                                </ul>
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </>
    );
}

export default Menu;