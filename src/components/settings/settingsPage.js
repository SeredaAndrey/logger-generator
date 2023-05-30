import { NavLink, Outlet } from 'react-router-dom';

const SettingsPage = () => {
  return (
    <>
      <p>settings</p>
      <NavLink to="/settings/user">User setting</NavLink>
      <NavLink to="/settings/generator">Generator Setting</NavLink>
      <NavLink to="/settings/global">Global Setting</NavLink>
      <NavLink to="/">Back</NavLink>
      <Outlet />
    </>
  );
};

export default SettingsPage;
