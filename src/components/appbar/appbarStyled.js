import styled from '@emotion/styled';

export const HederAppBar = styled.header`
  display: flex;
  align-items: center;

  margin-top: ${p => p.theme.space[0]};
  margin-left: auto;
  margin-right: auto;

  height: ${p => p.theme.space[10]};
  width: ${p => p.theme.space[18]};

  border-top-right-radius: ${p => p.theme.radii.big};
  border-top-left-radius: ${p => p.theme.radii.big};

  background-color: ${p => p.theme.colors.bgColorForm};
`;

export const HeaderLogoImage = styled.img`
  margin-left: ${p => p.theme.space[5]};
  margin-right: ${p => p.theme.space[5]};
`;

export const HeaderTitle = styled.h1`
  margin-right: auto;

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.fontSizes.xxl};
  text-transform: uppercase;
`;

export const authNavButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
