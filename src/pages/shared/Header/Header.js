import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/home' className='fs-4'><span className='text-warning'>Fruits</span>Valley</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/inventory'>Inventory</Nav.Link>
                            <Nav.Link as={Link} to='/pricing'>Pricing</Nav.Link>
                            <Nav.Link as={Link} to='/reviews'>Reviews</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About Us</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to='signup'>
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;