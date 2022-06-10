import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resume from '../Images/Shakila Khatun Shely Resume.pdf'

const Header = () => {
    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='btn bg-success' href={resume} download="Shely resume">Download Resume</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                            <Nav.Link as={Link} to='/contact'>Contact me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;