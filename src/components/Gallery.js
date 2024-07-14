import React from 'react';
import VideoPlayer from './VideoPlayer';

const Gallery = () => {
    const videoName = 'basketball.mp4';
    return (
        <div className='home'>
            <div className='top-heading'>
                <h1>Gallery</h1>
            </div>
            <div className='gallery-container'>
            <p>Photos and videos of achievements...</p>
            <img src="path_to_image" alt="Gallery" />
            <div>
                <h1>Welcome to My App</h1>
                <VideoPlayer videoName={videoName} />
            </div>
            </div>
        </div>
    );
};

export default Gallery;
