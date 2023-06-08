import shortid from 'shortid';

import CycleDatePicker, {
  CycleButton,
  CycleDateInputPickerContainer,
  CycleDatePickerContainer,
  CycleFormDataForm,
  CycleFormDataInput,
  CycleFormDataLabel,
  CycleFormTitle,
  CyclesFormSpan,
} from './CyclesFormStyled';

const CycleForm = ({
  handleSubmit,
  handleChange,
  onChangeStartTimeStamp,
  onChangeStopTimeStamp,
  cycle,
  isNewCycle,
}) => {
  const volumeElecricalGenerationId = shortid.generate();
  const refuelingId = shortid.generate();
  const changeOilId = shortid.generate();

  //   console.log(isNewCycle);

  return (
    <>
      <CycleFormTitle>
        {isNewCycle ? 'create new working cycle' : 'patch working cycle'}
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
        <CycleButton type="submit">
          {isNewCycle ? 'create' : 'patch'}
        </CycleButton>
      </CycleFormDataForm>
    </>
  );
};

export default CycleForm;
