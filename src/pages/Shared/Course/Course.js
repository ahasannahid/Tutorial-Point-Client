import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = ({ course }) => {
    console.log(course);
    const { course_title, image_url, course_details } = course;
    return (
        <Card className='me-5 w-75 mb-4'>
            <Card.Img className='w-25 m-auto' variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{course_title}</Card.Title>
                <Card.Text>
                    {course_details}
                </Card.Text>
                <div className='text-center'>
                <Button  variant="primary">Get Premioum Access</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Course;