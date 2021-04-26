import React, { Component } from "react";
import NavBar from "../NavBars/NavBar";
import CharityService from "../service/CharityService";

class AllCharities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charitys: [],
    };
  }

  componentDidMount() {
    CharityService.getCharity().then((res) => {
      this.setState({ charitys: res.data });
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
              <h2>Charity List</h2>
            </div>
          </div>
          <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Charity Name</th>
                  <th>Charity Category</th>
                  <th>Charity Address</th>
                  <th>Charity Phone</th>
                </tr>
              </thead>
              <tbody>
                {this.state.charitys.map((charitys) => (
                  <tr key={charitys.id}>
                    <td>{charitys.charityName}</td>
                    <td>{charitys.charityCat}</td>
                    <td>{charitys.charityAddress}</td>
                    <td>{charitys.charityPhone}</td>
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

export default AllCharities;