import React, { useState } from 'react';
import { Avatar, Button, Container, FormControl, IconButton, InputAdornment, Link, TextField, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import images3 from "../assets/logo.png"
import images4 from "../assets/images.jpg"

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a slight white overlay to improve text readability
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
    
    // backgroundImage:`url(${images4})`,
    // backgroundSize: 'cover', // Ensure the image covers the container
    // backgroundPosition: 'center',
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
  img: {
    width: '50px',
    height: '50px',
    marginBottom: theme.spacing(1),
  },
  logo: {
    position: 'absolute',
    top: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    zIndex: 1,
  },
}));

function SignIn() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle sign-in logic
  };

  return (
    <div
    style={{
      backgroundImage: `url(${images4})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    }}
  >
    <div className={classes.logo}>
        <img src={images3} alt="Custom Icon" className={classes.img} style={{display:"flex", justifyContent:"center", height:"130px",width:'140px'}}/>
        </div>
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl margin="normal" required fullWidth>
          <label htmlFor="username">Username</label>
          <TextField
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            variant="outlined"
            autoFocus
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <label htmlFor="password">Password</label>
          <TextField
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <Typography variant="body2">
          <Link href="#" onClick={() => console.log('Forgot password clicked')}>Forgot password?</Link>
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
      </form>
    </Container>
  </div>
  );
}

export default SignIn;
