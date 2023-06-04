import { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import shortid from 'shortid';
import {
  DatePickerContainer,
  GeneratorSettingButton,
  GeneratorSettingFormDataForm,
  GeneratorSettingFormDataInput,
  GeneratorSettingFormDataLabel,
  GeneratorSettingFormDataSpan,
  CustomDatePicker,
  DateInputPickerContainer,
} from './genSettingFormStyled';
import { createNewSettingGenerator } from 'serviceAPI/APIservice';

const GeneratorSettingsForm = () => {
  const [setings, setSetings] = useState({});
  const [dataFirstStart, setDataFirstStart] = useState('');

  const brandId = shortid.generate();
  const modelId = shortid.generate();
  const firstChangeOilReglamentId = shortid();
  const nextChangeOilReglamentId = shortid();
  const electricalPowerId = shortid();
  const workingFirsStartId = shortid();
  const oilVolumeId = shortid();
  const fuelVolumeId = shortid();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'brand':
        return setSetings({ ...setings, brand: value });
      case 'model':
        return setSetings({ ...setings, type: value });
      case 'firstChangeOilReglament':
        return setSetings({ ...setings, firstChangeOilReglament: value });
      case 'nextChangeOilReglament':
        return setSetings({ ...setings, nextChangeOilReglament: value });
      case 'electricalPower':
        return setSetings({ ...setings, electricalPower: value });
      case 'workingFirsStart':
        return setSetings({ ...setings, workingFirsStart: value });
      case 'oilVolume':
        return setSetings({ ...setings, oilVolume: value });
      case 'fuelVolume':
        return setSetings({ ...setings, fuelVolume: value });
      default:
        return;
    }
  };

  function MyDatePicker() {
    return <CustomDatePicker />;
  }

  const onChangeDate = date => {
    setDataFirstStart(date);
    console.log(dataFirstStart);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(setings);
    createNewSettingGenerator(setings);
  };

  return (
    <>
      <p>Generator settings form</p>
      <GeneratorSettingFormDataForm
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <GeneratorSettingFormDataLabel htmlFor={brandId}>
          <GeneratorSettingFormDataInput
            placeholder={setings.brand ? setings.brand : 'example: Dnipro-M'}
            type="brand"
            name="brand"
            value={setings.brand}
            onChange={handleChange}
            id={brandId}
          />
          <GeneratorSettingFormDataSpan>
            Brand name generator
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={modelId}>
          <GeneratorSettingFormDataInput
            placeholder={setings.model ? setings.model : 'example: GX-50E'}
            type="model"
            name="model"
            value={setings.model}
            onChange={handleChange}
            id={modelId}
          />
          <GeneratorSettingFormDataSpan>
            Generator model
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={firstChangeOilReglamentId}>
          <GeneratorSettingFormDataInput
            placeholder={
              setings.firstChangeOilReglament
                ? setings.firstChangeOilReglament
                : 'example: 20'
            }
            type="firstChangeOilReglament"
            name="firstChangeOilReglament"
            value={setings.firstChangeOilReglament}
            onChange={handleChange}
            id={firstChangeOilReglamentId}
          />
          <GeneratorSettingFormDataSpan>
            First change of time oil reglament, hours
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={nextChangeOilReglamentId}>
          <GeneratorSettingFormDataInput
            placeholder={
              setings.nextChangeOilReglament
                ? setings.nextChangeOilReglament
                : 'example: 50'
            }
            type="nextChangeOilReglament"
            name="nextChangeOilReglament"
            value={setings.nextChangeOilReglament}
            onChange={handleChange}
            id={nextChangeOilReglamentId}
          />
          <GeneratorSettingFormDataSpan>
            Next change of time oil reglament, hours
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={electricalPowerId}>
          <GeneratorSettingFormDataInput
            placeholder={
              setings.electricalPower ? setings.electricalPower : 'example: 5.5'
            }
            type="electricalPower"
            name="electricalPower"
            value={setings.electricalPower}
            onChange={handleChange}
            id={electricalPowerId}
          />
          <GeneratorSettingFormDataSpan>
            Electrical power generator, kW
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <DatePickerContainer>
          <DateInputPickerContainer>
            <MyDatePicker selected={dataFirstStart} onChange={onChangeDate} />
          </DateInputPickerContainer>
          <GeneratorSettingFormDataSpan>
            Date of first start generator
          </GeneratorSettingFormDataSpan>
        </DatePickerContainer>
        <GeneratorSettingFormDataLabel htmlFor={workingFirsStartId}>
          <GeneratorSettingFormDataInput
            placeholder={
              setings.workingFirsStart
                ? setings.workingFirsStart
                : 'example: 10'
            }
            type="workingFirsStart"
            name="workingFirsStart"
            value={setings.workingFirsStart}
            onChange={handleChange}
            id={workingFirsStartId}
          />
          <GeneratorSettingFormDataSpan>
            Time before first start generator, hours
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={oilVolumeId}>
          <GeneratorSettingFormDataInput
            placeholder={setings.oilVolume ? setings.oilVolume : 'example: 1.1'}
            type="oilVolume"
            name="oilVolume"
            value={setings.oilVolume}
            onChange={handleChange}
            id={oilVolumeId}
          />
          <GeneratorSettingFormDataSpan>
            Volume oil of generator, litre
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={fuelVolumeId}>
          <GeneratorSettingFormDataInput
            placeholder={
              setings.fuelVolume ? setings.fuelVolume : 'example: 25'
            }
            type="fuelVolume"
            name="fuelVolume"
            value={setings.fuelVolume}
            onChange={handleChange}
            id={fuelVolumeId}
          />
          <GeneratorSettingFormDataSpan>
            Volume of fuel tank generator, litre
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingButton type="submit">Submit</GeneratorSettingButton>
      </GeneratorSettingFormDataForm>
    </>
  );
};

export default GeneratorSettingsForm;
