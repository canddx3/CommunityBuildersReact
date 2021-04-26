import React, { Component } from 'react'
import CharityService from '../service/CharityService';
import CreateBar from '../NavBars/CreateBar';

class CharityProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      charity: {}
    }
  // this.CharityProfile = this.CharityProfile.bind(this);
  }

  componentDidMount() {
    CharityService.getCharityById(this.state.id).then( res => {
      this.setState({ charity: res.data });
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
          <div className="content">
            <div className="table table-striped">
              <label>CharityName:</label>
              <div>{this.state.charity.charityName}</div>
            </div>
            <div className="table table-striped">
              <label>CharityCat:</label>
              <div>{this.state.charity.charityCat}</div>
            </div>
            <div className="table table-striped">
              <label>CharityAddress:</label>
              <div>{this.state.charity.charityAddress}</div>
            </div>
            <div className="table table-striped">
              <label>CharityPhone:</label>
              <div>{this.state.charity.charityPhone}</div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default CharityProfile;
