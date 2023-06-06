import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import shortid from 'shortid';

import {
  getGeneralSettingPriceOfOil,
  getGeneralSettingPriceOfGasoline,
  getGeneralSettingPriceOfElectrical,
  getGeneralSettingIsGeneralSettingPreset,
  getGeneralSettingId,
} from 'redux/settingsSelector';
import {
  createNewGeneralSetting,
  patchGeneralSetting,
} from 'redux/settingOperations';
import {
  GeneralSettingButton,
  GeneralSettingFormDataForm,
  GeneralSettingFormDataInput,
  GeneralSettingFormDataLabel,
  GeneralSettingFormDataSpan,
} from './generalSettingFormStyled';

const GeneralSettingForm = () => {
  const dispatch = useDispatch();

  const priceOfOil = useSelector(getGeneralSettingPriceOfOil);
  const priceOfGasoline = useSelector(getGeneralSettingPriceOfGasoline);
  const priceOfElectrical = useSelector(getGeneralSettingPriceOfElectrical);
  const isGeneralSettingPreset = useSelector(
    getGeneralSettingIsGeneralSettingPreset
  );
  const idGeneral = useSelector(getGeneralSettingId);

  const [generalSettings, setGeneralSettings] = useState({});

  const priceOfOilId = shortid.generate();
  const priceOfGasolineId = shortid.generate();
  const priceOfElecricalId = shortid.generate();

  useEffect(() => {
    setGeneralSettings({
      ...(priceOfOil !== null && { priceOfOil }),
      ...(priceOfGasoline !== null && { priceOfGasoline }),
      ...(priceOfElectrical !== null && { priceOfElectrical }),
    });
  }, [priceOfOil, priceOfGasoline, priceOfElectrical]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'priceOfOil':
        return setGeneralSettings({ ...generalSettings, priceOfOil: value });
      case 'priceOfGasoline':
        return setGeneralSettings({
          ...generalSettings,
          priceOfGasoline: value,
        });
      case 'priceOfElectrical':
        return setGeneralSettings({
          ...generalSettings,
          priceOfElectrical: value,
        });
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    !isGeneralSettingPreset
      ? dispatch(createNewGeneralSetting(generalSettings))
      : dispatch(patchGeneralSetting({ generalSettings, idGeneral }));
  };

  return (
    <>
      <GeneralSettingFormDataForm
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <GeneralSettingFormDataLabel htmlFor={priceOfOilId}>
          <GeneralSettingFormDataInput
            placeholder={
              generalSettings.priceOfOil
                ? generalSettings.priceOfOil
                : 'example: 255'
            }
            type="priceOfOil"
            name="priceOfOil"
            value={generalSettings.priceOfOil}
            onChange={handleChange}
            id={priceOfOilId}
          />
          <GeneralSettingFormDataSpan>
            Price of engine oil
          </GeneralSettingFormDataSpan>
        </GeneralSettingFormDataLabel>
        <GeneralSettingFormDataLabel htmlFor={priceOfGasolineId}>
          <GeneralSettingFormDataInput
            placeholder={
              generalSettings.priceOfGasoline
                ? generalSettings.priceOfGasoline
                : 'example: 48'
            }
            type="priceOfGasoline"
            name="priceOfGasoline"
            value={generalSettings.priceOfGasoline}
            onChange={handleChange}
            id={priceOfGasolineId}
          />
          <GeneralSettingFormDataSpan>Price of fuel</GeneralSettingFormDataSpan>
        </GeneralSettingFormDataLabel>
        <GeneralSettingFormDataLabel htmlFor={priceOfElecricalId}>
          <GeneralSettingFormDataInput
            placeholder={
              generalSettings.priceOfElectrical
                ? generalSettings.priceOfElectrical
                : 'example: 2.5'
            }
            type="priceOfElectrical"
            name="priceOfElectrical"
            value={generalSettings.priceOfElectrical}
            onChange={handleChange}
            id={priceOfElecricalId}
          />
          <GeneralSettingFormDataSpan>
            Price of electrical
          </GeneralSettingFormDataSpan>
        </GeneralSettingFormDataLabel>
        <GeneralSettingButton type="submit">
          {isGeneralSettingPreset ? 'patching settings' : 'create new settings'}
        </GeneralSettingButton>
      </GeneralSettingFormDataForm>
    </>
  );
};

export default GeneralSettingForm;
