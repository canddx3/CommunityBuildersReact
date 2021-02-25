import React, { Component } from "react";

import CharityEventBar from "../Layout/CharityEventBar";
import EventService from "../service/EventService";

class CharityEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      message: null
    };  
    this.reloadEventsList = this.reloadEventsList.bind(this);
  }

  componentDidMount() {
    this.reloadEventsList();
  }

  reloadEventsList() {
    EventService.fetchEvents().then(response => {
      console.log(response.data);
      this.setState({ events: response.data });
    });
  }

  render() {
    return (
      <div>
        <CharityEventBar />

        <header className="container">
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="Do Good"
              width="100%"
              className="responsive"
            />
            <div className="hero-text">
              <h2>Volunteer Opportunities</h2>
            </div>
          </div>
        </header>
        
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Charity Name</th>
                <th>Charity Phone</th>
                <th>Event Name</th>
                <th>Event Location</th>
                <th>Event Date</th>
                <th>Event Time</th>
                <th>Event Description</th>
              </tr>
            </thead>
            <tbody>
              {this.state.events.map(events => (
                <tr key={events.id}>
                  <td>{events.charityName}</td>
                  <td>{events.charityPhone}</td>
                  <td>{events.eventName}</td>
                  <td>{events.eventLocation}</td>
                  <td>{events.eventDate}</td>
                  <td>{events.eventTime}</td>
                  <td>{events.eventDescription}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
     </div>
    );
  
  }
}

export default CharityEvent;