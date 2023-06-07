import styled from '@emotion/styled';

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
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.fontSizes.xl};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const ReportUnitListItemTextDate = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${p => p.theme.space[12]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[4]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[4]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[4]};

  border-left: ${p => p.theme.borders.normal};
  border-right: ${p => p.theme.borders.normal};
`;

export const ReportUnitListItemText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${p => p.theme.space[6]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[4]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[4]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[4]};

  border-left: ${p => p.theme.borders.normal};
  border-right: ${p => p.theme.borders.normal};
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
  margin-right: ${p => p.theme.space[5]};
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
`;
