import styled from '@emotion/styled';

export const FuterContainer = styled.footer`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  bottom: ${p => p.theme.space[0]};

  height: ${p => p.theme.space[8]};
  width: ${p => p.theme.space[18]};

  border-bottom-right-radius: ${p => p.theme.radii.big};
  border-bottom-left-radius: ${p => p.theme.radii.big};

  background-color: ${p => p.theme.colors.bgColorForm};
`;

export const FuterText = styled.p`
  margin-left: ${p => p.theme.space[5]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.fontSizes.xxl};

  color: ${p => p.theme.colors.colorTextDark};

  text-transform: uppercase;
`;

export const ContactsComponentList = styled.ul`
  display: flex;

  padding: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[5]};

  list-style-type: none;
`;

export const ContactsComponentItem = styled.li`
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[5]};
  }
`;

export const ContactsComponentItemLink = styled.a`
  color: ${p => p.theme.colors.colorTextDark};
  &:visited {
    color: ${p => p.theme.colors.colorTextDark};
    text-decoration: none;
  }

  transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.colorTextHover};
  }
`;
