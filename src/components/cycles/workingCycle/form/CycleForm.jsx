import shortid from 'shortid';
import { toast } from 'react-toastify';
import { FaRegClock } from 'react-icons/fa';

import CycleDatePicker, {
  ClockIcoContainer,
  CycleButton,
  CycleDateInputPickerContainer,
  CycleDatePickerContainer,
  CycleFormDataForm,
  CycleFormDataInput,
  CycleFormDataLabel,
  CycleFormDataLabelCheckBox,
  CycleFormTitle,
  CyclesFormSpan,
  TotalWorkingTime,
} from './CyclesFormStyled';
import { useEffect, useState } from 'react';

const CycleForm = ({
  handleSubmit,
  handleChange,
  onChangeStartTimeStamp,
  onChangeStopTimeStamp,
  cycle,
  isNewCycle,
}) => {
  const [workingTime, setWorkingTime] = useState(null);

  const volumeElecricalGenerationId = shortid.generate();
  const refuelingId = shortid.generate();
  const changeOilId = shortid.generate();

  useEffect(() => {
    calculateWorkingTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycle]);

  const calculateWorkingTime = () => {
    if (!cycle.timestampStart || !cycle.timestampStop) {
      return;
    } else {
      const startDateTime = new Date(cycle.timestampStart);
      const stopDateTime = new Date(cycle.timestampStop);

      const timeDiff = stopDateTime.getTime() - startDateTime.getTime();

      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      if (hours < 0 || minutes < 0) {
        setWorkingTime(null);
        toast.error('stop time is less than start time');
        return;
      } else {
        const formattedTimeDiff = `${hours
          .toString()
          .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        setWorkingTime(formattedTimeDiff);
        return;
      }
    }
  };

  return (
    <>
      <CycleFormTitle>
        {isNewCycle ? 'create new working cycle' : 'patch working cycle'}

        <TotalWorkingTime
          style={{
            backgroundColor: !workingTime ? '#FEA2A2' : '#ABE5AE',
          }}
        >
          {workingTime ? workingTime : '--:--'}
        </TotalWorkingTime>
        <ClockIcoContainer>
          <FaRegClock size={20} />
        </ClockIcoContainer>
      </CycleFormTitle>
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
            amount electricity generated per cycle
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
            amount fuel filled, specify when refueling
          </CyclesFormSpan>
        </CycleFormDataLabel>
        <CycleFormDataLabelCheckBox htmlFor={changeOilId}>
          <CycleFormDataInput
            checked={cycle.changeOil}
            name="changeOil"
            onChange={handleChange}
            type="checkbox"
            id={changeOilId}
          />
          <CyclesFormSpan>Change of oil</CyclesFormSpan>
        </CycleFormDataLabelCheckBox>
        <CycleButton type="submit" disabled={!workingTime}>
          {isNewCycle ? 'create' : 'patch'}
        </CycleButton>
      </CycleFormDataForm>
    </>
  );
};

export default CycleForm;
