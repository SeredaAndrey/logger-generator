import 'react-datepicker/dist/react-datepicker.css';
import FilterDatePicker, {
  FilterContainer,
  FilterDateContainer,
} from './filterCyclesStyled';

const FilterCycles = ({
  filtering,
  onChangeStartFilter,
  onChangeStopFilter,
}) => {
  const onStartInterval = date => {
    onChangeStartFilter(date);
  };
  const onStopInterval = date => {
    onChangeStopFilter(date);
  };

  return (
    <FilterContainer>
      <FilterDateContainer>
        <FilterDatePicker
          selected={filtering.dateStart}
          onChange={onStartInterval}
          dateFormat="yyyy-MM-dd "
        />
        <FilterDatePicker
          selected={filtering.dateStop}
          onChange={onStopInterval}
          dateFormat="yyyy-MM-dd "
        />
      </FilterDateContainer>
    </FilterContainer>
  );
};

export default FilterCycles;