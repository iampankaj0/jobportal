import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../constants/images';

const Rightads = () => {
    return (
        <>
            <Link to='/'>
                <img src={images.add1} alt="" />
            </Link>
            <Link to='/'>
                <img src={images.add1} alt="" />
            </Link>
        </>
    )
}

export default Rightads;