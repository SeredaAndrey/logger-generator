import { FormattedMessage } from 'react-intl';

import {
  TotalReportUnitListItemSpan,
  TotalReportUnitListItemText,
  TotalReportUnitListItemTextDate,
  TotalReportUnitTitle,
} from './workingTotalReportStyled';

const countTotalWorkingTime = cycles => {
  let totalWorkingTime = 0;

  cycles.forEach(item => {
    if (item.workingTimeOfCycle) {
      totalWorkingTime += item.workingTimeOfCycle;
    }
  });

  return calculateTime(totalWorkingTime);
};

const calculateTime = totalWorkingTime => {
  const hours = Math.floor(totalWorkingTime / (1000 * 60 * 60));
  const minutes = Math.floor(
    (totalWorkingTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;
};

const countTotalGenerationPower = cycles => {
  let totalGenerationPower = 0;

  cycles.forEach(item => {
    if (item.volumeElecricalGeneration) {
      totalGenerationPower += item.volumeElecricalGeneration;
    }
  });

  return totalGenerationPower;
};

const countTotalRefueling = cycles => {
  let totalRafueling = 0;

  cycles.forEach(item => {
    if (item.refueling) {
      totalRafueling += item.refueling;
    }
  });

  return totalRafueling;
};

const countTotalChangeOil = cycles => {
  let totalChangeOil = 0;

  cycles.forEach(item => {
    if (item.refueling) {
      totalChangeOil += 1;
    }
  });

  return totalChangeOil;
};

const WorkingTotalReport = ({ cycles }) => {
  return (
    <>
      {cycles && (
        <TotalReportUnitTitle>
          <TotalReportUnitListItemTextDate></TotalReportUnitListItemTextDate>
          <TotalReportUnitListItemTextDate></TotalReportUnitListItemTextDate>
          <TotalReportUnitListItemText>
            <FormattedMessage id="total_time" />
            <TotalReportUnitListItemSpan>
              {countTotalWorkingTime(cycles) || '---'}
            </TotalReportUnitListItemSpan>
          </TotalReportUnitListItemText>
          <TotalReportUnitListItemText>
            <FormattedMessage id="total_gen" />
            <TotalReportUnitListItemSpan>
              {countTotalGenerationPower(cycles) || '---'}
            </TotalReportUnitListItemSpan>
          </TotalReportUnitListItemText>
          <TotalReportUnitListItemText>
            <FormattedMessage id="total_refueling" />
            <TotalReportUnitListItemSpan>
              {countTotalRefueling(cycles) || '---'}
            </TotalReportUnitListItemSpan>
          </TotalReportUnitListItemText>
          <TotalReportUnitListItemText>
            <FormattedMessage id="total_reoiling" />
            <TotalReportUnitListItemSpan>
              {countTotalChangeOil(cycles) || '---'}
            </TotalReportUnitListItemSpan>
          </TotalReportUnitListItemText>
        </TotalReportUnitTitle>
      )}
    </>
  );
};

export default WorkingTotalReport;
