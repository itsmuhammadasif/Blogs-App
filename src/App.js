import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import { useAuth } from './components/AuthContext';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

function App() {
  const { user, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
      <div className="App">
        <div className="content">
          <NavBar user={user} />

          <Switch>
            <Route exact path="/">
              {user ? <Redirect to="/home" /> : <Redirect to="/login" />}
            </Route>

            <Route path="/home">
              {user ? <Home user={user} /> : <Redirect to="/" />}
            </Route>

            <Route path="/create">
              {user ? <Create /> : <Redirect to="/" />}
            </Route>

            <Route path="/blogs/:id">
              {user ? <BlogDetails /> : < Redirect to="/" />}
            </Route>

            < Route path="/login">
              {user? <Redirect to="/home"/> : <LoginPage />}
            </Route>

            <Route path="/signup">
              { user? <Redirect to="/home"/> : < SignUpPage />}
            </Route>

            <Route path="*">
              {user ? <NotFound /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
