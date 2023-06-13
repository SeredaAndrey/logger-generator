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

const WorkingReportPage = () => {
  const [cycles, setCycles] = useState();
  const dispatch = useDispatch();
  const [sortfilter, setSortFilter] = useState({
    filter: 'start',
    sort: 'ascending',
    dateStart: null,
    dateStop: null,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchWorkingCycles(sortfilter);
        setCycles(data.data.WorkingCycles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, sortfilter]);

  const deleteCycle = async id => {
    await deleteWorkingCycleUnit(id);

    const updatedCycles = cycles.filter(cycle => cycle._id !== id);
    setCycles(updatedCycles);
  };

  const onChangeFilterMode = filter => {
    setSortFilter(filter);
  };

  return (
    <>
      <FilterCycles onChangeFilterMode={onChangeFilterMode} />
      <ReportUnitTitle>
        <ReportUnitListItemTextDate>start cycle</ReportUnitListItemTextDate>
        <ReportUnitListItemTextDate>stop cycle</ReportUnitListItemTextDate>
        <ReportUnitListItemText>
          <FaRegClock size={20} />
        </ReportUnitListItemText>
        <ReportUnitListItemText>
          <ImPower size={20} />
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
