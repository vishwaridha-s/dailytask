import React, { useRef } from "react";
import "./App.css";

function App() {
  const videoRef = useRef(null);

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="app">
      <h1>React YouTube Video with Pause Button</h1>
      <div className="video-container">
        {/* Embedding a YouTube video */}
        <video
          ref={videoRef}
          controls
          width="640"
          height="360"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="pause-button" onClick={handlePause}>
        Pause
      </button>
    </div>
  );
}
export default App;
