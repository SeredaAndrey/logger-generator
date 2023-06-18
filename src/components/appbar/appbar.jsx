import UserMenu from 'components/usermenu/usermenu';
import { useSelector } from 'react-redux';

import logo from '../../pictures/logo-generators.png';

import { getIsLoggedIn } from 'redux/authSelector';

import {
  HeaderContainer,
  HeaderLogoImage,
  HeaderTitle,
  HederAppBar,
} from './appbarStyled';
import AuthNav from 'components/authNav/authNav';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <HeaderContainer>
      <HederAppBar>
        <HeaderLogoImage src={logo} alt="logo"></HeaderLogoImage>
        <HeaderTitle>PowerGen Tracker</HeaderTitle>

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HederAppBar>
    </HeaderContainer>
  );
};

export default AppBar;
