import React, { Component } from "react";
import NavBar from "../NavBars/NavBar";
import EventService from "../service/EventService";

class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    EventService.getEvents().then((res) => {
      this.setState({ events: res.data });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <header className="container">
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="Do Good"
              width="100%"
              className="responsive"/>
            <div className="hero-text">
              <h2>Volunteer Opportunities</h2>
            </div>
          </div>
          <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Charity Name</th>
                  <th>Event Name</th>
                  <th>Event Description</th>
                  <th>Event Location</th>
                  <th>Event Date</th>
                  <th>Event Time</th>
                </tr>
              </thead>
              <tbody>
                {this.state.events.map((events) => (
                  <tr key={events.id}>
                    <td>{events.charityName}</td>
                    <td>{events.eventName}</td>                    
                    <td>{events.eventDescription}</td>
                    <td>{events.eventLocation}</td>
                    <td>{events.eventDate}</td>
                    <td>{events.eventTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </header>
      </div>
    );
  }
}

export default AllEvents;
