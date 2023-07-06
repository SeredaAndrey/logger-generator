import styled from '@emotion/styled';

export const FuterContainer = styled.div`
  position: fixed;

  bottom: ${p => p.theme.space[0]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  height: ${p => p.theme.space[8]};
  width: ${p => p.theme.space[15]};

  background-color: ${p => p.theme.colors.bgColorWhite};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[17]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    width: ${p => p.theme.space[18]};
  }
`;

export const Futer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom-right-radius: ${p => p.theme.radii.big};
  border-bottom-left-radius: ${p => p.theme.radii.big};

  background-color: ${p => p.theme.colors.bgColorForm};
`;

export const FuterText = styled.p`
  width: ${p => p.theme.space[12]};

  margin-left: ${p => p.theme.space[4]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontSizes.l};

  color: ${p => p.theme.colors.colorTextDark};

  text-transform: uppercase;
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[15]};

    margin-left: ${p => p.theme.space[5]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    width: ${p => p.theme.space[16]};

    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.fontSizes.xxl};
  }
`;

export const ContactsComponentList = styled.ul`
  display: flex;
  justify-content: flex-end;

  flex-wrap: wrap;

  padding: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[4]};
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};

  width: ${p => p.theme.space[9]};

  list-style-type: none;

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    margin-right: ${p => p.theme.space[5]};

    width: ${p => p.theme.space[16]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    width: ${p => p.theme.space[16]};
  }
`;

export const ContactsComponentItem = styled.li`
  margin: ${p => p.theme.space[3]};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    margin: ${p => p.theme.space[4]};
  }
`;

export const ContactsComponentItemLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(${p => p.theme.space[4]} + ${p => p.theme.space[2]});
  height: calc(${p => p.theme.space[4]} + ${p => p.theme.space[2]});

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

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    height: ${p => p.theme.space[5]};
    width: ${p => p.theme.space[5]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    height: ${p => p.theme.space[5]};
    width: ${p => p.theme.space[5]};
  }
`;
