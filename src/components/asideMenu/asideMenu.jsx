import { useSelector } from 'react-redux';
import {
  AsideLink,
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
                <AsideLink>User setting</AsideLink>
              </AsideSeccondaryListItem>
              <AsideSeccondaryListItem>
                <AsideLink>Generator Setting</AsideLink>
              </AsideSeccondaryListItem>
              <AsideSeccondaryListItem>
                <AsideLink>Global Setting</AsideLink>
              </AsideSeccondaryListItem>
            </AsideSeccondaryListContainer>
          </AsidePrimaryListItem>
          <AsidePrimaryListItem>
            <AsideTitle>Cycles</AsideTitle>
            <AsideSeccondaryListContainer>
              <AsideSeccondaryListItem>
                <AsideLink>Add cycle unit</AsideLink>
              </AsideSeccondaryListItem>
              <AsideSeccondaryListItem>
                <AsideLink>show last month report</AsideLink>
              </AsideSeccondaryListItem>
              <AsideSeccondaryListItem>
                <AsideLink>show months report</AsideLink>
              </AsideSeccondaryListItem>
            </AsideSeccondaryListContainer>
          </AsidePrimaryListItem>
        </AsidePrimaryListContainer>
      )}
    </AsideMenuContainer>
  );
}
