import { NavLink, Outlet } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';

import {
  SettingMenuItemContainer,
  SettingPageTitle,
  SettingsPageContainer,
} from './settingPageStyled';

const SettingsPage = () => {
  return (
    <SettingsPageContainer>
      <SettingPageTitle>
        <FormattedMessage id="settings" />
      </SettingPageTitle>
      <SettingMenuItemContainer>
        <NavLink to="/">
          <BiArrowBack />
        </NavLink>
        <NavLink to="/settings/user">
          <FormattedMessage id="user_settings" />
        </NavLink>
        <NavLink to="/settings/generator">
          <FormattedMessage id="gen_settings" />
        </NavLink>
        <NavLink to="/settings/global">
          <FormattedMessage id="global_settings" />
        </NavLink>
      </SettingMenuItemContainer>
      <Outlet />
    </SettingsPageContainer>
  );
};

export default SettingsPage;
