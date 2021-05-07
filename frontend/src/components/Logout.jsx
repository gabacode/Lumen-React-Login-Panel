import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


export default class Logout extends Component {
  
  state = {}
  componentDidMount = () => {
    axios.get('logout')
    .then(res => {
      this.setState({
        loggedIn: false
      });
    },
    err => {
      console.log(err)
    }
)
  }

  render(){
    localStorage.clear();
    
    return(
      <>
        <h1>Arrivederci</h1>
        <Redirect to={'login'}/>
      </>
    )
  }
}