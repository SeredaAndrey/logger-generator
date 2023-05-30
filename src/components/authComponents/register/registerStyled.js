import styled from '@emotion/styled';

import fonImage from '../../../pictures/logo-generators.png';

export const BackRegisterContainer = styled.div`
  position: absolute;
  z-index: 5;
  display: grid;
  place-items: center;

  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  background-color: ${p => p.theme.colors.bgColorSpinner};
`;

export const RegisterContainer = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  display: grid;
  place-items: center;

  padding: ${p => p.theme.space[0]};

  height: ${p => p.theme.space[16]};
  width: ${p => p.theme.space[15]};

  background-color: ${p => p.theme.colors.bgColorBox};
  background-image: url(${fonImage});
  background-size: 170px;
  background-repeat: no-repeat;
  background-position: 50% 20%;

  border-radius: ${p => p.theme.radii.big};

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const RegisterContainerTitle = styled.h2`
  margin-top: ${p => p.theme.space[5]};
  margin-bottom: ${p => p.theme.space[11]};

  color: ${p => p.theme.colors.colorTextLight};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.fontSizes.xxl};
  text-transform: uppercase;
`;

export const RegistrationTitle = styled.h2`
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[3]};

  color: ${p => p.theme.colors.colorTextLight};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;
`;

export const RegistrationInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};
`;

export const RegistrationInputLabel = styled.label`
  height: ${p => p.theme.space[5]};
  width: ${p => p.theme.space[14]};

  padding: ${p => p.theme.space[0]};
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[5]};
`;

export const RegistrationInput = styled.input`
  height: ${p => p.theme.space[5]};
  width: ${p => p.theme.space[14]};

  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  text-align: center;

  color: ${p => p.theme.colors.colorTextDark};
  background-color: ${p => p.theme.colors.bgColorForm};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
`;

export const ButtonRegister = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${p => p.theme.space[12]};
  height: ${p => p.theme.space[6]};

  padding: ${p => p.theme.space[0]};
  margin-top: ${p => p.theme.space[0]};

  border-radius: ${p => p.theme.radii.normal};
  border: none;

  background-color: ${p =>
    p.disabled
      ? p.theme.colors.colorButtonIsDisabled
      : p.theme.colors.colorButtonNoActive};
  color: ${p =>
    p.disabled
      ? p.theme.colors.colorTextDisabled
      : p.theme.colors.colorTextDark};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;

  transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: background-color;

  &:hover,
  &:focus {
    background-color: ${p =>
      p.disabled
        ? p.theme.colors.colorButtonIsDisabled
        : p.theme.colors.colorButtonInHover};
  }
  cursor: pointer;
`;

export const ButtonNavigateRegister = styled.button`
  margin-top: ${p => p.theme.space[3]};

  border: 0;
  background: transparent;

  cursor: pointer;

  font-family: 'Jura';
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;
  transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color;

  color: ${p => p.theme.colors.colorTextLight};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.colorTextHover};
  }
`;
