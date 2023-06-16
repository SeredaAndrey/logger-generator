import styled from '@emotion/styled';

export const CyclesPageContainer = styled.div`
  position: relative;
  width: 100%;

  margin-bottom: ${p => p.theme.space[12]};
`;

export const CyclesPageTitle = styled.h2`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[3]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[5]};
  padding-bottom: ${p => p.theme.space[2]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.fontSizes.xxl};
  text-transform: uppercase;

  color: ${p => p.theme.colors.colorTextLight};
  background-color: ${p => p.theme.colors.bgColorBox};
`;

export const CyclesMenuItemContainer = styled.div`
  display: flex;

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[2]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[5]};
  padding-bottom: ${p => p.theme.space[0]};

  background-color: ${p => p.theme.colors.bgColorBox};

  > a {
    text-decoration: none;

    margin-top: ${p => p.theme.space[0]};
    margin-right: ${p => p.theme.space[3]};
    margin-bottom: ${p => p.theme.space[0]};
    margin-left: ${p => p.theme.space[0]};

    padding-top: ${p => p.theme.space[3]};
    padding-right: ${p => p.theme.space[4]};
    padding-left: ${p => p.theme.space[4]};
    padding-bottom: ${p => p.theme.space[3]};

    border-top-right-radius: ${p => p.theme.radii.normal};
    border-top-left-radius: ${p => p.theme.radii.normal};

    font-family: 'Jura';
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.fontSizes.l};
    text-transform: uppercase;

    color: ${p => p.theme.colors.colorTextLight};
    background-color: ${p => p.theme.colors.bgColorSpinner};

    transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color, background-color;

    &:hover,
    &:focus {
      color: ${p => p.theme.colors.colorTextHover};
    }
  }
  .active {
    color: ${p => p.theme.colors.colorTextDark};
    background-color: ${p => p.theme.colors.bgColorAside};
  }
`;
