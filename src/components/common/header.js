import React from 'react'
import "./header.scss"
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';




const Header = () => {
  return (
<Navbar expand="lg" className=" mb-3">
  <Container >
    <Navbar.Brand href="#">BookStore</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className='logo' id="offcanvasNavbarLabel">
          BookStore
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-center flex-grow-1 pe-5 ">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="product">Products</Nav.Link>
          <Nav.Link href="about">About Us</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
       
        </Nav>
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

  )
}

export default Header