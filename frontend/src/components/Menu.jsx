import React, { Component, Fragment } from "react";
import axios from 'axios';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Button} from '@material-ui/core';

export default class Menu extends Component{

    state = {}
    componentDidMount = () => {
      axios.get('profile')
      .then(res => {
        this.setState({
          user: res.data.user.name
        });
      },
      err => {
        console.log(err)
      }
  )
    }


    render(){
        let buttons;
        if(this.state.user){
            buttons = (
                <Fragment>
                <Link to={'logout'}>
                    <Button color="inherit">Logout</Button>
                </Link>
                </Fragment>
                )
        }else{
            buttons = (
                <Fragment>
                    <Link to={'login'}>
                        <Button color="inherit">Login</Button>
                    </Link>
                    <Link to={'registrazione'}>
                        <Button color="inherit">Registrati</Button>
                    </Link>
                </Fragment>
                )
        }
        return(
            <AppBar position="static">
                <Toolbar className="menulinks">
                    <Link to={'/'}>
                        <Button color="inherit"><HomeIcon/></Button>
                    </Link>
                    <div>
                    {buttons}
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}