import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;
