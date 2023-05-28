import styled from '@emotion/styled';

export const AsideMenuContainer = styled.aside`
  width: ${p => p.theme.space[13]};
  min-height: calc(
    100vh - ${p => p.theme.space[8]} - ${p => p.theme.space[10]}
  );

  padding-top: ${p => p.theme.space[4]};

  background-color: ${p => p.theme.colors.bgColorAside};
`;

export const AsideTitle = styled.p`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.fontSizes.xxl};
  text-transform: uppercase;
`;

export const AsideLink = styled.a`
  margin: ${p => p.theme.space[0]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color, font-weight;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.colorTextHover};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

export const AsidePrimaryListContainer = styled.ul`
  list-style-type: none;

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[4]};

  padding: ${p => p.theme.space[0]};
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

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }

  padding: ${p => p.theme.space[0]};
`;
