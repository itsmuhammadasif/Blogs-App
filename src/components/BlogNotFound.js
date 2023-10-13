import React from 'react'
import { Link } from 'react-router-dom';
function BlogNotFound({ id }) {
    return (
        <div className='no-blogs-message'>
            <h2> Sorry </h2>
            <p> {`Blog with id: ${id} is not found.`}</p>
            <Link to='/'> Back to home page....</Link>
        </div>
    )
}

export default BlogNotFound
