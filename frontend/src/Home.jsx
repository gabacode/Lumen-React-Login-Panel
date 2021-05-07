import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import Helmet from './components/Helmet';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    button: {
        margin: theme.spacing(2.71, 0, 1.618),
      },
  });

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
           ...props
        }
    }
    render(){
        const {classes} = this.props;
        let msg;
        if(this.state.user){
            msg = (
                <Fragment>
                    <img className="response" src="./approved.jpg" />
                    <h1>Ciao {this.state.user} 🎉</h1>
                    <Grid item>
                        <Link to={"logout"}>
                            <Button className={classes.button} fullWidth variant="contained" color="primary">
                                Log Out
                            </Button>
                        </Link>
                    </Grid>
                </Fragment>
                )
        }else{
            msg = (
                <Fragment>
                    <img className="response" src="./welcome.svg" />
                    <h1>Benvenut* 👋</h1>
                    <Grid item>
                        <Link to={"login"}>
                            <Button className={classes.button} fullWidth variant="contained" color="primary">
                                Log In
                            </Button>
                        </Link>
                        <Link to={"registrazione"}>
                            <Button fullWidth variant="contained" color="primary">
                                Registrati
                            </Button>
                        </Link>
                    </Grid>
                </Fragment>
                )
        }
        return(
            <Fragment>
            <Helmet pageTitle="Home"/>
                <Container id="mainForm" className="mainForm animate__animated animate__fadeIn" maxWidth="xs">
                    <div className={classes.paper}>
                        {msg}
                    </div>
                </Container>
            </Fragment>
        )
    }
}
export default withStyles(styles, { withTheme: true })(Home);
