import React, { useState } from 'react';
import "./Batpaki.css"
import Carousel from 'react-bootstrap/Carousel';
import i1 from "./img/batpaki/1.jpeg"
import i2 from "./img/batpaki/2.jpeg"
import i3 from "./img/batpaki/3.jpeg"
import i4 from "./img/batpaki/4.jpeg"
import i5 from "./img/batpaki/5.jpeg"
import i6 from "./img/batpaki/6.jpeg"
import i7 from "./img/batpaki/7.jpeg"
import i8 from "./img/batpaki/8.jpeg"




function Memories() {

  return (
    <>

    <div className="main">

        <h1>Bat Paki ❤️</h1>

    <div className="slider1">
      <Carousel fade>
        {/* slide start */}
      <Carousel.Item>
      <img className='img' src={i1} />
      </Carousel.Item>
        {/* slider end */}

        {/* slide start */}
      <Carousel.Item>
      <img className='img' src={i2} />
      </Carousel.Item>
        {/* slider end */}

        {/* slide start */}
      <Carousel.Item>
      <img className='img' src={i3} />
      </Carousel.Item>
        {/* slider end */}

        {/* slide start */}
      <Carousel.Item>
      <img className='img' src={i4} />
      </Carousel.Item>
        {/* slider end */}

        {/* slide start */}
      <Carousel.Item>
      <img className='img' src={i5} />
      </Carousel.Item>
        {/* slider end */}

        {/* slide start */}
      <Carousel.Item>
      <img className='img' src={i6} />
      </Carousel.Item>
        {/* slider end */}

        {/* slide start */}
      <Carousel.Item>
      <img className='img' src={i7} />
      </Carousel.Item>
        {/* slider end */}

        {/* slide start */}
      <Carousel.Item>
      <img className='img' src={i8} />
      </Carousel.Item>
        {/* slider end */}

      

        </Carousel>
    </div>

    </div>

      
    </>
  )
}

export default Memories
