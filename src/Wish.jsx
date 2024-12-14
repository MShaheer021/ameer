import React, { useState, useEffect } from 'react';
import './Wish.css'; // Import the CSS file for animations

function App() {
  // State to control the visibility of the animation
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the animation after 10 seconds
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 10000); // 10 seconds in milliseconds

    // Clean up the timer when the component unmounts or when the timer is cleared
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {showAnimation && (
        <>
          {/* Balloons */}
          {[...Array(30)].map((_, index) => (
            <div key={index} className={`balloon balloon${index + 1}`}>🎈</div>
          ))}

          {/* You can keep hearts or remove them */}
          {/* <div className="heart heart1">❤️</div>
          <div className="heart heart2">❤️</div>
          <div className="heart heart3">❤️</div>
          <div className="heart heart4">❤️</div> */}
        </>
      )}
    </div>
  );
}

export default App;
