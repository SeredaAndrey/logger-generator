import styled from '@emotion/styled';

import fonImage from '../../../pictures/logo-generators.png';

export const BackVerifiContainer = styled.div`
  position: absolute;
  z-index: 5;
  display: grid;
  place-items: center;

  top: 0;
  left: 0;

  min-height: calc(100vh - ${p => p.theme.space[8]} - ${p => p.theme.space[8]});

  background-color: ${p => p.theme.colors.bgColorSpinner};
  width: ${p => p.theme.space[15]};
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[17]};
    min-height: calc(
      100vh - ${p => p.theme.space[8]} - ${p => p.theme.space[9]}
    );
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    width: ${p => p.theme.space[18]};
    min-height: calc(
      100vh - ${p => p.theme.space[8]} - ${p => p.theme.space[10]}
    );
  }
`;

export const VerifiContainer = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  // display: grid;
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

export const VerifiContainerTitle = styled.h2`
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

export const VerifiTitle = styled.h2`
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

export const VerifiText = styled.p`
  margin-left: ${p => p.theme.space[4]};
  margin-right: ${p => p.theme.space[4]};

  color: ${p => p.theme.colors.colorTextLight};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.fontSizes.s};
  text-align: center;
`;

export const VerifiInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};
`;

export const VerifiInputLabel = styled.label`
  height: ${p => p.theme.space[5]};
  width: ${p => p.theme.space[14]};

  padding: ${p => p.theme.space[0]};
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[5]};
`;

export const VerifiInput = styled.input`
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

export const ButtonVerifi = styled.button`
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
