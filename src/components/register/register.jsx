import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';

import { register } from '../../redux/authOperations';
import { useNavigate } from 'react-router-dom';
import {
  ButtonNavigateRegister,
  ButtonRegister,
  RegisterContainer,
  RegisterContainerTitle,
  RegistrationInput,
  RegistrationInputForm,
  RegistrationInputLabel,
  RegistrationTitle,
} from './registerStyled';
import { getIsLoading } from 'redux/authSelector';
import { Grid } from 'react-loader-spinner';

export default function Register() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(getIsLoading);

  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();

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
    dispatch(register({ email, password }));
    setEmail('');
    setPassword('');
    navigation('/verifycation');
  };

  return (
    <RegisterContainer>
      <RegisterContainerTitle>PowerGen Tracker</RegisterContainerTitle>
      <RegistrationTitle>REGISTRATION</RegistrationTitle>
      <RegistrationInputForm onSubmit={handleSubmit} autoComplete="off">
        <RegistrationInputLabel htmlFor={emailInputId}>
          <RegistrationInput
            placeholder="E-MAIL"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            id={emailInputId}
          />
        </RegistrationInputLabel>
        <RegistrationInputLabel htmlFor={passwordInputId}>
          <RegistrationInput
            placeholder="PASSWORD"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id={passwordInputId}
          />
        </RegistrationInputLabel>
        <ButtonRegister type="submit">
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
            'REGISTRATION'
          )}
        </ButtonRegister>
      </RegistrationInputForm>
      <ButtonNavigateRegister
        type="button"
        onClick={() => {
          navigation('/login');
        }}
      >
        have an account? log in
      </ButtonNavigateRegister>
    </RegisterContainer>
  );
}
