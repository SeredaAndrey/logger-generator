import { useEffect, useState } from 'react';

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
  ReportUnitTitleMobile,
} from './reportUnitStyled';
import FilterCycles from '../filterCycles/filterCycles';
import WorkingTotalReport from './workingTotalReport';
import SortingButtonComponent from '../sortingButton/sortingButton';

const WorkingReportPage = () => {
  const [cycles, setCycles] = useState();

  const [filtering, setFiltering] = useState(() => {
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

    return {
      dateStart: firstDayOfMonth,
      dateStop: lastDayOfMonth,
    };
  });
  const [sorting, setSorting] = useState({
    filter: 'start',
    sort: 'ascending',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchWorkingCycles(filtering, sorting);
        setCycles(data.data.WorkingCycles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [filtering, sorting]);

  const deleteCycle = async id => {
    await deleteWorkingCycleUnit(id);

    const updatedCycles = cycles.filter(cycle => cycle._id !== id);
    setCycles(updatedCycles);
  };

  const onChangeStartFilter = date => {
    setFiltering(prevFilter => ({ ...prevFilter, dateStart: date }));
  };

  const onChangeStopFilter = date => {
    setFiltering(prevFilter => ({ ...prevFilter, dateStop: date }));
  };

  const onChangeSortModeStart = sort => {
    setSorting(prevFilter => ({ ...prevFilter, filter: 'start', sort: sort }));
  };
  const onChangeSortModeStop = sort => {
    setSorting(prevFilter => ({ ...prevFilter, filter: 'stop', sort: sort }));
  };
  const onChangeSortModeCycle = sort => {
    setSorting(prevFilter => ({ ...prevFilter, filter: 'cycle', sort: sort }));
  };
  const onChangeSortModeGen = sort => {
    setSorting(prevFilter => ({ ...prevFilter, filter: 'gen', sort: sort }));
  };

  return (
    <>
      <FilterCycles
        onChangeStartFilter={onChangeStartFilter}
        onChangeStopFilter={onChangeStopFilter}
        filtering={filtering}
      />
      <ReportUnitTitleMobile></ReportUnitTitleMobile>
      <ReportUnitTitle>
        <ReportUnitListItemTextDate>
          start cycle
          <SortingButtonComponent
            onChangeSortMode={onChangeSortModeStart}
            visualChange={
              sorting.filter === 'start' && sorting.sort === 'ascending'
                ? 'up'
                : sorting.filter === 'start' && sorting.sort === 'descending'
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
              sorting.filter === 'stop' && sorting.sort === 'ascending'
                ? 'up'
                : sorting.filter === 'stop' && sorting.sort === 'descending'
                ? 'down'
                : ''
            }
          />
        </ReportUnitListItemTextDate>
        <ReportUnitListItemText>
          <FaRegClock size={15} />
          <SortingButtonComponent
            onChangeSortMode={onChangeSortModeCycle}
            visualChange={
              sorting.filter === 'cycle' && sorting.sort === 'ascending'
                ? 'up'
                : sorting.filter === 'cycle' && sorting.sort === 'descending'
                ? 'down'
                : ''
            }
          />
        </ReportUnitListItemText>
        <ReportUnitListItemText>
          <ImPower size={15} />
          <SortingButtonComponent
            onChangeSortMode={onChangeSortModeGen}
            visualChange={
              sorting.filter === 'gen' && sorting.sort === 'ascending'
                ? 'up'
                : sorting.filter === 'gen' && sorting.sort === 'descending'
                ? 'down'
                : ''
            }
          />
        </ReportUnitListItemText>
        <ReportUnitListItemText>
          <FaGasPump size={15} />
        </ReportUnitListItemText>
        <ReportUnitListItemText>
          <FaOilCan size={20} />
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
