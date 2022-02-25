import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../constants/images';

const Rightadsec = () => {
    return (
        <>
            <Link to='/'>
                <img src={images.add5} alt="ad-img" />
            </Link>
            <Link to='/'>
                <img src={images.add1} alt="ad-img" />
            </Link>
        </>
    )
}

export default Rightadsec