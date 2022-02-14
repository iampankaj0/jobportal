import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import images from '../../constants/images';
import '../../assets/css/Carousel.css';
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={images.Slide1} alt="slider-image"/>
                </div>
                <div>
                    <img src={images.Slide2} alt="slider-image"/>
                </div>
                <div>
                    <img src={images.Slide3} alt="slider-image"/>
                </div>
                <div>
                    <img src={images.Slide4} alt="slider-image"/>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;