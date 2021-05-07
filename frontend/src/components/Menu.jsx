import React, { Component, Fragment } from "react";
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Button} from '@material-ui/core';

export default class Menu extends Component{

    handleLogout = () =>{
        localStorage.clear();
        this.props.setUser(null);
    };

    render(){
        let buttons;
        if(localStorage.getItem('token')){
            buttons = (
                <Fragment>
                <Link to={'/'} onClick={this.handleLogout}>
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