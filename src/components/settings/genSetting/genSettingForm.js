import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import shortid from 'shortid';
import {
  DatePickerContainer,
  GeneratorSettingButton,
  GeneratorSettingFormDataForm,
  GeneratorSettingFormDataInput,
  GeneratorSettingFormDataLabel,
  GeneratorSettingFormDataSpan,
} from './genSettingFormStyled';

const GeneratorSettingsForm = () => {
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [firstChangeOilReglament, setFirstChangeOilReglament] = useState('');
  const [nextChangeOilReglament, setNextChangeOilReglament] = useState('');
  const [electricalPower, setElectricalPower] = useState('');
  const [dataFirstStart, setDataFirstStart] = useState('');
  const [workingFirsStart, setWorkingFirsStart] = useState('');
  const [oilVolume, setOilVolume] = useState('');
  const [fuelVolume, setFuelVolume] = useState('');

  const brandId = shortid.generate();
  const typeId = shortid.generate();
  const firstChangeOilReglamentId = shortid();
  const nextChangeOilReglamentId = shortid();
  const electricalPowerId = shortid();
  // const dataFirstStartId = shortid();
  const workingFirsStartId = shortid();
  const oilVolumeId = shortid();
  const fuelVolumeId = shortid();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'brand':
        return setBrand(value);
      case 'model':
        return setType(value);
      case 'firstOilChange':
        return setFirstChangeOilReglament(value);
      case 'nextOilChange':
        return setNextChangeOilReglament(value);
      case 'electricalPower':
        return setElectricalPower(value);
      // case 'dataFirstStart':
      // return setDataFirstStart(value);
      case 'workingFirsStart':
        return setWorkingFirsStart(value);
      case 'oilVolume':
        return setOilVolume(value);
      case 'fuelVolume':
        return setFuelVolume(value);
      default:
        return;
    }
  };

  return (
    <>
      <p>Generator settings form</p>
      <GeneratorSettingFormDataForm
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <GeneratorSettingFormDataLabel htmlFor={brandId}>
          <GeneratorSettingFormDataInput
            placeholder={brand ? brand : 'example: Dnipro-M'}
            type="brand"
            name="brand"
            value={brand}
            onChange={handleChange}
            id={brandId}
          />
          <GeneratorSettingFormDataSpan>
            Brand name generator
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={typeId}>
          <GeneratorSettingFormDataInput
            placeholder={type ? type : 'example: GX-50E'}
            type="type"
            name="type"
            value={type}
            onChange={handleChange}
            id={typeId}
          />
          <GeneratorSettingFormDataSpan>
            Generator model
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={firstChangeOilReglamentId}>
          <GeneratorSettingFormDataInput
            placeholder={
              firstChangeOilReglament ? firstChangeOilReglament : 'example: 20'
            }
            type="firstOilChange"
            name="firstOilChange"
            value={firstChangeOilReglament}
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
              nextChangeOilReglament ? nextChangeOilReglament : 'example: 50'
            }
            type="firstOilChange"
            name="firstOilChange"
            value={nextChangeOilReglament}
            onChange={handleChange}
            id={nextChangeOilReglamentId}
          />
          <GeneratorSettingFormDataSpan>
            Next change of time oil reglament, hours
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={electricalPowerId}>
          <GeneratorSettingFormDataInput
            placeholder={electricalPower ? electricalPower : 'example: 5.5'}
            type="electricalPower"
            name="electricalPower"
            value={electricalPower}
            onChange={handleChange}
            id={electricalPowerId}
          />
          <GeneratorSettingFormDataSpan>
            Electrical power generator, kW
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        {/* <GeneratorSettingFormDataLabel htmlFor={dataFirstStartId}> */}
        {/* <GeneratorSettingFormDataInput
            placeholder={
              dataFirstStart ? dataFirstStart : 'example: 05.04.2023'
            }
            type="dataFirstStart"
            name="dataFirstStart"
            value={dataFirstStart}
            onChange={handleChange}
            id={dataFirstStartId}
          /> */}
        <DatePickerContainer>
          <DatePicker
            selected={dataFirstStart}
            onChange={date => setDataFirstStart(date)}
            style={{ ...GeneratorSettingFormDataInput }}
          />
          <GeneratorSettingFormDataSpan>
            Date of first start generator
          </GeneratorSettingFormDataSpan>
        </DatePickerContainer>

        {/* </GeneratorSettingFormDataLabel> */}
        <GeneratorSettingFormDataLabel htmlFor={workingFirsStartId}>
          <GeneratorSettingFormDataInput
            placeholder={workingFirsStart ? workingFirsStart : 'example: 10'}
            type="workingFirsStart"
            name="workingFirsStart"
            value={workingFirsStart}
            onChange={handleChange}
            id={workingFirsStartId}
          />
          <GeneratorSettingFormDataSpan>
            Time before first start generator, hours
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={oilVolumeId}>
          <GeneratorSettingFormDataInput
            placeholder={oilVolume ? oilVolume : 'example: 1.1'}
            type="oilVolume"
            name="oilVolume"
            value={oilVolume}
            onChange={handleChange}
            id={oilVolumeId}
          />
          <GeneratorSettingFormDataSpan>
            Volume oil of generator, litre
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={fuelVolumeId}>
          <GeneratorSettingFormDataInput
            placeholder={fuelVolume ? fuelVolume : 'example: 25'}
            type="fuelVolume"
            name="fuelVolume"
            value={fuelVolume}
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
