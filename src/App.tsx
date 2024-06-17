import React from 'react';
import { BrowserRouter as Router, Route, redirect } from 'react-router-dom';
import Register from './components/regster/Register';
import Login from './components/login/Login';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
      </div>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <redirect to="/login" />
        )
      }
    />
  );
};

export default App;
