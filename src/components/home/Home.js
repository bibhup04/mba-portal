import React from 'react';
import VideoPlayer from '../VideoPlayer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import './Home.css';
import Slider from 'react-slick';


const images = [
    { src: `${process.env.PUBLIC_URL}/7.jpg`, text: 'Description for image 1' },
    { src: `${process.env.PUBLIC_URL}/3.jpg`, text: 'Description for image 2' },
    { src: `${process.env.PUBLIC_URL}/4.jpg`, text: 'Description for image 3' },
    { src: `${process.env.PUBLIC_URL}/5.jpg`, text: 'Description for image 4' },
    // { src: `${process.env.PUBLIC_URL}/5.jpg`, text: 'Description for image 5' },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
};


const Home = () => {
    const videoName = 'basketball.mp4';
    return (
        <div className="home">
            <div className='content'>
                <h1 className="heading">Welcome to Masters Basketball Academy</h1>
                <div className="slider-container">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="slide">
                                <img src={image.src} alt={`Slide ${index}`} />
                                <p className="slide-text">{image.text}</p>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div>
                    <h1>Welcome to My App</h1>
                    <VideoPlayer videoName={videoName} />
                </div>
            </div>
        </div>
    );
};

export default Home;
