import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { InputAdornment } from "@mui/material";
import logo from '../../assets/nivritti_logo-removebg-preview.png'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPasswordOpen = () => {
    setForgotPasswordOpen(true);
  };

  const handleForgotPasswordClose = () => {
    setForgotPasswordOpen(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <>
    <Card style={{ maxWidth: 400, margin: "auto", marginTop: 100 }}>
      <CardContent>
      <img src={logo} alt="Logo" style={{ display: 'block', margin: 'auto', width:"20%", height:"auto"}} />
        <Typography className="primary-heading" variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={handleEmailChange}
        
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
             
          />
         
        
        
            
        
          <Button
            fullWidth
            onClick={handleForgotPasswordOpen}
            style={{ marginTop: 10 }}
          >
            Forgot Password?
          </Button>
      <button className='secondary-button' style={{ display: 'block', margin: 'auto', marginTop: 10 }}>Log in</button>
    </form>
      </CardContent>
      <Dialog
        open={forgotPasswordOpen}
        onClose={handleForgotPasswordClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Forgot Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your email address below and we'll send you instructions on
            how to reset your password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleForgotPasswordClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleForgotPasswordClose} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
    </>
  );
};

export default Login;
