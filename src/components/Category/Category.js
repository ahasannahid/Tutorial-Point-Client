import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../../pages/Shared/Course/Course';

const Category = () => {
    const categoryCourses = useLoaderData();
    return (
        <div>
            <h2>This is category has {categoryCourses.length} Courses </h2>
            {
                categoryCourses.map(course => <Course
                    key={course._id} course={course}></Course>)
            }


        </div>
    );
};

export default Category;