import { useState } from 'react';

import shortid from 'shortid';

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
  const dataFirstStartId = shortid();
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
      case 'dataFirstStart':
        return setDataFirstStart(value);
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
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor={brandId}>
          <input
            placeholder={brand ? brand : 'input brand name generator'}
            type="brand"
            name="brand"
            value={brand}
            onChange={handleChange}
            id={brandId}
          />
          Brand name generator
        </label>
        <label htmlFor={typeId}>
          <input
            placeholder={type ? type : 'input generator model'}
            type="type"
            name="type"
            value={type}
            onChange={handleChange}
            id={typeId}
          />
          Generator model
        </label>
        <label htmlFor={firstChangeOilReglamentId}>
          <input
            placeholder={
              firstChangeOilReglament
                ? firstChangeOilReglament
                : 'input first change of time oil reglament'
            }
            type="firstOilChange"
            name="firstOilChange"
            value={firstChangeOilReglament}
            onChange={handleChange}
            id={firstChangeOilReglamentId}
          />
          First change of time oil reglament
        </label>
        <label htmlFor={nextChangeOilReglamentId}>
          <input
            placeholder={
              nextChangeOilReglament
                ? nextChangeOilReglament
                : 'input next change of time oil reglament'
            }
            type="firstOilChange"
            name="firstOilChange"
            value={nextChangeOilReglament}
            onChange={handleChange}
            id={nextChangeOilReglamentId}
          />
          Next change of time oil reglament
        </label>
        <label htmlFor={electricalPowerId}>
          <input
            placeholder={
              electricalPower
                ? electricalPower
                : 'input electrical power generator'
            }
            type="electricalPower"
            name="electricalPower"
            value={electricalPower}
            onChange={handleChange}
            id={electricalPowerId}
          />
          Electrical power generator
        </label>
        <label htmlFor={dataFirstStartId}>
          <input
            placeholder={
              dataFirstStart
                ? dataFirstStart
                : 'input date of first start generator'
            }
            type="dataFirstStart"
            name="dataFirstStart"
            value={dataFirstStart}
            onChange={handleChange}
            id={dataFirstStartId}
          />
          Date of first start generator
        </label>
        <label htmlFor={workingFirsStartId}>
          <input
            placeholder={
              workingFirsStart
                ? workingFirsStart
                : 'input time before first start generator'
            }
            type="workingFirsStart"
            name="workingFirsStart"
            value={workingFirsStart}
            onChange={handleChange}
            id={workingFirsStartId}
          />
          Time before first start generator
        </label>
        <label htmlFor={oilVolumeId}>
          <input
            placeholder={
              oilVolume ? oilVolume : 'input volume of oil generator'
            }
            type="oilVolume"
            name="oilVolume"
            value={oilVolume}
            onChange={handleChange}
            id={oilVolumeId}
          />
          Volume of oil generator
        </label>
        <label htmlFor={fuelVolumeId}>
          <input
            placeholder={
              fuelVolume ? fuelVolume : 'input volume of fuel tank generator'
            }
            type="fuelVolume"
            name="fuelVolume"
            value={fuelVolume}
            onChange={handleChange}
            id={fuelVolumeId}
          />
          Volume of fuel tank generator
        </label>
      </form>
    </>
  );
};

export default GeneratorSettingsForm;

//   const [generatorSetting, setGeneratorSetting] = useState({
//     brand: null,
//     type: null,
//     firstChangeOilReglament: null,
//     nextChangeOilReglament: null,
//     electricalPower: null,
//     dataFirstStart: null,
//     workingFirsStart: null,
//     oilVolume: null,
//     fuelVolume: null,
//     _id: null,
//   });
