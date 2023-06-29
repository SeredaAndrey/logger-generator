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

  const calculateTime = totalWorkingTime => {
    const hours = Math.floor(totalWorkingTime / (1000 * 60 * 60));
    const minutes = Math.floor(
      (totalWorkingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  };

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
              : calculateTime(
                  calcData.calculationData.data.totalWorkingTime
                )}{' '}
            hours:minutes
          </CalcDataString>
          <CalcDataStringTitle>
            generator run time last month
          </CalcDataStringTitle>
          <CalcDataString>
            {!calcData.calculationData.data.totalWorkingTimeMonth
              ? '---'
              : calculateTime(
                  calcData.calculationData.data.totalWorkingTimeMonth
                )}{' '}
            hours:minutes
          </CalcDataString>
          <CalcDataStringTitle>time until next oil change</CalcDataStringTitle>
          <CalcDataString>
            {!calcData.calculationData.data.timeToChangeOil
              ? '---'
              : calculateTime(
                  calcData.calculationData.data.timeToChangeOil
                )}{' '}
            hours:minutes
          </CalcDataString>
        </>
      )}
    </CalcDataContainer>
  );
};

export default CalcData;
