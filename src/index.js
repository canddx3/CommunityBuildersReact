import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Compontents/Home';
import CharityLogin from './Compontents/CharityLogin';
import CharityProfile from './Compontents/CharityProfile';
import CharitySignup from './Compontents/CharitySignup';
import CharityUpdate from './Compontents/CharityUpdate';
import CharityDelete from './Compontents/CharityDelete';
import AllCharities from './Compontents/AllCharities';
import CreateEvent from './Compontents/CreateEvent';
import AllEvents from './Compontents/AllEvents';
import Footer from './NavBars/Footer';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/CharitySignup" component={CharitySignup} />
      <Route exact path="/CharityLogin" component={CharityLogin} />
      <Route exact path="/CharityProfile" component={CharityProfile} />
      <Route exact path="/CharityUpdate" component={CharityUpdate} />
      <Route exact path="/CharityDelete" component={CharityDelete} />
      <Route exact path="/AllCharities" component={AllCharities} />
      <Route exact path="/AllEvents" component={AllEvents} />
      <Route exact path="/CreateEvent" component={CreateEvent} />
      <Footer />
    </div>
    
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));