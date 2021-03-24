import React, { Component } from 'react'
import UserService from '../service/UserService';
import CreateBar from '../NavBars/CreateBar';

class CharityProfile extends Component {
  constructor(props) {
    super(props);
    this.state = this.state = {
      user: [],
      message: null,
    };
    this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
      this.loadUser();
  } 

  loadUser() {
    UserService.fetchUsers().then((response) => {
      this.setState({ user: response.data });
    });
  }

  render() {
    return (
      <div>
        <CreateBar />
        <header className="container">
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="Do Good"
              width="100%"
              className="responsive"/>
            <div className="hero-text">
              <h2>Charity Profile</h2>
            </div>
          </div>
          <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Charity Name</th>
                  <th>Charity Cat</th>
                  <th>Charity Address</th>
                  <th>Charity Phone</th>
                </tr>
              </thead>
              <tbody>
                {this.state.user.map((user) => (
                  <tr key={user.id}>
                    <td>{user.charityName}</td>
                    <td>{user.charityCat}</td>
                    <td>{user.charityAddress}</td>
                    <td>{user.charityPhone}</td>
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

export default CharityProfile;
