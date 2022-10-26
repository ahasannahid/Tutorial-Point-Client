import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';


const Header = () => {
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/'>Tutorial Point</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All Course</Nav.Link>
                        <Nav.Link href="#pricing">Categories</Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <SideNav></SideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;