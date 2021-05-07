import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Menu from './components/Menu';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';


export default class App extends Component {
  state = {}
  componentDidMount = () => {
    axios.get('profile')
    .then(res => {
      this.setState({
        user: res.data.user.name
      });
    },
    err => {
      //pass
    }
)
  if (localStorage.getItem("token")) {
    this.setState({
      loggedIn : true
    })
  }

  }
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Menu user={this.state.user}/>
        <Switch>
          <Route exact path="/" component={() => <Home loggedIn={this.state.loggedIn} user={this.state.user}/>}/>
          <Route path="/login" render={(props) => <Login {...props}/>}/>
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/registrazione" component={Register} />
        </Switch>
      </div>
      </BrowserRouter>
    );
}
}