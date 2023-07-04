import styled from '@emotion/styled';

export const ReportUnitTitleMobile = styled.div`
  @media screen and (max-width: ${p => p.theme.space[17]}) {
    padding: ${p => p.theme.space[0]};
    margin: ${p => p.theme.space[0]};

    height: ${p => p.theme.space[5]};

    display: flex;

    align-items: center;
    justify-content: center;

    color: ${p => p.theme.colors.colorTextDark};
    background-color: ${p => p.theme.colors.bgColorForm};

    border: ${p => p.theme.borders.none};
    border-bottom-left-radius: ${p => p.theme.radii.normal};
    border-bottom-right-radius: ${p => p.theme.radii.normal};
  }
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    display: none;
  }
`;

export const ReportFilterForm = styled.form`
  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};
`;

export const ReportFilterFormSpan = styled.span`
  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[3]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.fontSizes.s};
`;

export const ReportFilterLabel = styled.label`
  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]};
  }
`;
export const ReportFilterSelect = styled.select`
  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  width: ${p => p.theme.space[9]};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  text-align: center;

  color: ${p => p.theme.colors.colorTextDark};
  background-color: ${p => p.theme.colors.bgColorWhite};

  font-family: 'Jura';
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.fontSizes.s};
`;

export const ReportUnitTitle = styled.div`
  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};

  display: none;

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
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    display: flex;
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

  list-style-type: none;
`;

export const ReportUnitListItem = styled.li`
  display: grid;
  grid-template-columns: 35% 35% 30%;
  justify-items: center;
  align-items: center;

  height: ${p => p.theme.space[6]};

  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

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

  @media screen and (max-width: ${p => p.theme.space[17]}) {
    &:hover,
    &:focus {
      .ButtonContainer {
        background-color: ${p => p.theme.colors.bgColorSpinner};
        border: ${p => p.theme.borders.none};
        border-radius: ${p => p.theme.radii.normal};

        display: flex;
      }
    }
  }

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    display: flex;

    text-align: center;

    height: ${p => p.theme.space[5]};

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

  word-wrap: break-word;

  align-items: center;
  justify-content: space-around;
  align-content: space-around;

  width: ${p => p.theme.space[10]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    width: ${p => p.theme.space[10]};
    height: 100%;

    border-left: ${p => p.theme.borders.normal};
    border-right: ${p => p.theme.borders.normal};

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
  justify-content: space-between;

  width: ${p => p.theme.space[7]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    justify-content: center;

    width: ${p => p.theme.space[7]};
    height: 100%;

    border-left: ${p => p.theme.borders.normal};
    border-right: ${p => p.theme.borders.normal};

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
export const ReportUnitIcons = styled.span`
  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[3]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    display: none;
  }
`;

export const ReportUnitButtonContainer = styled.div`
  display: none;

  width: ${p => p.theme.space[15]};
  height: ${p => p.theme.space[6]};

  position: absolute;
  align-items: center;
  justify-content: center;

  margin-left: auto;

  @media screen and (min-width: ${p => p.theme.space[17]}) {
    display: flex;
    position: relative;

    margin-right: ${p => p.theme.space[4]};

    width: fit-content;
    height: ${p => p.theme.space[5]};
  }
`;

export const ReportUnitListItemButon = styled.button`
  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[4]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[4]};

  background-color: transparent;
  border: none;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: color;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.colorTextHover};
  }
  @media screen and (min-width: ${p => p.theme.space[17]}) {
    margin-right: ${p => p.theme.space[4]};
    margin-left: ${p => p.theme.space[0]};
  }
  @media screen and (min-width: ${p => p.theme.space[18]}) {
    margin-right: ${p => p.theme.space[5]};
  }
`;
