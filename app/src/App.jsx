// @flow strict

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <Router>
      <header>
        <img className='header' src='/assets/header.jpeg' alt='header' />
      </header>
      <div className='main'>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
      <footer />
    </Router>
  );
}

export default App;
