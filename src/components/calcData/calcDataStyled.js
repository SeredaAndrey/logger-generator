import styled from '@emotion/styled';

export const CalcDataContainer = styled.div`
  margin-top: ${p => p.theme.space[2]};
  margin-right: ${p => p.theme.space[2]};
  margin-bottom: ${p => p.theme.space[4]};
  margin-left: ${p => p.theme.space[2]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    margin-top: ${p => p.theme.space[3]};
    margin-right: ${p => p.theme.space[5]};
    margin-bottom: ${p => p.theme.space[6]};
    margin-left: ${p => p.theme.space[5]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    margin-top: ${p => p.theme.space[3]};
    margin-right: ${p => p.theme.space[6]};
    margin-bottom: ${p => p.theme.space[6]};
    margin-left: ${p => p.theme.space[6]};
  }
`;

export const CalcDataTitle = styled.h2`
  display: none;
`;

export const CalcDataStringTitle = styled.p`
  text-align: center;

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[2]};
  margin-left: ${p => p.theme.space[0]};

  color: ${p => p.theme.colors.colorTextDark};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.fontSizes.l};
`;

export const CalcDataString = styled.p`
  text-align: center;

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[3]};
  margin-left: ${p => p.theme.space[0]};

  color: ${p => p.theme.colors.colorTextDark};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
`;
