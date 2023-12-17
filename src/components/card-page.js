import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import { Button, Card } from 'react-bootstrap';

const CardPage = () => {
  return (
    <Carousel>
      <Carousel.Item>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
         <Carousel.Caption>
            <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Carousel.Caption>
     
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Carousel.Item>
      
    </Carousel>
  )
}

export default CardPage