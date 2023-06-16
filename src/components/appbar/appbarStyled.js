import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  position: fixed;

  top: ${p => p.theme.space[0]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  height: ${p => p.theme.space[10]};
  width: ${p => p.theme.space[18]};

  background-color: ${p => p.theme.colors.bgColorWhite};
`;

export const HederAppBar = styled.header`
  display: flex;
  align-items: center;

  margin: ${p => p.theme.space[0]};

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
