import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import FilterDatePicker, {
  FilterButton,
  FilterContainer,
  FilterDateContainer,
  FilterSelect,
} from './filterCyclesStyled';

const FilterCycles = ({ onChangeFilterMode }) => {
  const [filter, setFilter] = useState({
    filter: 'start',
    sort: 'ascending',
    dateStart: null,
    dateStop: null,
  });

  const onChangeFilter = event => {
    setFilter({ ...filter, filter: event.target.value });
  };
  const onChangeSort = event => {
    setFilter({ ...filter, sort: event.target.value });
  };
  const onStartInterval = date => {
    setFilter({ ...filter, dateStart: date });
  };
  const onStopInterval = date => {
    setFilter({ ...filter, dateStop: date });
  };

  const onSubmit = () => {
    onChangeFilterMode(filter);
  };

  return (
    <FilterContainer>
      <FilterSelect id="filter" name="filter" onChange={onChangeFilter}>
        <option value="start">starting date</option>
        <option value="stop">stop date</option>
        <option value="cycle">ascending cycle time</option>
        <option value="gen">generation power</option>
      </FilterSelect>
      <FilterSelect id="sort" name="sort" onChange={onChangeSort}>
        <option value="ascending">ascending</option>
        <option value="descending">descending</option>
      </FilterSelect>
      <FilterDateContainer>
        <FilterDatePicker
          selected={filter.dateStart}
          onChange={onStartInterval}
          dateFormat="yyyy-MM-dd "
        />
        <FilterDatePicker
          selected={filter.dateStop}
          onChange={onStopInterval}
          dateFormat="yyyy-MM-dd "
        />
      </FilterDateContainer>

      <FilterButton type="button" onClick={onSubmit}>
        apply
      </FilterButton>
    </FilterContainer>
  );
};

export default FilterCycles;
