import UserMenu from 'components/usermenu/usermenu';
import { useSelector } from 'react-redux';

import logo from '../../pictures/logo-generators.png';

import { getIsLoggedIn } from 'redux/authSelector';

import { HeaderLogoImage, HeaderTitle, HederAppBar } from './appbarStyled';
import AuthNav from 'components/authNav/authNav';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <HederAppBar>
      <HeaderLogoImage
        src={logo}
        alt="logo"
        height="80"
        width="80"
      ></HeaderLogoImage>
      <HeaderTitle>PowerGen Tracker</HeaderTitle>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HederAppBar>
  );
};

export default AppBar;
