import styled from '@emotion/styled';

export const AuthNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    flex-direction: row;
  }
`;

export const AuthNavButton = styled.button`
  // width: ${p => p.theme.space[10]};
  // height: ${p => p.theme.space[4]};

  padding: ${p => p.theme.space[0]};
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[4]};

  border: none;

  background-color: transparent;
  color: ${p => p.theme.colors.colorTextDark};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.fontSizes.m};
  text-transform: uppercase;

  transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: background-color;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.colorButtonInHover};
  }
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    margin-right: ${p => p.theme.space[4]};

    width: ${p => p.theme.space[10]};
    height: ${p => p.theme.space[5]};

    border-radius: ${p => p.theme.radii.normal};

    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.fontSizes.l};

    background-color: ${p => p.theme.colors.colorButtonNoActive};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    margin-right: ${p => p.theme.space[5]};

    width: ${p => p.theme.space[12]};
    height: ${p => p.theme.space[6]};

    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.fontSizes.xl};
  }
`;
