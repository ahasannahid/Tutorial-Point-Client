import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className='ms-5'>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default SideNav;