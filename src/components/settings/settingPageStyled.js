import styled from '@emotion/styled';

export const SettingsPageContainer = styled.div`
  width: 100%;
`;

export const SettingPageTitle = styled.h2`
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
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;

  color: ${p => p.theme.colors.colorTextLight};
  background-color: ${p => p.theme.colors.bgColorBox};
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.fontSizes.xl};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.fontSizes.xxl};
  }
`;

export const SettingMenuItemContainer = styled.div`
  display: flex;

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[2]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[0]};

  background-color: ${p => p.theme.colors.bgColorBox};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    padding-left: ${p => p.theme.space[5]};
  }

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
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.fontSizes.s};
    text-transform: uppercase;

    color: ${p => p.theme.colors.colorTextLight};
    background-color: ${p => p.theme.colors.bgColorSpinner};

    transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color, background-color;

    &:hover,
    &:focus {
      color: ${p => p.theme.colors.colorTextHover};
    }
    @media screen and (min-width: ${p => p.theme.space[17]}) {
      font-size: ${p => p.theme.fontSizes.s};
      line-height: ${p => p.theme.fontSizes.m};
    }
    @media screen and (min-width: ${p => p.theme.space[18]}) {
      font-size: ${p => p.theme.fontSizes.m};
      line-height: ${p => p.theme.fontSizes.l};
    }
  }
  .active {
    color: ${p => p.theme.colors.colorTextDark};
    background-color: ${p => p.theme.colors.bgColorAside};
  }
`;
