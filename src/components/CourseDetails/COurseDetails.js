import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const COurseDetails = () => {
    const course = useLoaderData();

    const { course_title, image_url, course_details, instructor, total_view,rating } = course;
    return (
        <Card className='me-5  mb-4'>
            <Card.Title className='text-center'>{course_title}</Card.Title>
            <Card.Img className='w-25 m-auto' variant="top" src={image_url} />
            <Card.Body>
                <Card.Text>
                    {course_details}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className="d-flex justify-content-between ">
                    <div>
                        <span>Instructor: {instructor?.name}</span>
                    </div>
                    <div>
                        <span>Published Date: {instructor?.published_date}</span>
                    </div>
                </div>
                <div className='text-center'>
                    <p>Rating: {rating.number}</p>
                    <p>Total View: {total_view}</p>
                </div>
            </Card.Footer>
            <Button variant='outline-dark'>Get Premium Access</Button>
        </Card>
    );
};

export default COurseDetails;