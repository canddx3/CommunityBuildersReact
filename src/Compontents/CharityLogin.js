import React, { Component } from "react";
import UserBar from "../NavBars/UserBar";
import CharityService from "../service/CharityService";

class CharityLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      charity: {}
    };
    // this.loginCharity = this.loginCharity.bind(this);
  } 

  // loginCharity = e => {
  //   e.preventDefault();
  //   let charityId = {
  //     id: this.state.id,
  //     username: this.state.username,
  //     password: this.state.password,
  //   };

  componentDidMount() {
    console.log(this.state.id)
    CharityService.getCharityById(this.state.id).then( res => {
      this.setState({charitys: res.data});
      // this.props.history.push("/CharityProfile");
      })
      .catch(err => console.log(err));
  };

  // onChange = e => this.setState({ [e.target.name]: e.target.value });

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
              name="username"
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
          <button className="btn btn-success" onClick={this.getCharity}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default CharityLogin;
