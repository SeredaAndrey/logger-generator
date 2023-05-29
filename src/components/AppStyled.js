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
  height: 100vh;
  align-items: center;

  margin-top: ${p => p.theme.space[0]};
  margin-left: auto;
  margin-right: auto;

  width: ${p => p.theme.space[18]};
`;

export const PrimaryHomeContainer = styled.div`
  display: flex;

  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[0]};
`;
