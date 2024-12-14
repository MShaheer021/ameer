import React, { useState, useEffect } from 'react';
import './Loader.css'; // Import the CSS for styling the loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase the loader
    setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      {/* <h1>Welcome to My Lovely Website</h1>
      <p>Content is now loaded!</p> */}
    </div>
  );
}

// Loader Component
function Loader() {
  return (
    <div className="loader-container">
      <div className="heart-loader">
        <div className="heart"></div>
        {/* <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div> */}
      </div>
      <p>Loading for my love...</p>
    </div>
  );
}

export default App;
