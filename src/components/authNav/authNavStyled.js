import styled from '@emotion/styled';

export const AuthNavButton = styled.button`
  width: ${p => p.theme.space[12]};
  height: ${p => p.theme.space[6]};

  padding: ${p => p.theme.space[0]};
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[5]};

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

  transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: background-color;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.colorButtonInHover};
  }
`;
