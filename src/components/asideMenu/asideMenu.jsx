import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
    <AsideMenuContainer>
      {isLoggedIn && (
        <AsidePrimaryListContainer>
          <AsidePrimaryListItem>
            <AsideTitle>Setting</AsideTitle>
            <AsideSeccondaryListContainer>
              <AsideSeccondaryListItem>
                <NavLink to="/usersetting">User setting</NavLink>
              </AsideSeccondaryListItem>
              <AsideSeccondaryListItem>
                <NavLink to="/gensetting">Generator Setting</NavLink>
              </AsideSeccondaryListItem>
              <AsideSeccondaryListItem>
                <NavLink to="">Global Setting</NavLink>
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
                <NavLink to="">show last month report</NavLink>
              </AsideSeccondaryListItem>
              <AsideSeccondaryListItem>
                <NavLink to="">show months report</NavLink>
              </AsideSeccondaryListItem>
            </AsideSeccondaryListContainer>
          </AsidePrimaryListItem>
        </AsidePrimaryListContainer>
      )}
    </AsideMenuContainer>
  );
}
