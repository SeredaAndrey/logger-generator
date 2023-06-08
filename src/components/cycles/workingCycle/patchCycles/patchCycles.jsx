import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import CycleForm from '../form/CycleForm';
import {
  fetchSingleWorkingCycle,
  patchWorkingCycleUnit,
} from 'serviceAPI/APIservice';

const PatchCyclesPage = () => {
  const [cycle, setCycle] = useState({});
  const navigation = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSingleWorkingCycle(params.id);
        setCycle({
          ...(data.WorkingCycle.data.volumeElecricalGeneration !== null && {
            volumeElecricalGeneration:
              data.WorkingCycle.data.volumeElecricalGeneration,
          }),
          ...(data.WorkingCycle.data.refueling !== null && {
            refueling: data.WorkingCycle.data.refueling,
          }),
          ...(data.WorkingCycle.data.changeOil !== null && {
            changeOil: data.WorkingCycle.data.changeOil,
          }),
          ...(data.WorkingCycle.data.timestampStart !== null && {
            timestampStart: new Date(data.WorkingCycle.data.timestampStart),
          }),
          ...(data.WorkingCycle.data.timestampStop !== null && {
            timestampStop: new Date(data.WorkingCycle.data.timestampStop),
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
    const data = await patchWorkingCycleUnit({ cycle, id: params.id });
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
