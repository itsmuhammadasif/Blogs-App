import { Link } from 'react-router-dom';
import React from 'react'
import '../index.css'

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <div className="blog-title"> <h2> {title} </h2> </div>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;