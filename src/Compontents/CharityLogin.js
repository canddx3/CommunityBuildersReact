import React, { Component } from "react";
import UserBar from "../NavBars/UserBar";
import UserService from "../service/UserService";

class CharityLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", 
      password: "",
      charityTitle: "",
      charityName: "",
      charityCat: "",
      charityAddress: "",
      charityPhone: ""
    };
    this.getUsername = this.getUsername.bind(this);
  } 

  getUsername = e => {
    e.preventDefault();
    let username = {
      username: this.state.username,
      password: this.state.password,
      charityTitle: this.state.charityTitle,
      charityName: this.state.charityName,
      charityCat: this.state.charityCat,
      charityAddress: this.state.charityAddress,
      charityPhone: this.state.charityPhone
    };

    UserService.getUser(username)
    .then(res => {
        this.setState({ message: "User Entered successfully." });
        this.props.history.push("/CharityProfile");
      })
      .catch(err => console.log(err));
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <UserBar />
        <h2 className="container">Charity Login</h2>
        <form>
          <div className="form-group">
            <label>User Name:</label>
            <input 
              type="text"
              name="userId"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.value}
              onChange={this.onChange}/>
          </div>
          <button className="btn btn-success" onClick={this.getUsername}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default CharityLogin;
