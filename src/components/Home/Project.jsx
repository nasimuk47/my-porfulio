/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../../assets/bistruboss-resturent.png";
import slide2 from "../../assets/tourguide.png";
import slide3 from "../../assets/clothlopp.png";
import slide4 from "../../assets/automotive.png";
import slide5 from "../../assets/dragon.png";
import slide6 from "../../assets/summersale.png";

const Project = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: currentSlide,
        autoplay: true,
        autoplaySpeed: 1500,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        },
    };

    const imageStyle = {
        margin: "auto",
        display: "block",
        width: "90%",
        height: "auto",
        maxHeight: "600px",
    };

    return (
        <section className="text-center ">
            <h1 className="text-3xl font-bold text-blue-500 mt-24">Projects</h1>
            <div className="divider divider-info w-[150px] mx-auto"></div>

            <Slider {...settings}>
                {[slide5, slide4, slide3, slide2, slide1, slide6].map(
                    (slide, index) => (
                        <div key={index}>
                            <img
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                style={imageStyle}
                            />
                        </div>
                    )
                )}
            </Slider>
        </section>
    );
};

export default Project;
