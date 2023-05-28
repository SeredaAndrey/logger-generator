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
