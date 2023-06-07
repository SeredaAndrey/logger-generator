import { FaTrash, FaPenAlt } from 'react-icons/fa';

import {
  ReportUnitButtonContainer,
  ReportUnitListItem,
  ReportUnitListItemButon,
  ReportUnitListItemText,
  ReportUnitListItemTextDate,
} from './reportUnitStyled';

const WorkingReportItem = ({ cycle, deleteWorkingCycle }) => {
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
      <ReportUnitListItemText>{cycle.changeOil}</ReportUnitListItemText>
      <ReportUnitButtonContainer>
        <ReportUnitListItemButon type="button">
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
