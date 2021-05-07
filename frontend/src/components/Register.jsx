import React, {Component} from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';
import Helmet from '../components/Helmet';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
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
      backgroundColor: theme.palette.success.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

class Register extends Component {

    state = {};

      handleSubmit = e => {
        e.preventDefault();
        const data ={
            name: this.nome,
            email: this.email,
            password: this.password,
            password_confirmation: this.repassword
        }

        axios.post('register', data)
        .then(res => {
            alert(JSON.stringify(res.data.message, null, 2)+"\nAdesso puoi effettuare il Log In.");
            this.setState({
              isRegistered: true
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
        })
    }

    render(){
        const {classes} = this.props;
        if(this.state.isRegistered){
          return <Redirect to={'/login'}/>;
        }
        return (
            <>
            <Helmet pageTitle="Registrazione"/>
            <Container id="mainForm" className="mainForm animate__animated animate__fadeIn" component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <PersonAddIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Registrati
                </Typography>
                <form className={classes.form} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nome"
                    name="Nome"
                    autoComplete="Nome"
                    autoFocus
                    onChange={e => this.nome = e.target.value}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Indirizzo Email"
                    name="email"
                    autoComplete="email"
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
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="conferma-password"
                    label="Conferma Password"
                    type="password"
                    id="conferma'password"
                    autoComplete="confirm-password"
                    onChange={e => this.repassword = e.target.value}
                />
                <Button
                    className={classes.submit}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Invia
                </Button>
                <Grid 
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    >
                    <Grid item>
                    <Link to="/login" variant="body2">
                      Hai già un account? Effettua il Log In
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

export default withStyles(styles, { withTheme: true })(Register);