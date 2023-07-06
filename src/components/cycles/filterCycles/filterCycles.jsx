import { FormattedMessage } from 'react-intl';

import 'react-datepicker/dist/react-datepicker.css';
import FilterDatePicker, {
  FilterContainer,
  FilterDatePickerContainer,
  FilterDatePickerTitle,
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
      <FilterDatePickerContainer>
        <FilterDatePickerTitle>
          <FormattedMessage id="show_from" />
        </FilterDatePickerTitle>
        <FilterDatePicker
          selected={filtering.dateStart}
          onChange={onStartInterval}
          dateFormat="yyyy-MM-dd "
        />
      </FilterDatePickerContainer>
      <FilterDatePickerContainer>
        <FilterDatePickerTitle>
          <FormattedMessage id="show_to" />
        </FilterDatePickerTitle>
        <FilterDatePicker
          selected={filtering.dateStop}
          onChange={onStopInterval}
          dateFormat="yyyy-MM-dd "
        />
      </FilterDatePickerContainer>
    </FilterContainer>
  );
};

export default FilterCycles;
