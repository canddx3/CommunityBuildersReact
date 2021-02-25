import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import CharityEvent from './Compontents/CharityEvent';
import CharityLogin from './Compontents/CharityLogin';
import CharityProfile from './Compontents/CharityProfile';
import CharitySignup from './Compontents/CharitySignup';
import EventSignup from './Compontents/EventSignup';
import Footer from './Layout/Footer';
import Home from './Compontents/Home';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/CharitySignup" component={CharitySignup} />
      <Route exact path="/CharityLogin" component={CharityLogin} />
      <Route exact path="/CharityProfile" component={CharityProfile} />
      <Route exact path="/CharityEvent" component={CharityEvent} />
      <Route exact path="/EventSignup" component={EventSignup} />
      <Footer />
    </div>
    
  </Router>
);



ReactDOM.render(<App />, document.getElementById('root'));