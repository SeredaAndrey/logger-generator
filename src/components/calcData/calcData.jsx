import { useEffect, useState } from 'react';
import { fetchCalcData } from 'serviceAPI/APIservice';
import {
  CalcDataContainer,
  CalcDataString,
  CalcDataStringTitle,
  CalcDataTitle,
} from './calcDataStyled';

const CalcData = () => {
  const [calcData, setCalcData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCalcData();

        data && setCalcData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <CalcDataContainer>
      {calcData && (
        <>
          <CalcDataTitle>Calculation data</CalcDataTitle>
          <CalcDataStringTitle>
            generated electricity for the entire time of operation
          </CalcDataStringTitle>
          <CalcDataString>
            {!calcData.calculationData.data.totalGeneration
              ? '---'
              : calcData.calculationData.data.totalGeneration}{' '}
            kW
          </CalcDataString>
          <CalcDataStringTitle>
            generated electricity for the last month operation
          </CalcDataStringTitle>
          <CalcDataString>
            {!calcData.calculationData.data.totalGenerationMonth
              ? '---'
              : calcData.calculationData.data.totalGenerationMonth}{' '}
            kW
          </CalcDataString>
          <CalcDataStringTitle>total generator run time</CalcDataStringTitle>
          <CalcDataString>
            {!calcData.calculationData.data.totalWorkingTime
              ? '---'
              : calcData.calculationData.data.totalWorkingTime}{' '}
            Hours
          </CalcDataString>
          <CalcDataStringTitle>
            generator run time last month
          </CalcDataStringTitle>
          <CalcDataString>
            {!calcData.calculationData.data.totalWorkingTimeMonth
              ? '---'
              : calcData.calculationData.data.totalWorkingTimeMonth}{' '}
            Hours
          </CalcDataString>
          <CalcDataStringTitle>time until next oil change</CalcDataStringTitle>
          <CalcDataString>
            {!calcData.calculationData.data.timeToChangeOil
              ? '---'
              : calcData.calculationData.data.timeToChangeOil}{' '}
            Hours
          </CalcDataString>
        </>
      )}
    </CalcDataContainer>
  );
};

export default CalcData;
