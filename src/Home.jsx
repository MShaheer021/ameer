import React, { useState } from 'react';
import './Home.css';
// import wish from "./img/wishbg.jpg"
function Home() {


  const messages = [
    "Happy Birthday 🎉🎂 to the love ❤️ of my life! 🥰 Every day with you is a gift 🎁, but today we celebrate 🎉 the amazing person 🥰 you are. Here's to more laughter, more adventures, and a lifetime of ❤️ by your side.",
    "To my beautiful wife 👰, on your special day: You light up my world with your ❤️ and fill my heart with happiness 🥰 every single day. I’m so lucky to call you mine. Happy Birthday 🎉🎂, my ❤️! Mrs Shaheer 💍",
    "Happy Birthday 🎉🎂, my ❤️! You're not just the queen 👑 of my heart ❤️, you're the heartbeat 💓 that keeps me going. May your day be as bright and wonderful as you make my life.",
    "Happy Birthday 🎉🎂 to the woman who makes every moment of my life magical ✨! Your ❤️, your smile 😊, your laughter 😂 – they’re everything I need. Here's to spoiling you today, just as you spoil me with your ❤️ every day.",
    "Happy Birthday 🎉🎂 to my forever ❤️. With each passing year, I fall deeper in ❤️ with you. Your smile 😊, your touch 💕, your kindness – they are the pieces that make my world complete. Today and always, I promise to ❤️ you more than words can say.",
    "To the woman who makes my life a beautiful ❤️ story 📖, Happy Birthday 🎉🎂! You’re my dream come true 💭, my confidant 🤗, my soulmate 💑. Today is all about celebrating you and the incredible ❤️ we share. I can't wait to create even more memories with you.",
    "Happy Birthday 🎉🎂, my darling 🥰! You are the most precious gift 🎁 life has given me, and every moment with you feels like a dream 🌟. Thank you for making our ❤️ the most magical adventure. I’ll ❤️ you today, tomorrow, and forever 💞.",
    "On your birthday 🎉🎂, I want to remind you how much you mean to me. Your ❤️ makes my life brighter 🌟, your laughter 😂 makes my heart lighter 💖, and your presence makes everything better. Happy Birthday 🎉🎂, my ❤️ – you are everything I ever hoped for.",
    "To my incredible wife 👰 on her birthday 🎉🎂: You are the melody 🎶 that plays in my heart ❤️, the light 🌟 that guides my way, and the ❤️ that makes every day worth living. I ❤️ you more than you’ll ever know. May this day be as wonderful as you are to me.",
    "Happy Birthday 🎉🎂 to the woman who makes every day feel like paradise 🏝️. Your ❤️ has transformed my life in the most beautiful ways ✨. Today, I celebrate 🎉 you and the endless joy 😊 you bring into my world. I am so blessed 🙏 to be loved by you."
  ];

   // State to manage the visibility of the custom alert and the message
   const [show, setShow] = useState(false);
   const [message, setMessage] = useState("");
 
   // Function to handle button click and show a random message
   const showAlert = () => {
     // Get a random index from the messages array
     const randomIndex = Math.floor(Math.random() * messages.length);
     const randomMessage = messages[randomIndex];
 
     // Set the message and show the custom alert
     setMessage(randomMessage);
     setShow(true);
   };
 
   // Function to close the custom alert
   const closeAlert = () => {
     setShow(false);
   };

  return (
    <div className='home'>
      <div className="wish">

        

      {/* <button className='wish-btn' onClick={showAlert}>Click For Your wish </button> */}

      </div>

      <div className="wish2">
      {/* <h1>Click the button to see a random message</h1> */}
      {/* <button onClick={showAlert}>Show Random Message</button> */}

      <button className='wish-btn' onClick={showAlert}>Click For Your wish </button>

      {/* Custom alert box */}
      {show && (
        <div className="custom-alert">
          <p>{message}</p>
          <button onClick={closeAlert}>Close</button>
        </div>
      )}
      
      </div>

      
    </div>
  )
}

export default Home
