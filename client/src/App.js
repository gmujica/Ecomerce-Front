import React from 'react';
//import logo from './logo.svg';
import 'typeface-roboto'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// COMPONENTS
import Login from './pages/Login'
import Main from './pages/Main'
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
