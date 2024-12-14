import React from 'react';
// import vid from "./img/"

function App() {
  return (
    <div>
      <h1>Video Example in React</h1>
      <video width="600" controls>
        <source src="D:\birthday\amna\src\img\vid.MP4" type="video/MP4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
