import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./home.scss"

import { Container, Image } from 'react-bootstrap';




const Home = () => {
 const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className='slider'>

   
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image className='img' src='./images/slider1.jpg' fluid />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <Image src='./images/slider2.jpg' fluid/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='./images/slider3.jpg' fluid/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  
     </Container>
  );
}


export default Home