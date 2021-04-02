import React, { Component } from 'react'
import UserService from '../service/UserService';
import CreateBar from '../NavBars/CreateBar';

class CharityProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charity: []
    };
    this.charityProfile = this.charityProfile.bind(this);
  }

  componentDidMount() {
      this.charityProfile();
  } 

  charityProfile() {
    UserService.getCharity().then((response) => {
    this.setState({ charity: [response.data]});
    })
    .catch(err => console.log(err));
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
                {this.state.charity.map((charity) => (
                  <tr key={charity.id}>
                    <td>{charity.charityName}</td>
                    <td>{charity.charityCat}</td>
                    <td>{charity.charityAddress}</td>
                    <td>{charity.charityPhone}</td>
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
