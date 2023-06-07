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

const AsideMenu = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <AsideMenuContainer>
          <AsidePrimaryListContainer>
            <AsidePrimaryListItem>
              <AsideTitle>
                <NavLink to="/settings">Setting</NavLink>
              </AsideTitle>
              <AsideSeccondaryListContainer>
                <AsideSeccondaryListItem>
                  <NavLink to="/settings/user">User setting</NavLink>
                </AsideSeccondaryListItem>
                <AsideSeccondaryListItem>
                  <NavLink to="/settings/generator">Generator Setting</NavLink>
                </AsideSeccondaryListItem>
                <AsideSeccondaryListItem>
                  <NavLink to="/settings/global">Global Setting</NavLink>
                </AsideSeccondaryListItem>
              </AsideSeccondaryListContainer>
            </AsidePrimaryListItem>
            <AsidePrimaryListItem>
              <AsideTitle>
                <NavLink to="cycles">Cycles</NavLink>
              </AsideTitle>
              <AsideSeccondaryListContainer>
                <AsideSeccondaryListItem>
                  <NavLink to="/cycles/add">Add cycle unit</NavLink>
                </AsideSeccondaryListItem>
                <AsideSeccondaryListItem>
                  <NavLink to="/cycles/workingreport">
                    show working report
                  </NavLink>
                </AsideSeccondaryListItem>
              </AsideSeccondaryListContainer>
            </AsidePrimaryListItem>
          </AsidePrimaryListContainer>
          <Outlet />
        </AsideMenuContainer>
      )}
    </>
  );
};

export default AsideMenu;
