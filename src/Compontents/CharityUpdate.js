import React, { Component } from 'react'
import UserBar from "../NavBars/UserBar";
import CharityService from '../service/CharityService';

class CharityUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = this.state = {
      id: this.props.match.params.id,
      username: "",
      password: "",
      charityName: "",
      charityCat: "",
      charityAddress: "",
      charityPhone: ""
    };
    this.updateCharity = this.updateCharity.bind(this);
  }

  
  updateCharity = (e) => {
    e.preventDefault();
    let charityUser = {
      username: this.state.username,
      charityName: this.state.charityName,
      charityCat: this.state.charityCat,
      charityAddress: this.state.charityAddress,
      charityPhone: this.state.charityPhone
    };
    CharityService.updateCharity(charityUser, this.state.username).then( res => {
      this.props.history.push("/CharityProfile");
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  
  render() {
    return (
      <div>
        <UserBar/>
        <h2 className="container">Charity Update</h2> 
          <form>
          <div className="form-group">
            <label>Charity UserName:</label>
            <input
              type="text"
              name="username"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>Charity Name:</label>
            <input
              type="text"
              name="charityName"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>Charity Cat:</label>
            <input
              type="text"
              name="charityCat"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>Charity Address:</label>
            <input
              type="text"
              name="charityAddress"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>Charity Phone:</label>
            <input
              type="text"
              name="charityPhone"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>
          <button className="btn btn-success" onClick={this.updateCharity}>Update</button>
          <buttom className="btn btn-danger" onClick={this.deleteCharity.bind(this)}>Delete</buttom>
        </form>
      </div>
    );
  }
}

export default CharityUpdate;
