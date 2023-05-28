import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

import { register } from '../../redux/authOperations';
import { useNavigate } from 'react-router-dom';
import {
  BackRegisterContainer,
  ButtonNavigateRegister,
  ButtonRegister,
  RegisterContainer,
  RegisterContainerTitle,
  RegistrationInput,
  RegistrationInputForm,
  RegistrationInputLabel,
  RegistrationTitle,
} from './registerStyled';

export default function Register() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisable, setButtonDisable] = useState(true);

  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();

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
    dispatch(register({ email, password }));
    setEmail('');
    setPassword('');
    navigation('/verifycation');
  };

  return (
    <BackRegisterContainer>
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
          <ButtonRegister type="submit" disabled={isButtonDisable}>
            REGISTRATION
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
    </BackRegisterContainer>
  );
}
