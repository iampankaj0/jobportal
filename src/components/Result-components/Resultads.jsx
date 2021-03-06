import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../constants/images';

const Resultads = () => {
    return (
        <>
            <Link to='/'>
                <img src={images.add1} alt="add-one" />
            </Link>
            <Link to='/'>
                <img src={images.add2} alt="add-two" />
            </Link>
        </>
    )
}

export default Resultads;