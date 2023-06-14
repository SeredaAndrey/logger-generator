import styled from '@emotion/styled';

export const ReportUnitListItemSortIconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReportUnitListItemSortIconButton = styled.button`
  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
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
