import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import VideoPlayer from '../VideoPlayer';

const images = [
    { src: `${process.env.PUBLIC_URL}/7.jpg`, text: 'Description for image 1' },
    { src: `${process.env.PUBLIC_URL}/3.jpg`, text: 'Description for image 2' },
    { src: `${process.env.PUBLIC_URL}/4.jpg`, text: 'Description for image 3' },
    { src: `${process.env.PUBLIC_URL}/5.jpg`, text: 'Description for image 4' },
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
            <div className='heading-container'>
                <h1 className="heading">Welcome to Masters Basketball Academy</h1>
            </div>
            <div className='content'>

                <div className='body'>
                    <div className='slider-upcomingEvent-container'>
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
                        <div className="upcoming-events">
                            {/* Upcoming events component or content */}
                            <h2>Upcoming Events</h2>
                            <p>Details about upcoming events will go here.</p>
                        </div>
                    </div>

                    <div className='other-content'>
                        <div className='video-description-content'>
                            <div className='video'>
                                {/* <iframe width="100%" height="315" src="https://www.youtube.com/watch?v=Fm2ugbMM2-w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                                <VideoPlayer videoName={videoName} />
                            </div>
                            <div className='description'>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className='video-description-content'>
                            <div className='description'>
                                <p>Description</p>
                            </div>
                            <div className='video'>
                                {/* <iframe width="100%" height="315" src="https://www.youtube.com/watch?v=Fm2ugbMM2-w" frameborder="0" allowfullscreen></iframe> */}
                                <VideoPlayer videoName={videoName} />
                            </div>
                        </div>
                        <div className='video-description-content'>
                            <div className='video'>
                                {/* <iframe width="100%" height="315" src="https://www.youtube.com/watch?v=Fm2ugbMM2-w" frameborder="0" allowfullscreen></iframe> */}
                                <VideoPlayer videoName={videoName} />
                            </div>
                            <div className='description'>
                                <p>Description</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
