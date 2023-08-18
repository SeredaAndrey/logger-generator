import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FcAndroidOs } from 'react-icons/fc';

import {
  AsideMenuContainer,
  AsidePrimaryListContainer,
  AsidePrimaryListItem,
  AsideSeccondaryListContainer,
  AsideSeccondaryListItem,
  AsideSeccondaryListItemDown,
  AsideTitle,
} from './asideMenuStyled';
import { getIsLoggedIn } from 'redux/authSelector';
import CalcData from 'components/calcData/calcData';
import { developerContactData } from 'assets/developerContacts';

const AsideMenu = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <AsideMenuContainer>
          <AsidePrimaryListContainer>
            <AsidePrimaryListItem>
              <AsideTitle>
                <NavLink to="/settings">
                  <FormattedMessage id="settings" />
                </NavLink>
              </AsideTitle>
              <AsideSeccondaryListContainer>
                <AsideSeccondaryListItem>
                  <NavLink to="/settings/user">
                    <FormattedMessage id="user_settings" />
                  </NavLink>
                </AsideSeccondaryListItem>
                <AsideSeccondaryListItem>
                  <NavLink to="/settings/generator">
                    <FormattedMessage id="gen_settings" />
                  </NavLink>
                </AsideSeccondaryListItem>
                <AsideSeccondaryListItem>
                  <NavLink to="/settings/global">
                    <FormattedMessage id="global_settings" />
                  </NavLink>
                </AsideSeccondaryListItem>
              </AsideSeccondaryListContainer>
            </AsidePrimaryListItem>
            <AsidePrimaryListItem>
              <AsideTitle>
                <NavLink to="cycles">
                  <FormattedMessage id="cycles" />
                </NavLink>
              </AsideTitle>
              <AsideSeccondaryListContainer>
                <AsideSeccondaryListItem>
                  <NavLink to="/cycles/add">
                    <FormattedMessage id="add_cycle" />
                  </NavLink>
                </AsideSeccondaryListItem>
                <AsideSeccondaryListItem>
                  <NavLink to="/cycles/workingreport">
                    <FormattedMessage id="report" />
                  </NavLink>
                </AsideSeccondaryListItem>
              </AsideSeccondaryListContainer>
            </AsidePrimaryListItem>
            <AsideSeccondaryListItemDown>
              <a href={developerContactData.androidAPP}>
                <div>
                  <FcAndroidOs size={30}></FcAndroidOs>
                </div>
                <p>
                  <FormattedMessage id="downloadAPP" />
                </p>
              </a>
            </AsideSeccondaryListItemDown>
          </AsidePrimaryListContainer>
          <CalcData />
        </AsideMenuContainer>
      )}
    </>
  );
};

export default AsideMenu;
