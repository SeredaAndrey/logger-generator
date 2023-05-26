import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verification } from '../../redux/authOperations';
import shortid from 'shortid';
import {
  ButtonVerifi,
  VerifiContainer,
  VerifiContainerTitle,
  VerifiInput,
  VerifiInputForm,
  VerifiInputLabel,
  VerifiText,
  VerifiTitle,
} from './verificationStyled';
import { getIsLoading } from 'redux/authSelector';
import { Grid } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

export default function Verifycation() {
  const dispatch = useDispatch();
  const [vToken, setVToken] = useState('');
  const isLoading = useSelector(getIsLoading);
  const navigation = useNavigate();

  const vTokenInputId = shortid.generate();

  const handleChange = ({ target: { value } }) => {
    return setVToken(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(verification({ vToken }));
    setVToken('');
    navigation('/');
  };

  return (
    <VerifiContainer>
      <VerifiContainerTitle>PowerGen Tracker</VerifiContainerTitle>
      <VerifiTitle>VERIFICATION E-MAIL</VerifiTitle>
      <VerifiText>
        Please check your email, provided during registration, copy the key, and
        paste it in the field below to confirm the authenticity of your email
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
        <ButtonVerifi type="submit">
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
            'VERIFICATION'
          )}
        </ButtonVerifi>
      </VerifiInputForm>
    </VerifiContainer>
  );
}
