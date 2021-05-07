import React, {Component} from 'react';

export default class Home extends Component{
    render(){
        if(this.props.user){
            return(
                <h1>Ciao {this.props.user.email}</h1>
            )
        }
        return(
            <h1>Non sei loggato</h1>
        )
    }
}
