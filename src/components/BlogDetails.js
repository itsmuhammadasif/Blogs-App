import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../index.css';
import { useParams } from 'react-router-dom';
import getAxiosConfig from './axiosConfig';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { useAuth } from './AuthContext';
import BlogNotFound from './BlogNotFound';

const BlogDetails = () => {
  const { user } = useAuth()
  const { id } = useParams();
  const history = useHistory();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [role, setRole] = useState('')
  const [userId, setUserId] = useState('')
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getBlog();
    getComments();
    if (user) {
      setRole(user.roles)
      setUserId(user.id)
    }
    // eslint-disable-next-line
  }, [id]);

  async function getBlog() {
    try {
      const axiosInstance = await getAxiosConfig();
      const response = await axiosInstance.get(`http://localhost:3001/blogs/${id}`);
      setBlog(response.data);
    } catch (error) {
      setNotFound(true)
    }
  }

  async function getComments() {
    try {
      const axiosInstance = await getAxiosConfig();
      const response = await axiosInstance.get(`http://localhost:3001/blogs/${id}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('There is an error.', error);
    }
  }

  const addComment = async (newComment) => {
    try {
      const axiosInstance = await getAxiosConfig();
      const response = await axiosInstance.post(`http://localhost:3001/blogs/${id}/comments/post`, newComment);
      if (response.status === 201) {
        getComments();
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const axiosInstance = await getAxiosConfig();
      const response = await axiosInstance.delete(`http://localhost:3001/blogs/${blog.id}`);
      if (response.status === 200) {
        history.push('/');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const axiosInstance = await getAxiosConfig();
      const response = await axiosInstance.delete(`http://localhost:3001/comments/${commentId}`);
      if (response.status === 200) {
        getComments();
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="blog-details">
      {notFound ? (
        < BlogNotFound id={id} />
      ) :

        (blog && (
          <article>
            <h2>{blog.title}</h2>
            <p className='blog-author'>Written by {blog.author}</p>
            <div className='blog-details-div'>
              {blog.body.split('\n').map((paragraph, index) => (
                <React.Fragment key={index}>
                  <p>{paragraph}</p>
                  <br />
                </React.Fragment>
              ))}
            </div>
            {(role === 'admin' || userId === blog.userId) && (
              <button onClick={handleDelete}>Delete</button>
            )}
          </article>
        )
        )}

      {!notFound && <CommentForm blogId={id} addComment={addComment} />}
      {!notFound && <CommentList comments={comments} onDelete={deleteComment} />}

    </div>
  );
};

export default BlogDetails;

