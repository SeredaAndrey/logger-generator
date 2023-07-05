import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import shortid from 'shortid';
import SettingDatePicker, {
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
  getSettingFuelVolume,
  getSettingId,
  getSettingIsPresent,
  getSettingNextChangeOilReglament,
  getSettingOilVolume,
  getSettingType,
  getSettingWorkingFirsStart,
  getSettingelEctricalPower,
} from 'redux/settingsSelector';

const GeneratorSettingsForm = () => {
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
  const fuelVolume = useSelector(getSettingFuelVolume);
  const settingsIsPresent = useSelector(getSettingIsPresent);
  const idGenerator = useSelector(getSettingId);

  const [settings, setSettings] = useState({});

  const brandId = shortid.generate();
  const typeId = shortid.generate();
  const firstChangeOilReglamentId = shortid.generate();
  const nextChangeOilReglamentId = shortid.generate();
  const electricalPowerId = shortid.generate();
  const workingFirsStartId = shortid.generate();
  const oilVolumeId = shortid.generate();
  const fuelVolumeId = shortid.generate();

  useEffect(() => {
    setSettings({
      ...(brand !== null && { brand }),
      ...(type !== null && { type }),
      ...(firstChangeOilReglament !== null && { firstChangeOilReglament }),
      ...(nextChangeOilReglament !== null && { nextChangeOilReglament }),
      ...(electricalPower !== null && { electricalPower }),
      ...(dataFirstStart !== null && {
        dataFirstStart: new Date(dataFirstStart),
      }),
      ...(workingFirsStart !== null && { workingFirsStart }),
      ...(oilVolume !== null && { oilVolume }),
      ...(fuelVolume !== null && { fuelVolume }),
    });
  }, [
    brand,
    type,
    firstChangeOilReglament,
    nextChangeOilReglament,
    electricalPower,
    workingFirsStart,
    oilVolume,
    fuelVolume,
    dataFirstStart,
  ]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'brand':
        return setSettings({ ...settings, brand: value });
      case 'type':
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
      : dispatch(patchingSettingsGenerator({ settings, idGenerator }));
  };

  return (
    <>
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
            <FormattedMessage id="brand" />
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingFormDataLabel htmlFor={typeId}>
          <GeneratorSettingFormDataInput
            placeholder={settings.type ? settings.type : 'example: GX-50E'}
            type="type"
            name="type"
            value={settings.type}
            onChange={handleChange}
            id={typeId}
          />
          <GeneratorSettingFormDataSpan>
            <FormattedMessage id="model" />
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
            <FormattedMessage id="first_reglament" />
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
            <FormattedMessage id="next_reglament" />
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
            <FormattedMessage id="power" />
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <DatePickerContainer>
          <DateInputPickerContainer>
            <SettingDatePicker
              selected={settings.dataFirstStart}
              onChange={onChangeDate}
            />
          </DateInputPickerContainer>
          <GeneratorSettingFormDataSpan>
            <FormattedMessage id="first_start" />
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
            <FormattedMessage id="before_first_start" />
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
            <FormattedMessage id="volume_oil" />
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
            <FormattedMessage id="volume_fuel" />
          </GeneratorSettingFormDataSpan>
        </GeneratorSettingFormDataLabel>
        <GeneratorSettingButton type="submit">
          {settingsIsPresent ? (
            <FormattedMessage id="patch_gen" />
          ) : (
            <FormattedMessage id="new_gen" />
          )}
        </GeneratorSettingButton>
      </GeneratorSettingFormDataForm>
    </>
  );
};

export default GeneratorSettingsForm;
