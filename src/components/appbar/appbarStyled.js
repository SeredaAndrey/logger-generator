import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  position: fixed;

  top: ${p => p.theme.space[0]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  height: ${p => p.theme.space[8]};
  width: ${p => p.theme.space[15]};

  background-color: ${p => p.theme.colors.bgColorWhite};
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    height: ${p => p.theme.space[10]};
    width: ${p => p.theme.space[17]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    width: ${p => p.theme.space[18]};
  }
`;

export const HederAppBar = styled.header`
  display: flex;
  align-items: center;

  margin: ${p => p.theme.space[0]};

  height: ${p => p.theme.space[8]};

  border-top-right-radius: ${p => p.theme.radii.big};
  border-top-left-radius: ${p => p.theme.radii.big};

  background-color: ${p => p.theme.colors.bgColorForm};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    height: ${p => p.theme.space[10]};
  }
`;

export const HeaderLogoImage = styled.img`
  margin-left: ${p => p.theme.space[4]};
  margin-right: ${p => p.theme.space[4]};

  width: ${p => p.theme.space[6]};
  height: ${p => p.theme.space[6]};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    margin-left: ${p => p.theme.space[5]};
    margin-right: ${p => p.theme.space[5]};

    width: ${p => p.theme.space[8]};
    height: ${p => p.theme.space[8]};
  }
`;

export const HeaderTitle = styled.h1`
  margin-right: auto;

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.fontSizes.xxl};
  }
`;
