import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { verification } from '../../redux/authOperations';
import shortid from 'shortid';
import {
  BackVerifiContainer,
  ButtonVerifi,
  VerifiContainer,
  VerifiContainerTitle,
  VerifiInput,
  VerifiInputForm,
  VerifiInputLabel,
  VerifiText,
  VerifiTitle,
} from './verificationStyled';
import { useNavigate } from 'react-router-dom';

export default function Verifycation() {
  const dispatch = useDispatch();
  const [vToken, setVToken] = useState('');
  const navigation = useNavigate();
  const [isButtonDisable, setButtonDisable] = useState(true);

  const vTokenInputId = shortid.generate();

  const handleChange = ({ target: { value } }) => {
    setButtonDisable(false);
    return setVToken(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(verification({ vToken }));
    setVToken('');
    navigation('/');
  };

  return (
    <BackVerifiContainer>
      <VerifiContainer>
        <VerifiContainerTitle>PowerGen Tracker</VerifiContainerTitle>
        <VerifiTitle>VERIFICATION E-MAIL</VerifiTitle>
        <VerifiText>
          Please check your email, provided during registration, copy the key,
          and paste it in the field below to confirm the authenticity of your
          email
        </VerifiText>
        <VerifiInputForm onSubmit={handleSubmit} autoComplete="off">
          <VerifiInputLabel htmlFor={vTokenInputId}>
            <VerifiInput
              placeholder="Verificanion token"
              type="text"
              value={vToken}
              onChange={handleChange}
              id={vTokenInputId}
            />
          </VerifiInputLabel>
          <ButtonVerifi type="submit" disabled={isButtonDisable}>
            VERIFICATION
          </ButtonVerifi>
        </VerifiInputForm>
      </VerifiContainer>
    </BackVerifiContainer>
  );
}
