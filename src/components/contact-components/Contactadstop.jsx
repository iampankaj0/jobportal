import React from 'react';
import images from '../../constants/images';
import { Link } from 'react-router-dom';

const Contactadstop = () => {
  return (
    <>
      <section className="top-cont-ads">
        <div className="app_wrapper">
          <Link to='/'>
            <img src={images.add3} alt="add" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Contactadstop;