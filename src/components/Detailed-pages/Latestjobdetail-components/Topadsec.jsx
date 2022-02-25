import React from 'react'
import { Link } from 'react-router-dom';
import images from '../../../constants/images';

const Topadsec = () => {
  return (
    <>
      <section className="sylbs-top-ads">
        <div className="app_wrapper">
          <Link to='/'>
            <img src={images.add4} alt="ads-three" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Topadsec