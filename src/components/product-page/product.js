import React, {  useEffect, useState } from 'react'
import {API_URL} from "../../API";
import axios from 'axios';
import { Card,  Container, Image,  } from 'react-bootstrap';
import "./product.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Product = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
  axios
    .get(API_URL)
    .then((res) => {
      console.log(res.data);
      setBooks(res.data);
    })
    .catch((err) => console.log(err));
}, []);

const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
  ]
    };


  return (

    
  <Container className='product'>
<h2>Popular Books </h2>

 <Slider {...settings}>
    {books
      .filter((book) => book.rating >= 4.30)
      .map((book) => (
        
          <Card key={book.key} style={{ width: '18rem' }}>
            <Image src={book.image_url} />
            <Card.Body>
              <Card.Title className='title'>{book.rating} rating</Card.Title>
              <Card.Title className='title'>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        
      ))}
   
    </Slider>

    <h2>Classics </h2>

     <Slider {...settings}>
    {books
      .filter((book) => book.genres >= "Classics")
      .map((book) => (
        
          <Card >
            <Image src={book.image_url} />
            <Card.Body>
              <Card.Title className='title'>{book.rating} rating</Card.Title>
              <Card.Title className='title'>{book.title}</Card.Title>
            </Card.Body>
          </Card>
        
      ))}
   
    </Slider>
  </Container>

 
  )
}

export default Product