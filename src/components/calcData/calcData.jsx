import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  CalcDataContainer,
  CalcDataString,
  CalcDataStringTitle,
  CalcDataTitle,
} from './calcDataStyled';
import { fetchCalcData } from 'redux/cycleOperation';
import { useDispatch } from 'react-redux';

const CalcData = () => {
  const [calcData, setCalcData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await dispatch(fetchCalcData());

        // console.log(data);
        if (data.payload.calculationData) data && setCalcData(data.payload);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch]);

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
          <CalcDataTitle>
            <FormattedMessage id="calc_data" />
          </CalcDataTitle>
          <CalcDataStringTitle>
            <FormattedMessage id="calc_total_gen" />
          </CalcDataStringTitle>
          <CalcDataString>
            {!calcData.calculationData.data.totalGeneration
              ? '---'
              : calcData.calculationData.data.totalGeneration}{' '}
            <FormattedMessage id="kw" />
          </CalcDataString>
          <CalcDataStringTitle>
            <FormattedMessage id="calc_month_gen" />
          </CalcDataStringTitle>
          <CalcDataString>
            {!calcData.calculationData.data.totalGenerationMonth
              ? '---'
              : calcData.calculationData.data.totalGenerationMonth}{' '}
            <FormattedMessage id="kw" />
          </CalcDataString>
          <CalcDataStringTitle>
            <FormattedMessage id="calc_total_run" />
          </CalcDataStringTitle>
          <CalcDataString>
            {!calcData.calculationData.data.totalWorkingTime
              ? '---'
              : calculateTime(
                  calcData.calculationData.data.totalWorkingTime
                )}{' '}
            <FormattedMessage id="h_m" />
          </CalcDataString>
          <CalcDataStringTitle>
            <FormattedMessage id="calc_month_run" />
          </CalcDataStringTitle>
          <CalcDataString>
            {!calcData.calculationData.data.totalWorkingTimeMonth
              ? '---'
              : calculateTime(
                  calcData.calculationData.data.totalWorkingTimeMonth
                )}{' '}
            <FormattedMessage id="h_m" />
          </CalcDataString>
          <CalcDataStringTitle>
            <FormattedMessage id="calc_oil_change" />
          </CalcDataStringTitle>
          <CalcDataString>
            {!calcData.calculationData.data.timeToChangeOil
              ? '---'
              : calculateTime(
                  calcData.calculationData.data.timeToChangeOil
                )}{' '}
            <FormattedMessage id="h_m" />
          </CalcDataString>
        </>
      )}
    </CalcDataContainer>
  );
};

export default CalcData;
