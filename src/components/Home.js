import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import BlogList from './BlogList';
import { useEffect, useState } from 'react';
import getAxiosConfig from './axiosConfig';


const Home = ({ user }) => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    getBlogs();
    // eslint-disable-next-line
  }, [])
  async function getBlogs() {
    const axiosInstance = await getAxiosConfig()
    const response = await axiosInstance.get("http://localhost:3001/blogs");
    setBlogs(response.data)
  }

  return (
    <div className="home">
      {blogs && blogs.length === 0 && (
        <div className="no-blogs-message">
          <p>No blogs found for this user.</p>
          <Link to="/create">
            Add New Blog
          </Link>
        </div>
      )}
      {blogs && blogs.length > 0 && (
        <BlogList blogs={blogs} title={'Focusteck Blogs'} />
      )}
    </div>
  );
};

export default Home;
