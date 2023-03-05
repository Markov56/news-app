import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
} from '@material-ui/core';

import { useAppDispatch } from 'hooks/redux';
import { authSlice } from 'redux/slices/auth';

import { MOCKED_LOGIN_DATA } from 'constants/loginData';

import './index.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginForm: React.FC<Props> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useAppDispatch();
  const { setAuth } = authSlice.actions;

  const handleClose = () => {
    onClose();
    setError('');
    setUsername('');
    setPassword('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      username === MOCKED_LOGIN_DATA.username &&
      password === MOCKED_LOGIN_DATA.password
    ) {
      localStorage.setItem('isAuthorized', 'true');
      dispatch(setAuth());
      handleClose();
    } else {
      setError("Ім'я користувача або пароль введено неправильно");
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter your login information:
        </DialogContentText>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <Button type="submit" color="primary" variant="contained">
            Login
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
