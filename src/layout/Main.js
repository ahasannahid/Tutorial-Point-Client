import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import RightNav from '../pages/Shared/RightNav/RightNav';
import SideNav from '../pages/Shared/SideNav/SideNav';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <SideNav></SideNav>
                    </Col>
                    <Col lg= "7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="2" className='d-none d-lg-block'>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;