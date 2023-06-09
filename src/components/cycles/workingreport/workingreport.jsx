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

const WorkingReportPage = () => {
  const [cycles, setCycles] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchWorkingCycles();
        setCycles(data.data.WorkingCycles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const deleteCycle = async id => {
    await deleteWorkingCycleUnit(id);

    const updatedCycles = cycles.filter(cycle => cycle._id !== id);
    setCycles(updatedCycles);
  };

  return (
    <>
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
    </>
  );
};

export default WorkingReportPage;
