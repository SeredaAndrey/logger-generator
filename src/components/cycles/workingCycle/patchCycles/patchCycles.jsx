import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import CycleForm from '../form/CycleForm';
import {
  fetchSingleWorkingCycle,
  patchWorkingCycleUnit,
} from 'redux/cycleOperation';
import { useDispatch } from 'react-redux';

const PatchCyclesPage = () => {
  const [cycle, setCycle] = useState({});
  const navigation = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const startDateTime = new Date(cycle.timestampStart);
    const stopDateTime = new Date(cycle.timestampStop);

    setCycle({
      ...cycle,
      workingTimeOfCycle: stopDateTime.getTime() - startDateTime.getTime(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycle.timestampStart, cycle.timestampStop]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await dispatch(fetchSingleWorkingCycle(params.id));
        // console.log(data.payload.WorkingCycle.data);
        setCycle({
          ...(data.payload.WorkingCycle.data.volumeElecricalGeneration !==
            null && {
            volumeElecricalGeneration:
              data.payload.WorkingCycle.data.volumeElecricalGeneration,
          }),
          ...(data.payload.WorkingCycle.data.refueling !== null && {
            refueling: data.payload.WorkingCycle.data.refueling,
          }),
          ...(data.payload.WorkingCycle.data.changeOil !== null && {
            changeOil: data.payload.WorkingCycle.data.changeOil,
          }),
          ...(data.payload.WorkingCycle.data.timestampStart !== null && {
            timestampStart: new Date(
              data.payload.WorkingCycle.data.timestampStart
            ),
          }),
          ...(data.payload.WorkingCycle.data.timestampStop !== null && {
            timestampStop: new Date(
              data.payload.WorkingCycle.data.timestampStop
            ),
          }),
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await dispatch(
      patchWorkingCycleUnit({ cycle, id: params.id })
    );
    setCycle({});
    data
      ? navigation('/cycles/workingreport')
      : toast.error('something is Wrong');
  };

  const handleChange = ({ target: { name, value, checked } }) => {
    switch (name) {
      case 'volumeElecricalGeneration':
        return setCycle({ ...cycle, volumeElecricalGeneration: value });
      case 'refueling':
        return setCycle({ ...cycle, refueling: value });
      case 'changeOil':
        return setCycle({ ...cycle, changeOil: checked });
      default:
        return;
    }
  };

  const onChangeStartTimeStamp = date => {
    setCycle({ ...cycle, timestampStart: date });
  };
  const onChangeStopTimeStamp = date => {
    setCycle({ ...cycle, timestampStop: date });
  };

  return (
    <>
      <CycleForm
        cycle={cycle}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        onChangeStartTimeStamp={onChangeStartTimeStamp}
        onChangeStopTimeStamp={onChangeStopTimeStamp}
        isNewCycle={false}
      />
    </>
  );
};

export default PatchCyclesPage;
