import styled from '@emotion/styled';

export const FuterContainer = styled.footer`
  position: fixed;
  bottom: ${p => p.theme.space[0]};

  height: ${p => p.theme.space[8]};
  width: ${p => p.theme.space[18]};

  border-bottom-right-radius: ${p => p.theme.radii.big};
  border-bottom-left-radius: ${p => p.theme.radii.big};

  background-color: ${p => p.theme.colors.bgColorForm};
`;
