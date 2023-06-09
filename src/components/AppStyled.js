import styled from '@emotion/styled';

export const SpinnerContainer = styled.div`
  position: absolute;
  z-index: 10;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;

  background-color: ${p => p.theme.colors.bgColorSpinner};
`;

export const PrimaryScreenContainer = styled.div`
  transform: translateY(${p => p.theme.space[8]});
  z-index: 2;

  align-items: center;

  margin-top: ${p => p.theme.space[0]};
  margin-left: auto;
  margin-right: auto;

  width: ${p => p.theme.space[15]};
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    transform: translateY(${p => p.theme.space[9]});

    width: ${p => p.theme.space[17]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    transform: translateY(${p => p.theme.space[10]});

    width: ${p => p.theme.space[18]};
  }
`;

export const PrimaryHomeContainer = styled.div`
  display: flex;

  align-items: center;

  margin-top: ${p => p.theme.space[0]};
  // margin-left: auto;
  // margin-right: auto;

  padding: ${p => p.theme.space[0]};

  width: ${p => p.theme.space[15]};
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[17]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    width: ${p => p.theme.space[18]};
  }
`;
