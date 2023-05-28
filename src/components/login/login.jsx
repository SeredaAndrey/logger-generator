import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import shortid from 'shortid';

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
  BackLoginContainer,
} from './loginStyled';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();
  const navigation = useNavigate();
  const [isButtonDisable, setButtonDisable] = useState(true);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setButtonDisable(false);
        return setEmail(value);
      case 'password':
        setButtonDisable(false);
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
    <BackLoginContainer>
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
          <ButtonLogin type="submit" disabled={isButtonDisable}>
            LOGIN
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
    </BackLoginContainer>
  );
}
