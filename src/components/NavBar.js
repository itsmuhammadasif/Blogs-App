import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { useAuth } from './AuthContext';

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h1>THE BLOGS HUB</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px',
          }}
        >
          New Blog
        </Link>
        {user && user.authenticated && (
          <Link to="/" onClick={logout}>
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
