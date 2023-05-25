import styled from '@emotion/styled';

import fonImage from '../../pictures/logo-generators.png';

export const LoginContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[5]};

  padding: ${p => p.theme.space[0]};

  height: ${p => p.theme.space[16]};
  width: ${p => p.theme.space[15]};

  background-color: ${p => p.theme.colors.bgColorBox};
  background-image: url(${fonImage});
  background-size: 170px;
  background-repeat: no-repeat;
  background-position: 50% 20%;

  // background: linear-gradient(
  //   134.58deg,
  //   #8a8a8a 5.45%,
  //   rgba(139, 139, 139, 0.69) 31.84%,
  //   #14111a 81.21%
  // );

  border-radius: ${p => p.theme.radii.big};

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const LoginContainerTitle = styled.h2`
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

export const LoginTitle = styled.h2`
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

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};
`;

export const InputLabel = styled.label`
  height: ${p => p.theme.space[5]};
  width: ${p => p.theme.space[14]};

  padding: ${p => p.theme.space[0]};
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[5]};
`;

export const Input = styled.input`
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
export const ButtonLogin = styled.button`
  display: block;

  width: ${p => p.theme.space[12]};
  height: ${p => p.theme.space[6]};

  padding: ${p => p.theme.space[0]};
  margin-top: ${p => p.theme.space[0]};

  border-radius: ${p => p.theme.radii.normal};
  border: none;

  background-color: ${p => p.theme.colors.colorButtonNoActive};
  color: ${p => p.theme.colors.colorTextDark};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
  text-transform: uppercase;
`;

export const ButtonNavigateLogin = styled.button`
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
  &:hover {
    color: ${p => p.theme.colors.colorTextHover};
  }
`;
