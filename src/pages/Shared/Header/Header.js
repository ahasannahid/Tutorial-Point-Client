import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import SideNav from '../SideNav/SideNav';


const Header = () => {
    const { user, logOut} = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/'>Tutorial Point</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link> <Link to='/'>Courses</Link></Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} variant="light">Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link>
                            {user?.photoURL? 
                            <Image 
                            style={{height: '30px'}} roundedCircle src={user?.photoURL}>
                            </Image> 
                            : 
                            <FaUser></FaUser>
                            }
                        </Nav.Link>

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