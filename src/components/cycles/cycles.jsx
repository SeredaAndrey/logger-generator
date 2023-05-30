import { NavLink, Outlet } from 'react-router-dom';
import {
  CyclesMenuItemContainer,
  CyclesPageContainer,
  CyclesPageTitle,
} from './cyclesStyled';

const CyclesPage = () => {
  return (
    <CyclesPageContainer>
      <CyclesPageTitle>cycles</CyclesPageTitle>
      <CyclesMenuItemContainer>
        <NavLink to="/cycles/add">Add cycle unit</NavLink>
        <NavLink to="/cycles/lastmonthreport">show last month report</NavLink>
        <NavLink to="/cycles/monthsreport">show months report</NavLink>
        <NavLink to="/">Back</NavLink>
      </CyclesMenuItemContainer>
      <Outlet />
    </CyclesPageContainer>
  );
};

export default CyclesPage;
