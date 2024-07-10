import React from 'react';
import VideoPlayer from './VideoPlayer';

const Gallery = () => {
    const videoName = 'basketball.mp4';
    return (
        <div>
            <h1>Gallery</h1>
            <p>Photos and videos of achievements...</p>
            <img src="path_to_image" alt="Gallery" />
            <div>
                <h1>Welcome to My App</h1>
                <VideoPlayer videoName={videoName} />
            </div>
        </div>
    );
};

export default Gallery;
