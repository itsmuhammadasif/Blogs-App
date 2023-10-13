import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../index.css'
import getAxiosConfig from "./axiosConfig";
import { useAuth } from "./AuthContext";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();
  const [name, setName] = useState([]);
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      getName();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function getName() {
    if (user.authenticated) {
      setName(user.name);
    } else {
      setName([]);
      console.log('nothing in the user')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author: name };

    try {

      const axiosInstance = await getAxiosConfig()
      const response = await axiosInstance.post('http://localhost:3001/create', blog);
      if (response.status === 201) {
        history.push('/');
      }
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <input
          type="text"
          value={name}
          readOnly
        />

        <button>Add Blog</button>
      </form>
    </div>
  );
}
export default Create;
