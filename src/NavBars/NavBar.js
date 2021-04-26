import React, {Component} from "react";

export default class NavBar extends Component {
  render() {
  return (
    <nav className="navbar navbar-inverse">
      <div>
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar" >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <h4 className="navbar-brand">Community Builders</h4>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li>
              <a href="http://localhost:8080">Home</a>
            </li>
            <li>
              <a href="http://localhost:8080/AllEvents">Volunteer Opportuntiies</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="http://localhost:8080/AllCharities">Charities</a>
            </li>
            <li>
              <a href="http://localhost:8080/CharitySignup" target="_self">
                <span className="glyphicon glyphicon-user"></span> Sign Up
              </a>
            </li>
            <li>
              <a href="http://localhost:8080/CharityLogin">
                <span className="glyphicon glyphicon-log-in"></span> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}}
