import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: ${p => p.theme.space[15]};

  margin-right: ${p => p.theme.space[5]};
`;

export const UserMenuTitle = styled.h2`
  margin-left: auto;
  margin-right: ${p => p.theme.space[2]};

  width: ${p => p.theme.space[8]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontSizes.l};
  text-transform: uppercase;

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    text-align: right;
    margin-right: ${p => p.theme.space[4]};

    width: ${p => p.theme.space[14]};

    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.fontSizes.xxl};
  }
`;

export const UserMenuImageContainer = styled.div`
  width: ${p => p.theme.space[6]};
  height: ${p => p.theme.space[6]};

  border-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.colors.dgColorPhoto};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[9]};
    height: ${p => p.theme.space[9]};
  }
`;

export const UserMenuImage = styled.img`
  width: ${p => p.theme.space[6]};
  height: ${p => p.theme.space[6]};

  border-radius: ${p => p.theme.radii.normal};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[9]};
    height: ${p => p.theme.space[9]};
  }
`;

export const UserMenuExitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  right: calc(-${p => p.theme.space[5]} / 2);
  top: ${p => p.theme.space[5]};

  width: calc(${p => p.theme.space[4]} + ${p => p.theme.space[4]});
  height: calc(${p => p.theme.space[4]} + ${p => p.theme.space[4]});

  border-radius: ${p => p.theme.radii.round};
  border: none;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: background-color;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.colorTextHover};
  }

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    right: calc(-${p => p.theme.space[5]} / 2);
    top: ${p => p.theme.space[6]};

    width: ${p => p.theme.space[5]};
    height: ${p => p.theme.space[5]};
  }
`;
