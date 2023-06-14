import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { FaGasPump, FaOilCan, FaRegClock } from 'react-icons/fa';
import { ImPower } from 'react-icons/im';

import {
  deleteWorkingCycleUnit,
  fetchWorkingCycles,
} from 'serviceAPI/APIservice';
import WorkingReportItem from './reportUnit';

import {
  ReportUnitList,
  ReportUnitListItemText,
  ReportUnitListItemTextDate,
  ReportUnitTitle,
} from './reportUnitStyled';
import FilterCycles from '../filterCycles/filterCycles';
import WorkingTotalReport from './workingTotalReport';
import SortingButtonComponent from '../sortingButton/sortingButton';

const WorkingReportPage = () => {
  const [cycles, setCycles] = useState();
  const dispatch = useDispatch();
  const [sortFilter, setSortFilter] = useState({
    filter: 'start',
    sort: 'ascending',
    dateStart: null,
    dateStop: null,
  });

  useEffect(() => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    setSortFilter(prevFilter => ({
      ...prevFilter,
      dateStart: firstDayOfMonth,
      dateStop: lastDayOfMonth,
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchWorkingCycles(sortFilter);
        setCycles(data.data.WorkingCycles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, sortFilter]);

  const deleteCycle = async id => {
    await deleteWorkingCycleUnit(id);

    const updatedCycles = cycles.filter(cycle => cycle._id !== id);
    setCycles(updatedCycles);
  };

  const onChangeFilterMode = filter => {
    setSortFilter(filter);
  };

  const onChangeSortModeStart = sort => {
    setSortFilter({ ...sortFilter, filter: 'start', sort: sort });
  };
  const onChangeSortModeStop = sort => {
    setSortFilter({ ...sortFilter, filter: 'stop', sort: sort });
  };
  const onChangeSortModeCycle = sort => {
    setSortFilter({ ...sortFilter, filter: 'cycle', sort: sort });
  };
  const onChangeSortModeGen = sort => {
    setSortFilter({ ...sortFilter, filter: 'gen', sort: sort });
  };

  return (
    <>
      <FilterCycles onChangeFilterMode={onChangeFilterMode} />
      <ReportUnitTitle>
        <ReportUnitListItemTextDate>
          start cycle
          <SortingButtonComponent
            onChangeSortMode={onChangeSortModeStart}
            visualChange={
              sortFilter.filter === 'start' && sortFilter.sort === 'ascending'
                ? 'up'
                : sortFilter.filter === 'start' &&
                  sortFilter.sort === 'descending'
                ? 'down'
                : ''
            }
          />
        </ReportUnitListItemTextDate>
        <ReportUnitListItemTextDate>
          stop cycle
          <SortingButtonComponent
            onChangeSortMode={onChangeSortModeStop}
            visualChange={
              sortFilter.filter === 'stop' && sortFilter.sort === 'ascending'
                ? 'up'
                : sortFilter.filter === 'stop' &&
                  sortFilter.sort === 'descending'
                ? 'down'
                : ''
            }
          />
        </ReportUnitListItemTextDate>
        <ReportUnitListItemText>
          <FaRegClock size={20} />
          <SortingButtonComponent
            onChangeSortMode={onChangeSortModeCycle}
            visualChange={
              sortFilter.filter === 'cycle' && sortFilter.sort === 'ascending'
                ? 'up'
                : sortFilter.filter === 'cycle' &&
                  sortFilter.sort === 'descending'
                ? 'down'
                : ''
            }
          />
        </ReportUnitListItemText>
        <ReportUnitListItemText>
          <ImPower size={20} />
          <SortingButtonComponent
            onChangeSortMode={onChangeSortModeGen}
            visualChange={
              sortFilter.filter === 'gen' && sortFilter.sort === 'ascending'
                ? 'up'
                : sortFilter.filter === 'gen' &&
                  sortFilter.sort === 'descending'
                ? 'down'
                : ''
            }
          />
        </ReportUnitListItemText>
        <ReportUnitListItemText>
          <FaGasPump size={20} />
        </ReportUnitListItemText>
        <ReportUnitListItemText>
          <FaOilCan size={30} />
        </ReportUnitListItemText>
      </ReportUnitTitle>
      {cycles && cycles.length !== 0 && (
        <ReportUnitList>
          {cycles.map(cycle => {
            return (
              <WorkingReportItem
                deleteWorkingCycle={deleteCycle}
                cycle={cycle}
                key={cycle._id}
              />
            );
          })}
        </ReportUnitList>
      )}
      <WorkingTotalReport cycles={cycles} />
    </>
  );
};

export default WorkingReportPage;
