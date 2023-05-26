import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import shortid from 'shortid';

import { Grid } from 'react-loader-spinner';

import { logIn } from 'redux/authOperations';

import {
  ButtonLogin,
  ButtonNavigateLogin,
  LoginInput,
  LoginInputForm,
  LoginInputLabel,
  LoginContainer,
  LoginContainerTitle,
  LoginTitle,
} from './loginStyled';

import { getIsLoading } from 'redux/authSelector';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();
  const navigation = useNavigate();
  const isLoading = useSelector(getIsLoading);

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
    navigation('/');
  };

  return (
    <LoginContainer>
      <LoginContainerTitle>PowerGen Tracker</LoginContainerTitle>
      <LoginTitle>LOGIN</LoginTitle>
      <LoginInputForm onSubmit={handleSubmit} autoComplete="off">
        <LoginInputLabel htmlFor={emailInputId}>
          <LoginInput
            placeholder="E-MAIL"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id={emailInputId}
          />
        </LoginInputLabel>
        <LoginInputLabel htmlFor={passwordInputId}>
          <LoginInput
            placeholder="PASSWORD"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id={passwordInputId}
          />
        </LoginInputLabel>
        <ButtonLogin type="submit">
          {isLoading ? (
            <Grid
              height="35"
              width="35"
              color="#3761F5"
              ariaLabel="grid-loading"
              radius="20"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            'LOGIN'
          )}
        </ButtonLogin>
      </LoginInputForm>
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
