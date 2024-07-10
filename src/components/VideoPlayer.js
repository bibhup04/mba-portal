import React, { useRef } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoName }) => {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="video-container">
      <h1>My Video</h1>
      <video
        ref={videoRef}
        autoPlay
        onClick={handleVideoClick}
        className="custom-video"
      >
        <source src={`${process.env.PUBLIC_URL}/${videoName}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
