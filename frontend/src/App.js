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
    axios.get('user')
    .then(res => {
      this.setState({
        user: res.data
      });
    },
    err => {
      console.log(err)
    }
    )
  }
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Menu/>
        <Switch>
          <Route exact path="/" component={() => <Home user={this.state.user}/>}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registrazione" component={Register} />
        </Switch>
      </div>
      </BrowserRouter>
    );
}
}