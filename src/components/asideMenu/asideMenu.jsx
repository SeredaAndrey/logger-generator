import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

import {
  AsideMenuContainer,
  AsidePrimaryListContainer,
  AsidePrimaryListItem,
  AsideSeccondaryListContainer,
  AsideSeccondaryListItem,
  AsideTitle,
} from './asideMenuStyled';
import { getIsLoggedIn } from 'redux/authSelector';

export default function AsideMenu() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <AsideMenuContainer>
          <AsidePrimaryListContainer>
            <AsidePrimaryListItem>
              <AsideTitle>Setting</AsideTitle>
              <AsideSeccondaryListContainer>
                <AsideSeccondaryListItem>
                  <NavLink to="/settings/usersetting">User setting</NavLink>
                </AsideSeccondaryListItem>
                <AsideSeccondaryListItem>
                  <NavLink to="/settings/gensetting">Generator Setting</NavLink>
                </AsideSeccondaryListItem>
                <AsideSeccondaryListItem>
                  <NavLink to="/settings/globalsetting">Global Setting</NavLink>
                </AsideSeccondaryListItem>
              </AsideSeccondaryListContainer>
            </AsidePrimaryListItem>
            <AsidePrimaryListItem>
              <AsideTitle>Cycles</AsideTitle>
              <AsideSeccondaryListContainer>
                <AsideSeccondaryListItem>
                  <NavLink to="">Add cycle unit</NavLink>
                </AsideSeccondaryListItem>
                <AsideSeccondaryListItem>
                  <NavLink to="/reports/monthreport">
                    show last month report
                  </NavLink>
                </AsideSeccondaryListItem>
                <AsideSeccondaryListItem>
                  <NavLink to="">show months report</NavLink>
                </AsideSeccondaryListItem>
              </AsideSeccondaryListContainer>
            </AsidePrimaryListItem>
          </AsidePrimaryListContainer>
          <Outlet />
        </AsideMenuContainer>
      )}
    </>
  );
}
