import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { course_title, image_url, course_details, instructor, total_view, rating } = course;
    
    return (
        <div>
            <h1>this is checkout {course_title}</h1>
        </div>
    );
};

export default Checkout;