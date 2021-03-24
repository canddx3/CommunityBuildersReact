import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import VolunteerEvents from './Compontents/VolunteerEvents';
import CharityLogin from './Compontents/CharityLogin';
import CharityProfile from './Compontents/CharityProfile';
import CharitySignup from './Compontents/CharitySignup';
import CreateEvent from './Compontents/CreateEvent';
import CharityUpdate from './Compontents/CharityUpdate';
import Footer from './NavBars/Footer';
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
      <Route exact path="/CharityUpdate" component={CharityUpdate} />
      <Route exact path="/VolunteerEvent" component={VolunteerEvents} />
      <Route exact path="/CreateEvent" component={CreateEvent} />
      <Footer />
    </div>
    
  </Router>
);



ReactDOM.render(<App />, document.getElementById('root'));