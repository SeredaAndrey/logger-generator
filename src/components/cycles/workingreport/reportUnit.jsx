import {
  FaTrash,
  FaPenAlt,
  FaCheck,
  FaGasPump,
  FaOilCan,
  FaRegClock,
} from 'react-icons/fa';
import { ImPower } from 'react-icons/im';

import {
  ReportUnitButtonContainer,
  ReportUnitIcons,
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
      <ReportUnitListItemText>
        {' '}
        <ReportUnitIcons>
          <FaRegClock size={10} />
        </ReportUnitIcons>
        {calculateTime()}
      </ReportUnitListItemText>
      <ReportUnitListItemText>
        <ReportUnitIcons>
          <ImPower size={10} />
        </ReportUnitIcons>
        {cycle.volumeElecricalGeneration
          ? `${cycle.volumeElecricalGeneration} kW`
          : '---'}
      </ReportUnitListItemText>
      <ReportUnitListItemText>
        <ReportUnitIcons>
          <FaGasPump size={10} />
        </ReportUnitIcons>
        {cycle.refueling ? `${cycle.refueling} litre` : '---'}
      </ReportUnitListItemText>
      <ReportUnitListItemText>
        <ReportUnitIcons>
          <FaOilCan size={15} />
        </ReportUnitIcons>
        {cycle.changeOil ? <FaCheck /> : '---'}
      </ReportUnitListItemText>
      <ReportUnitButtonContainer className="ButtonContainer">
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
