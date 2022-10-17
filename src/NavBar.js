import './newspaper.png'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand to="#"><img src="./newspaper.png" alt=""/>GCG News</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/business">Business</Link>
            <Link className="nav-link" to="/entertainment">Entertainment</Link>
            <Link className="nav-link" to="/general">General</Link>
            <Link className="nav-link" to="/health">Health</Link>
            <Link className="nav-link" to="/sports">Sports</Link>
            <Link className="nav-link" to="/techonology">Techonology</Link>
            <Link className="nav-link" to="/aboutUs" disabled>About Us</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search News"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
