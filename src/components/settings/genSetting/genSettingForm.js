import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import shortid from 'shortid';
import MyDatePicker, {
  DatePickerContainer,
  GeneratorSettingButton,
  GeneratorSettingFormDataForm,
  GeneratorSettingFormDataInput,
  GeneratorSettingFormDataLabel,
  GeneratorSettingFormDataSpan,
  DateInputPickerContainer,
} from './genSettingFormStyled';
import {
  createNewSettingGenerator,
  patchingSettingsGenerator,
} from 'redux/settingOperations';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSettingBrand,
  getSettingDataFirstStart,
  getSettingFirstChangeOilReglament,
  getSettingIsPresent,
  getSettingNextChangeOilReglament,
  getSettingOilVolume,
  getSettingType,
  getSettingWorkingFirsStart,
  getSettingelEctricalPower,
} from 'redux/settingsSelector';

const GeneratorSettingsForm = ({ fetchSettings }) => {
  const dispatch = useDispatch();
  const brand = useSelector(getSettingBrand);
  const type = useSelector(getSettingType);
  const firstChangeOilReglament = useSelector(
    getSettingFirstChangeOilReglament
  );
  const nextChangeOilReglament = useSelector(getSettingNextChangeOilReglament);
  const electricalPower = useSelector(getSettingelEctricalPower);
  const dataFirstStart = useSelector(getSettingDataFirstStart);
  const workingFirsStart = useSelector(getSettingWorkingFirsStart);
  const oilVolume = useSelector(getSettingOilVolume);
  const settingsIsPresent = useSelector(getSettingIsPresent);

  const [settings, setSettings] = useState({
    brand,
    type,
    firstChangeOilReglament,
    nextChangeOilReglament,
    electricalPower,
    dataFirstStart,
    oilVolume,
  });
  const navigation = useNavigate();

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
        return setSettings({ ...settings, brand: value });
      case 'model':
        return setSettings({ ...settings, type: value });
      case 'firstChangeOilReglament':
        return setSettings({ ...settings, firstChangeOilReglament: value });
      case 'nextChangeOilReglament':
        return setSettings({ ...settings, nextChangeOilReglament: value });
      case 'electricalPower':
        return setSettings({ ...settings, electricalPower: value });
      case 'workingFirsStart':
        return setSettings({ ...settings, workingFirsStart: value });
      case 'oilVolume':
        return setSettings({ ...settings, oilVolume: value });
      case 'fuelVolume':
        return setSettings({ ...settings, fuelVolume: value });
      default:
        return;
    }
  };

  const onChangeDate = date => {
    setSettings({ ...settings, dataFirstStart: date });
  };

  const handleSubmit = e => {
    e.preventDefault();
    !settingsIsPresent
      ? dispatch(createNewSettingGenerator(settings))
      : dispatch(patchingSettingsGenerator(settings));
    // navigation('/settings/generator');
  };

  console.log(fetchSettings);

  return (
    <>
      <p>Generator settings form</p>
      <GeneratorSettingFormDataForm
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <GeneratorSettingFormDataLabel htmlFor={brandId}>
          <GeneratorSettingFormDataInput
            placeholder={settings.brand ? settings.brand : 'example: Dnipro-M'}
            type="brand"
            name="brand"
            value={settings.brand}
            onChange={handleChange}
            id={brandId}
          />
          <GeneratorSettingFormDataSpan>
            Brand name generator
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={modelId}>
          <GeneratorSettingFormDataInput
            placeholder={settings.model ? settings.model : 'example: GX-50E'}
            type="model"
            name="model"
            value={settings.model}
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
              settings.firstChangeOilReglament
                ? settings.firstChangeOilReglament
                : 'example: 20'
            }
            type="firstChangeOilReglament"
            name="firstChangeOilReglament"
            value={settings.firstChangeOilReglament}
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
              settings.nextChangeOilReglament
                ? settings.nextChangeOilReglament
                : 'example: 50'
            }
            type="nextChangeOilReglament"
            name="nextChangeOilReglament"
            value={settings.nextChangeOilReglament}
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
              settings.electricalPower
                ? settings.electricalPower
                : 'example: 5.5'
            }
            type="electricalPower"
            name="electricalPower"
            value={settings.electricalPower}
            onChange={handleChange}
            id={electricalPowerId}
          />
          <GeneratorSettingFormDataSpan>
            Electrical power generator, kW
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <DatePickerContainer>
          <DateInputPickerContainer>
            <MyDatePicker
              selected={settings.dataFirstStart}
              onChange={onChangeDate}
              showTimeSelect
            />
          </DateInputPickerContainer>
          <GeneratorSettingFormDataSpan>
            Date of first start generator
          </GeneratorSettingFormDataSpan>
        </DatePickerContainer>
        <GeneratorSettingFormDataLabel htmlFor={workingFirsStartId}>
          <GeneratorSettingFormDataInput
            placeholder={
              settings.workingFirsStart
                ? settings.workingFirsStart
                : 'example: 10'
            }
            type="workingFirsStart"
            name="workingFirsStart"
            value={settings.workingFirsStart}
            onChange={handleChange}
            id={workingFirsStartId}
          />
          <GeneratorSettingFormDataSpan>
            Time before first start generator, hours
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={oilVolumeId}>
          <GeneratorSettingFormDataInput
            placeholder={
              settings.oilVolume ? settings.oilVolume : 'example: 1.1'
            }
            type="oilVolume"
            name="oilVolume"
            value={settings.oilVolume}
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
              settings.fuelVolume ? settings.fuelVolume : 'example: 25'
            }
            type="fuelVolume"
            name="fuelVolume"
            value={settings.fuelVolume}
            onChange={handleChange}
            id={fuelVolumeId}
          />
          <GeneratorSettingFormDataSpan>
            Volume of fuel tank generator, litre
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingButton type="submit">
          {settingsIsPresent
            ? 'Patching gen. settings'
            : 'create new generator'}
        </GeneratorSettingButton>
      </GeneratorSettingFormDataForm>
    </>
  );
};

export default GeneratorSettingsForm;
