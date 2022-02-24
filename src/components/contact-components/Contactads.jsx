import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../constants/images';


const Contactads = () => {
    return (
        <>
            <Link to='/'>
                <img src={images.add1} alt="add" />
            </Link>
            <Link to='/'>
                <img src={images.add2} alt="add" />
            </Link>
        </>
    )
}

export default Contactads