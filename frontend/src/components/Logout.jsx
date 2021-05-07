import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Logout extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: '',
    };
  }

  componentDidMount() {
    localStorage.clear();
    this.setState({
      loggedIn: false
    });
  }

  render(){
    return(
      <>
        <h1>Arrivederci</h1>
        <Redirect
            to={{
            pathname: "login",
            state: { loggedIn: this.state.loggedIn }
          }}
        />
      </>
    )
  }
}