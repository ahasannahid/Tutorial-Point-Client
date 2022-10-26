import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import SideNav from '../pages/Shared/SideNav/SideNav';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Row>
                <Col lg="3" className='d-none d-lg-block'>
                    <SideNav></SideNav>
                </Col>
                <Col lg="9">
                    <Outlet></Outlet>
                </Col>
            </Row>
        </div>
    );
};

export default Main;