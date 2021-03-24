import React, { Component } from "react";
import EventService from "../service/EventService";
import UserBar from "../NavBars/UserBar";

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charityName: "",
      charityPhone: "",
      eventName: "",
      eventLocation: "",
      eventDate: "",
      eventTime: "",
      eventDescription: "",
    };
    this.saveEvent = this.saveEvent.bind(this);
  }

  saveEvent = (e) => {
    e.preventDefault();
    let event = {
      charityName: this.state.charityName,
      charityPhone: this.state.charityPhone,
      eventName: this.state.eventName,
      eventLocation: this.state.eventLocation,
      eventDate: this.state.eventDate,
      eventTime: this.state.eventTime,
      eventDescription: this.state.eventDescription,
    };
    EventService.addEvents(event)
      .then((res) => {
        this.setState({ message: "Event added successfully." });
        this.props.history.push("/VolunteerEvent");
      })
      .catch((err) => console.log(err));
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <UserBar />
        <h2 className="container">Events Signup</h2>
        <form>
          <div className="form-group">
            <label>Charity Name:</label>
            <input
              type="text"
              name="charityName"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label className="item-title">Charity Phone:</label>
            <input
              type="phone"
              name="charityPhone"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label className="item-title">Event Name:</label>
            <input
              type="text"
              name="eventName"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label className="item-title">Event Location:</label>
            <input
              type="text"
              name="eventLocation"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label className="item-title">Event Date:</label>
            <input
              type="text"
              name="eventDate"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label className="item-title">Event Description:</label>
            <textarea
              type="text"
              name="eventDescription"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label className="item-title">Event Time:</label>
            <br></br>
            <select
              type="text"
              name="eventTime"
              value={this.state.value}
              onChange={this.onChange}>
              <option>12:00am</option>
              <option>12:30am</option>
              <option>1:00am</option>
              <option>1:30am</option>
              <option>2:00am</option>
              <option>2:30am</option>
              <option>3:00am</option>
              <option>3:30am</option>
              <option>4:00am</option>
              <option>4:30am</option>
              <option>5:00am</option>
              <option>5:30am</option>
              <option>6:00am</option>
              <option>6:30am</option>
              <option>7:00am</option>
              <option>7:30am</option>
              <option>8:00am</option>
              <option>8:30am</option>
              <option>9:00am</option>
              <option>9:30am</option>
              <option>10:00am</option>
              <option>10:30am</option>
              <option>11:00am</option>
              <option>11:30am</option>
              <option>12:00pm</option>
              <option>12:30pm</option>
              <option>1:00pm</option>
              <option>1:30pm</option>
              <option>2:00pm</option>
              <option>2:30pm</option>
              <option>3:00pm</option>
              <option>3:30pm</option>
              <option>4:00pm</option>
              <option>4:30pm</option>
              <option>5:00pm</option>
              <option>5:30pm</option>
              <option>6:00pm</option>
              <option>6:30pm</option>
              <option>7:00pm</option>
              <option>7:30pm</option>
              <option>8:00pm</option>
              <option>8:30pm</option>
              <option>9:00pm</option>
              <option>9:30pm</option>
              <option>10:00pm</option>
              <option>10:30pm</option>
              <option>11:00pm</option>
              <option>11:30pm</option>
            </select>
          </div>
          <button className="btn btn-success" onClick={this.saveEvent}>
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default CreateEvent;
