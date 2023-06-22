import styled from '@emotion/styled';

export const ReportUnitTitle = styled.div`
  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};

  display: flex;

  height: ${p => p.theme.space[5]};

  border: ${p => p.theme.borders.none};
  border-bottom-left-radius: ${p => p.theme.radii.normal};
  border-bottom-right-radius: ${p => p.theme.radii.normal};

  text-align: center;

  color: ${p => p.theme.colors.colorTextDark};
  background-color: ${p => p.theme.colors.bgColorForm};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.fontSizes.s};

  word-wrap: break-word;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.fontSizes.m};
  }
`;

export const ReportUnitList = styled.ul`
  padding: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[4]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};
`;

export const ReportUnitListItem = styled.li`
  display: flex;

  height: ${p => p.theme.space[5]};

  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  text-align: center;

  color: ${p => p.theme.colors.colorTextDark};
  background-color: ${p => p.theme.colors.bgColorForm};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.fontSizes.s};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.fontSizes.m};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.fontSizes.xl};
  }
`;

export const ReportUnitListItemTextDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  word-wrap: break-word;

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

export const ReportUnitListItemText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

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

export const ReportUnitButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  margin-right: ${p => p.theme.space[4]};
`;

export const ReportUnitListItemButon = styled.button`
  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[4]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  background-color: transparent;
  border: none;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.colorTextHover};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    margin-right: ${p => p.theme.space[5]};
  }
`;
