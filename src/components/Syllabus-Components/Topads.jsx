import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../constants/images'

const Topads = () => {
    return (
        <>
            <section className="sylbs-top-ads">
                <div className="app_wrapper">
                    <Link>
                        <img src={images.add3} alt="ads-three" />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Topads