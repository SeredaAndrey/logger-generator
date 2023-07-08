import styled from '@emotion/styled';

export const TotalReportUnitTitle = styled.div`
  display: grid;
  justify-items: center;
  align-content: space-evenly;
  grid-template-columns: 50% 50%;

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[4]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[8]};
  margin-left: ${p => p.theme.space[0]};

  height: ${p => p.theme.space[10]};

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

  word-wrap: break-word;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[13]};
  }
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    display: flex;

    height: ${p => p.theme.space[9]};

    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.fontSizes.m};

    margin-bottom: ${p => p.theme.space[14]};
  }
`;
export const TotalReportUnitListItemTextDate = styled.p`
  display: none;
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

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    display: flex;

    width: ${p => p.theme.space[10]};

    padding-right: ${p => p.theme.space[3]};
    padding-left: ${p => p.theme.space[3]};
    margin-left: ${p => p.theme.space[3]};

    border-left: ${p => p.theme.borders.normal};
    border-right: ${p => p.theme.borders.normal};
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

  /* width: ${p => p.theme.space[5]}; */

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[2]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[2]};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[7]};

    padding-right: ${p => p.theme.space[3]};
    padding-left: ${p => p.theme.space[3]};
    margin-left: ${p => p.theme.space[3]};

    border-left: ${p => p.theme.borders.normal};
    border-right: ${p => p.theme.borders.normal};
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

export const WorkingTotalExportXLSXButton = styled.button`
  display: none;
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${p => p.theme.space[9]};
    height: ${p => p.theme.space[6]};

    padding: ${p => p.theme.space[0]};

    margin-top: ${p => p.theme.space[4]};
    margin-right: auto;
    margin-bottom: ${p => p.theme.space[0]};
    margin-left: auto;

    border-radius: ${p => p.theme.radii.normal};
    border: none;

    background-color: ${p =>
      p.disabled
        ? p.theme.colors.colorButtonIsDisabled
        : p.theme.colors.colorButtonNoActive};
    color: ${p =>
      p.disabled
        ? p.theme.colors.colorTextDisabled
        : p.theme.colors.colorTextDark};

    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

    font-family: 'Jura';
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.semiBold};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.fontSizes.l};
    text-transform: uppercase;

    transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: background-color;

    &:hover,
    &:focus {
      background-color: ${p =>
        p.disabled
          ? p.theme.colors.colorButtonIsDisabled
          : p.theme.colors.colorButtonInHover};
    }
    cursor: pointer;
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    width: ${p => p.theme.space[10]};
    height: ${p => p.theme.space[6]};
  }
`;
