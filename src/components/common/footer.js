import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { config } from '../../helpers/config/config'
import "./footer.scss"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <Container fluid className='footer'>
        <Row className='m-5 g-2'>
            <Col sm={4}>
            <h2>BookStore</h2>
            <Image className='logo' src='./images/book-logo.jpg'/>
            </Col>
            
            <Col sm={4} className='footer-contact'>
            <h2>Contact US</h2>
            <NavLink to={config.socialMedia.facebook}target='blank' >Facebook <FaFacebook /></NavLink>
            <NavLink to={config.socialMedia.instagram}target='blank'>Instagram <FaInstagram /></NavLink>
            <NavLink to={config.socialMedia.twitter}target='blank'>Twitter <FaTwitterSquare /></NavLink>
            <NavLink to={config.socialMedia.linkedin} target='blank'>Linkedin <FaLinkedin /></NavLink>
            </Col>

            <Col sm={4} className='footer-about'>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto atque deleniti placeat aperiam repellendus officia? Hic illo et ex nihil repellat nobis doloribus? Doloribus eos obcaecati beatae totam consequuntur?</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer