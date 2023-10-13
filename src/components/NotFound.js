import React from 'react'
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className='no-blogs-message'>
      <h2> Sorry </h2>
      <p> page not found</p>
      <Link to='/'> Back to home page....</Link>
    </div>
  )
}

export default NotFound
