import React, { useRef, useState } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoName }) => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <div className="video-container">
      <div className="video-wrapper" onClick={handleVideoClick}>
        <video
          ref={videoRef}
          className="custom-video"
        >
          <source src={`${process.env.PUBLIC_URL}/${videoName}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {isPaused && (
          <div className="play-overlay">
            <div className="play-button"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
