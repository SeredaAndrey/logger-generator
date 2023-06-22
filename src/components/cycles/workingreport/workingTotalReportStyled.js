import styled from '@emotion/styled';

export const TotalReportUnitTitle = styled.div`
  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[4]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[8]};
  margin-left: ${p => p.theme.space[0]};

  display: flex;

  height: ${p => p.theme.space[9]};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  text-align: center;

  color: ${p => p.theme.colors.colorTextDark};
  background-color: ${p => p.theme.colors.bgColorForm};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.fontSizes.m};

  word-wrap: break-word;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;
export const TotalReportUnitListItemTextDate = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${p => p.theme.space[8]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[2]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[2]};

  border-left: ${p => p.theme.borders.normal};
  border-right: ${p => p.theme.borders.normal};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[10]};

    padding-right: ${p => p.theme.space[3]};
    padding-left: ${p => p.theme.space[3]};
    margin-left: ${p => p.theme.space[3]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    width: ${p => p.theme.space[12]};

    padding-right: ${p => p.theme.space[4]};
    padding-left: ${p => p.theme.space[4]};
    margin-left: ${p => p.theme.space[4]};
  }
`;
export const TotalReportUnitListItemText = styled.p`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: ${p => p.theme.space[5]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[2]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[2]};

  border-left: ${p => p.theme.borders.normal};
  border-right: ${p => p.theme.borders.normal};
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[7]};

    padding-right: ${p => p.theme.space[3]};
    padding-left: ${p => p.theme.space[3]};
    margin-left: ${p => p.theme.space[3]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    width: ${p => p.theme.space[8]};

    padding-right: ${p => p.theme.space[4]};
    padding-left: ${p => p.theme.space[4]};
    margin-left: ${p => p.theme.space[4]};
  }
`;

export const TotalReportUnitListItemSpan = styled.span`
  margin-top: ${p => p.theme.space[4]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};
`;
