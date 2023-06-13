import { FaTrash, FaPenAlt, FaCheck } from 'react-icons/fa';

import {
  ReportUnitButtonContainer,
  ReportUnitListItem,
  ReportUnitListItemButon,
  ReportUnitListItemText,
  ReportUnitListItemTextDate,
} from './reportUnitStyled';
import { useNavigate } from 'react-router';

const WorkingReportItem = ({ cycle, deleteWorkingCycle }) => {
  const navigation = useNavigate();

  const formatedDate = dateString => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${formattedDate} ${formattedTime}`;
  };

  const calculateTime = () => {
    const hours = Math.floor(cycle.workingTimeOfCycle / (1000 * 60 * 60));
    const minutes = Math.floor(
      (cycle.workingTimeOfCycle % (1000 * 60 * 60)) / (1000 * 60)
    );
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <ReportUnitListItem>
      <ReportUnitListItemTextDate>
        {formatedDate(cycle.timestampStart)}
      </ReportUnitListItemTextDate>
      <ReportUnitListItemTextDate>
        {formatedDate(cycle.timestampStop)}
      </ReportUnitListItemTextDate>
      <ReportUnitListItemText>{calculateTime()}</ReportUnitListItemText>
      <ReportUnitListItemText>
        {cycle.volumeElecricalGeneration
          ? `${cycle.volumeElecricalGeneration} kW`
          : '-'}
      </ReportUnitListItemText>
      <ReportUnitListItemText>
        {cycle.refueling ? `${cycle.refueling} litr` : '-'}
      </ReportUnitListItemText>
      <ReportUnitListItemText>
        {cycle.changeOil ? <FaCheck /> : '-'}
      </ReportUnitListItemText>
      <ReportUnitButtonContainer>
        <ReportUnitListItemButon
          type="button"
          onClick={() => {
            navigation(`/cycles/patch/${cycle._id}`);
          }}
        >
          <FaPenAlt size={20} />
        </ReportUnitListItemButon>
        <ReportUnitListItemButon
          type="button"
          onClick={() => {
            deleteWorkingCycle(cycle._id);
          }}
        >
          <FaTrash size={20} />
        </ReportUnitListItemButon>
      </ReportUnitButtonContainer>
    </ReportUnitListItem>
  );
};

export default WorkingReportItem;