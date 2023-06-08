import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { addWorkingCycle } from 'serviceAPI/APIservice';
import CycleForm from '../form/CycleForm';

const AddCyclesPage = () => {
  const [cycle, setCycle] = useState({});
  const navigation = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await addWorkingCycle(cycle);
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
        isNewCycle={true}
      />
    </>
  );
};

export default AddCyclesPage;
