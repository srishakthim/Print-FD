import React, { useState } from 'react';
import { Avatar, Button, Container, FormControl, IconButton, InputAdornment, Link, TextField, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import images3 from "../assets/logo.png"
import images4 from "../assets/images.jpg"
import Side from "../admin/Side"
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a slight white overlay to improve text readability
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
    width: '50%',
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
//   logo: {
//     position: 'absolute',
//     top: theme.spacing(15),
//     display: 'flex',
//     justifyContent: 'center',
//     width: '100%',
//     zIndex: 1,
//   },
  formControlInline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > div': {
      width: '48%', // Adjust the width of each field to fit two in a row
    },
  },
}));

function SignIn() {
  const classes = useStyles();
  // const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [gstNumber, setGstNumber] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [userImage, setUserImage] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleWhatsappNumberChange = (event) => {
    setWhatsappNumber(event.target.value);
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

  const handleGstNumberChange = (event) => {
    setGstNumber(event.target.value);
  };

  const handleAddress1Change = (event) => {
    setAddress1(event.target.value);
  };

  const handleAddress2Change = (event) => {
    setAddress2(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleUserImageChange = (event) => {
    setUserImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle registration logic
  };

  const formData = new FormData();
  formData.append('username', username);
  formData.append('email', email);
  formData.append('phoneNumber', phoneNumber);
  formData.append('whatsappNumber', whatsappNumber);
  formData.append('password', password);
  formData.append('gstNumber', gstNumber);
  formData.append('address1', address1);
  formData.append('address2', address2);
  formData.append('city', city);
  formData.append('pincode', pincode);
  formData.append('state', state);
  formData.append('userImage', userImage);

  // try {
  //   await axios.post('/signup', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  //   navigate('/login'); // Redirect to login page upon successful registration
  // } catch (error) {
  //   console.error('Registration failed:', error);
  //   // Handle error appropriately, e.g., show error message to user


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
       <Side />
      {/* <div className={classes.logo}>
        <img src={images3} alt="Custom Icon" className={classes.img} style={{display:"flex", justifyContent:"center", height:"130px",width:'140px'}}/>
      </div> */}
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.formControlInline}>
          <FormControl margin="normal" required fullWidth>
            <TextField
              label="Username"
              value={username}
              onChange={handleUsernameChange}
              variant="outlined"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              variant="outlined"
            />
          </FormControl>
          </div>
          <div className={classes.formControlInline}>
            <FormControl margin="normal" required>
              <TextField
                label="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                variant="outlined"
              />
            </FormControl>
            <FormControl margin="normal" required>
              <TextField
                label="Whatsapp Number"
                value={whatsappNumber}
                onChange={handleWhatsappNumberChange}
                variant="outlined"
              />
            </FormControl>
          </div>
          <div className={classes.formControlInline}>
          <FormControl margin="normal" required fullWidth>
            <TextField
              label="Password"
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
          <FormControl margin="normal" required fullWidth>
            <TextField
              label="GST Number"
              value={gstNumber}
              onChange={handleGstNumberChange}
              variant="outlined"
            />
          </FormControl>
          </div>
          <div className={classes.formControlInline}>

          <FormControl margin="normal" required fullWidth>
            <TextField
              label="Address 1"
              value={address1}
              onChange={handleAddress1Change}
              variant="outlined"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextField
              label="Address 2"
              value={address2}
              onChange={handleAddress2Change}
              variant="outlined"
            />
          </FormControl>
          </div>
          <div className={classes.formControlInline}>
            <FormControl margin="normal" required>
              <TextField
                label="City"
                value={city}
                onChange={handleCityChange}
                variant="outlined"
              />
            </FormControl>
            <FormControl margin="normal" required>
              <TextField
                label="Pincode"
                value={pincode}
                onChange={handlePincodeChange}
                variant="outlined"
              />
            </FormControl>
          </div>
          <div className={classes.formControlInline}>

          <FormControl margin="normal" required fullWidth>
            <TextField
              label="State"
              value={state}
              onChange={handleStateChange}
              variant="outlined"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <input type="file" onChange={handleUserImageChange} />
          </FormControl>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default SignIn;
