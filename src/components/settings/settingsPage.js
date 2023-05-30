import { NavLink, Outlet } from 'react-router-dom';
import {
  SettingMenuItemContainer,
  SettingPageTitle,
  SettingsPageContainer,
} from './settingPageStyled';

const SettingsPage = () => {
  return (
    <SettingsPageContainer>
      <SettingPageTitle>settings</SettingPageTitle>
      <SettingMenuItemContainer>
        <NavLink to="/settings/user">User setting</NavLink>
        <NavLink to="/settings/generator">Generator Setting</NavLink>
        <NavLink to="/settings/global">Global Setting</NavLink>
        <NavLink to="/">Back</NavLink>
      </SettingMenuItemContainer>
      <Outlet />
    </SettingsPageContainer>
  );
};

export default SettingsPage;
