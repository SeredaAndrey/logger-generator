import shortid from 'shortid';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';

import CycleDatePicker, {
  CycleButton,
  CycleDateInputPickerContainer,
  CycleDatePickerContainer,
  CycleFormContainer,
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
    <CycleFormContainer>
      <CycleFormTitle>
        {isNewCycle ? (
          <FormattedMessage id="create_cycle" />
        ) : (
          <FormattedMessage id="patch_cycle" />
        )}

        <TotalWorkingTime
          style={{
            backgroundColor: !workingTime ? '#FEA2A2' : '#ABE5AE',
          }}
        >
          {workingTime ? workingTime : '--:--'}
        </TotalWorkingTime>
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
          <CyclesFormSpan>
            <FormattedMessage id="start" />
          </CyclesFormSpan>
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
          <CyclesFormSpan>
            <FormattedMessage id="stop" />
          </CyclesFormSpan>
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
            <FormattedMessage id="generated" />
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
            <FormattedMessage id="refueling" />
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
          <CyclesFormSpan>
            <FormattedMessage id="reoiling" />
          </CyclesFormSpan>
        </CycleFormDataLabelCheckBox>
        <CycleButton type="submit" disabled={!workingTime}>
          {isNewCycle ? (
            <FormattedMessage id="create" />
          ) : (
            <FormattedMessage id="patch" />
          )}
        </CycleButton>
      </CycleFormDataForm>
    </CycleFormContainer>
  );
};

export default CycleForm;
