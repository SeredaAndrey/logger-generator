import { NavLink, Outlet } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { BiArrowBack } from 'react-icons/bi';

import {
  CyclesMenuItemContainer,
  CyclesPageContainer,
  CyclesPageTitle,
} from './cyclesStyled';

const CyclesPage = () => {
  return (
    <CyclesPageContainer>
      <CyclesPageTitle>
        <FormattedMessage id="cycles" />
      </CyclesPageTitle>
      <CyclesMenuItemContainer>
        <NavLink to="/">
          <BiArrowBack />
        </NavLink>
        <NavLink to="/cycles/add">
          <FormattedMessage id="add_cycle" />
        </NavLink>
        <NavLink to="/cycles/workingreport">
          <FormattedMessage id="report" />
        </NavLink>
      </CyclesMenuItemContainer>

      <Outlet />
    </CyclesPageContainer>
  );
};

export default CyclesPage;
