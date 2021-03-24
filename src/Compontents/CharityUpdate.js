import React, { Component } from 'react'
import UserBar from "../NavBars/UserBar";
import UserService from '../service/UserService';

class CharityUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = this.state = {
      id: "",
      username: "",
      password: "",
      charityTitle: "",
      charityName: "",
      charityCat: "",
      charityAddress: "",
      charityPhone: ""
    };
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser = e => {
    e.preventDefault();
    let username = {
      username: this.state.username,
      password: this.state.password,
      charityName: this.state.charityName,
      charityCat: this.state.charityCat,
      charityAddress: this.state.charityAddress,
      charityPhone: this.state.charityPhone
    };

    UserService.editUser(id)
      .then(res => {
        this.setState({ message: "User added successfully." });
        this.props.history.push("/CharityProfile");
      })
      .catch(err => console.log(err));
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  
  render() {
    return (
      <div>
        <UserBar/>
        <h2 className="container">Charity Update</h2> 
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
          
          <button className="btn btn-success" onClick={this.saveUser}>
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default CharityUpdate;
