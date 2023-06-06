import { useState } from 'react';
import { useDispatch } from 'react-redux';

import shortid from 'shortid';

import CycleDatePicker, {
  CycleButton,
  CycleDateInputPickerContainer,
  CycleDatePickerContainer,
  CycleFormDataForm,
  CycleFormDataInput,
  CycleFormDataLabel,
  CyclesFormSpan,
} from './addCyclesStyled';

import { addWorkingCycle } from 'serviceAPI/APIservice';

const AddCyclesPage = () => {
  const [cycle, setCycle] = useState({});
  const dispatch = useDispatch();

  const volumeElecricalGenerationId = shortid.generate();
  const refuelingId = shortid.generate();
  const changeOilId = shortid.generate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addWorkingCycle(cycle));
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
  console.log(cycle);

  return (
    <>
      <CycleFormDataForm
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <CycleDatePickerContainer>
          <CycleDateInputPickerContainer>
            <CycleDatePicker
              selected={cycle.timestampStart}
              onChange={onChangeStartTimeStamp}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={5}
              dateFormat="yyyy-MM-dd HH:mm"
            />
          </CycleDateInputPickerContainer>
          <CyclesFormSpan>Timestamp of start cycle generator</CyclesFormSpan>
        </CycleDatePickerContainer>
        <CycleDatePickerContainer>
          <CycleDateInputPickerContainer>
            <CycleDatePicker
              selected={cycle.timestampStop}
              onChange={onChangeStopTimeStamp}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={5}
              dateFormat="yyyy-MM-dd HH:mm"
            />
          </CycleDateInputPickerContainer>
          <CyclesFormSpan>Timestamp of stop cycle generator</CyclesFormSpan>
        </CycleDatePickerContainer>
        <CycleFormDataLabel htmlFor={volumeElecricalGenerationId}>
          <CycleFormDataInput
            placeholder="example: 5"
            type="volumeElecricalGeneration"
            name="volumeElecricalGeneration"
            value={cycle.volumeElecricalGeneration}
            onChange={handleChange}
            id={volumeElecricalGenerationId}
          />
          <CyclesFormSpan>
            amount of electricity generated per generator cycle
          </CyclesFormSpan>
        </CycleFormDataLabel>
        <CycleFormDataLabel htmlFor={refuelingId}>
          <CycleFormDataInput
            placeholder="example: 20"
            type="refueling"
            name="refueling"
            value={cycle.refueling}
            onChange={handleChange}
            id={refuelingId}
          />
          <CyclesFormSpan>
            amount of fuel filled, specify when refueling
          </CyclesFormSpan>
        </CycleFormDataLabel>
        <CycleFormDataLabel htmlFor={changeOilId}>
          <CycleFormDataInput
            checked={cycle.changeOil}
            name="changeOil"
            onChange={handleChange}
            type="checkbox"
            id={changeOilId}
          />
          <CyclesFormSpan>Change of oil</CyclesFormSpan>
        </CycleFormDataLabel>
        <CycleButton type="submit">create</CycleButton>
      </CycleFormDataForm>
    </>
  );
};

export default AddCyclesPage;
