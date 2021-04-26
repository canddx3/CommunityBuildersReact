import React, { Component } from 'react'
import UserBar from "../NavBars/UserBar";
import CharityService from '../service/CharityService';

class CharityDelete extends Component {
  constructor(props) {
    super(props);
     this.state = {
      charitys: []
    };
    this.deleteCharity = this.deleteCharity.bind(this);
  }

  // deleteCharity = (e) => {
  //   e.preventDefault();
  //   let id = {
  //     id: this.state.id,
  //     username: this.state.username
  //   };
deleteCharity(id){
    CharityService.deleteCharity(id).then( res => {
      this.setState({charity: this.state.charity.filter(charity => charity.id != id)});
      // this.props.history.push("/CharitySignup");
      })
      .catch(err => console.log(err));
    };

componentDidMount() {
  CharityService.getCharity().then((res) => {
    this.setState({ charity: res.data});
  });
}
  // onChange = e => this.setState({ [e.target.name]: e.target.value });
  
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
          <buttom className="btn btn-danger" onClick={this.deleteCharity}>Delete</buttom>
        </form>
      </div>
    );
  }
}

export default CharityDelete;
