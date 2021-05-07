import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';


export default class App extends Component {
  state = {}
  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      axios.get('profile')
      .then(res => {
        this.setUser(res.data.user.name);
      },
      err => {
        console.log(err);
      }
    )
  }
}
setUser = user =>{
  this.setState({
    user: user,
  })
} 
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Menu user={this.state.user} setUser={this.setUser}/>
        <Switch>
          <Route exact path="/" component={() => <Home user={this.state.user} setUser={this.setUser}/>}/>
          <Route exact path="/login" component={() => <Login user={this.state.user} setUser={this.setUser}/>}/>
          <Route exact path="/registrazione" component={Register} />
        </Switch>
      </div>
      </BrowserRouter>
    );
}
}