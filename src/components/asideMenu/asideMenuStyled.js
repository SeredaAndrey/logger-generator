import styled from '@emotion/styled';

export const AsideMenuContainer = styled.aside`
  display: flex;

  width: 100%;
  min-height: calc(100vh - ${p => p.theme.space[8]} - ${p => p.theme.space[8]});
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    min-height: calc(
      100vh - ${p => p.theme.space[8]} - ${p => p.theme.space[9]}
    );
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    min-height: calc(
      100vh - ${p => p.theme.space[8]} - ${p => p.theme.space[10]}
    );
  }
`;

export const AsideTitle = styled.p`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.fontSizes.xl};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.fontSizes.xxl};
  }
  > a {
    text-decoration: none;

    cursor: pointer;

    transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color, font-weight;

    color: ${p => p.theme.colors.colorTextDark};

    &:hover,
    &:focus {
      color: ${p => p.theme.colors.colorTextHover};
      font-weight: ${p => p.theme.fontWeights.bold};
    }
    .active {
      color: ${p => p.theme.colors.colorTextHover};
      font-weight: ${p => p.theme.fontWeights.bold};
    }
  }
`;

export const AsidePrimaryListContainer = styled.ul`
  list-style-type: none;

  width: ${p => p.theme.space[11]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[4]};

  background-color: ${p => p.theme.colors.bgColorAside};
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[13]};
  }
`;

export const AsidePrimaryListItem = styled.li`
  list-style-type: none;

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }

  padding: ${p => p.theme.space[0]};
`;

export const AsideSeccondaryListContainer = styled.ul`
  list-style-type: none;

  margin-top: ${p => p.theme.space[4]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[4]};

  padding: ${p => p.theme.space[0]};
`;

export const AsideSeccondaryListItem = styled.li`
  list-style-type: none;

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  margin-bottom: ${p => p.theme.space[2]};
  &:not(:last-child) {
    @media screen and (min-width: ${p => p.theme.space[17]}) {
      margin-bottom: ${p => p.theme.space[3]};
    }
    @media screen and (min-width: ${p => p.theme.space[18]}) {
      margin-bottom: ${p => p.theme.space[4]};
    }
  }

  padding: ${p => p.theme.space[0]};

  > a {
    text-decoration: none;

    margin: ${p => p.theme.space[0]};

    font-family: 'Jura';
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.fontSizes.s};
    text-transform: uppercase;

    @media screen and (min-width: ${p => p.theme.space[17]}) {
      font-size: ${p => p.theme.fontSizes.s};
      line-height: ${p => p.theme.fontSizes.m};
    }
    @media screen and (min-width: ${p => p.theme.space[18]}) {
      font-size: ${p => p.theme.fontSizes.m};
      line-height: ${p => p.theme.fontSizes.l};
    }

    cursor: pointer;

    transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color, font-weight;

    color: ${p => p.theme.colors.colorTextDark};

    &:hover,
    &:focus {
      color: ${p => p.theme.colors.colorTextHover};
      font-weight: ${p => p.theme.fontWeights.bold};
    }
    .active {
      color: ${p => p.theme.colors.colorTextHover};
      font-weight: ${p => p.theme.fontWeights.bold};
    }
  }
`;
