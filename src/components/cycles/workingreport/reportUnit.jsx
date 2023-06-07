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

  return (
    <ReportUnitListItem>
      <ReportUnitListItemTextDate>
        {formatedDate(cycle.timestampStart)}
      </ReportUnitListItemTextDate>
      <ReportUnitListItemTextDate>
        {formatedDate(cycle.timestampStop)}
      </ReportUnitListItemTextDate>
      <ReportUnitListItemText>
        {cycle.volumeElecricalGeneration}
      </ReportUnitListItemText>
      <ReportUnitListItemText>{cycle.refueling}</ReportUnitListItemText>
      <ReportUnitListItemText>
        {cycle.changeOil && <FaCheck />}
      </ReportUnitListItemText>
      <ReportUnitButtonContainer>
        <ReportUnitListItemButon
          type="button"
          onClick={() => {
            navigation('/cycles/patch');
          }}
        >
          <FaPenAlt />
        </ReportUnitListItemButon>
        <ReportUnitListItemButon
          type="button"
          onClick={() => {
            deleteWorkingCycle(cycle._id);
          }}
        >
          <FaTrash />
        </ReportUnitListItemButon>
      </ReportUnitButtonContainer>
    </ReportUnitListItem>
  );
};

export default WorkingReportItem;
