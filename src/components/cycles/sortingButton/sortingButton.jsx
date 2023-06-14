import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

const {
  ReportUnitListItemSortIconContainer,
  ReportUnitListItemSortIconButton,
} = require('./sortingButtonStyled');

const SortingButtonComponent = ({ visualChange, onChangeSortMode }) => {
  return (
    <ReportUnitListItemSortIconContainer>
      {visualChange === 'up' && (
        <>
          <TiArrowSortedUp size={16} style={{ color: '#86A1FF' }} />
          <ReportUnitListItemSortIconButton
            type="button"
            onClick={() => {
              onChangeSortMode('descending');
            }}
          >
            <TiArrowSortedDown size={16} />
          </ReportUnitListItemSortIconButton>
        </>
      )}
      {visualChange === 'down' && (
        <>
          <ReportUnitListItemSortIconButton
            type="button"
            onClick={() => {
              onChangeSortMode('ascending');
            }}
          >
            <TiArrowSortedUp size={16} />
          </ReportUnitListItemSortIconButton>
          <TiArrowSortedDown size={16} style={{ color: '#86A1FF' }} />
        </>
      )}
      {!visualChange && (
        <>
          <ReportUnitListItemSortIconButton
            type="button"
            onClick={() => {
              onChangeSortMode('ascending');
            }}
          >
            <TiArrowSortedUp size={16} />
          </ReportUnitListItemSortIconButton>
          <ReportUnitListItemSortIconButton
            type="button"
            onClick={() => {
              onChangeSortMode('descending');
            }}
          >
            <TiArrowSortedDown size={16} />
          </ReportUnitListItemSortIconButton>
        </>
      )}
    </ReportUnitListItemSortIconContainer>
  );
};

export default SortingButtonComponent;
