import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import shortid from 'shortid';

import { logIn } from 'redux/authOperations';

import {
  ButtonLogin,
  ButtonNavigateLogin,
  Input,
  InputForm,
  InputLabel,
  LoginContainer,
  LoginContainerTitle,
  LoginTitle,
} from './loginStyled';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();
  const navigation = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
    navigate('/cycles/month');
  };

  return (
    <LoginContainer>
      <LoginContainerTitle>PowerGen Tracker</LoginContainerTitle>
      <LoginTitle>LOGIN</LoginTitle>
      <InputForm onSubmit={handleSubmit} autoComplete="off">
        <InputLabel htmlFor={emailInputId}>
          <Input
            placeholder="E-MAIL"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id={emailInputId}
          />
        </InputLabel>
        <InputLabel htmlFor={passwordInputId}>
          <Input
            placeholder="PASSWORD"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id={passwordInputId}
          />
        </InputLabel>
        <ButtonLogin type="submit">LOGIN</ButtonLogin>
      </InputForm>
      <ButtonNavigateLogin
        type="button"
        onClick={() => {
          navigation('/register');
        }}
      >
        no account? register
      </ButtonNavigateLogin>
    </LoginContainer>
  );
}
