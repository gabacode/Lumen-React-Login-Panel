import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Helmet from '../components/Helmet';
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });
class Login extends Component {

    state = {
        loggedIn: "",
        status: "",
      };

    handleSubmit = e => {
        e.preventDefault();
        const data ={
            email: this.email,
            password: this.password
        }

        axios.post('login', data)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            this.setState({
                loggedIn: true
              });
        })
        .catch(err => {
            if(err.response.status === 422){
                var e = document.getElementById('mainForm');
                e.style.transform="translate(6px)";
                setTimeout(function(){e.style.transform="translate(0px)";},100);
                setTimeout(function(){e.style.transform="translate(6px)";},200);
                setTimeout(function(){e.style.transform="translate(0px)";},300);
            }else{
                alert(JSON.stringify(err.response.status+" "+err.response.data.message));
            }
            this.setState({
                status: "error"
              });
        })
    }

    render(){
        if(this.state.loggedIn){
            return <Redirect
            to={{
            pathname: "/",
            state: { loggedIn: this.state.loggedIn }
          }}
        />
        }
        const {classes} = this.props;
        return (
            <>
            <Helmet pageTitle="Log In"/>
            <Container id="mainForm" className="mainForm animate__animated animate__fadeIn" component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Log In
                </Typography>
                <form className={classes.form} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Indirizzo Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={e => this.email = e.target.value}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={e => this.password = e.target.value}
                />
                <Button
                    className={classes.submit}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Log In
                </Button>
                <Grid 
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    >
                    <Grid item>
                    <Link to="/registrazione">
                        Non hai un account? Registrati
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            </Container>
            </>
        );
        }
}

export default withStyles(styles, { withTheme: true })(Login);