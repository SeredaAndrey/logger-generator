import UserMenu from 'components/usermenu/usermenu';
import { useSelector } from 'react-redux';

import logo from '../../pictures/logo-generators.png';

import { getIsLoggedIn } from 'redux/authSelector';

import {
  AuthNavButton,
  HeaderLogoImage,
  HeaderTitle,
  HederAppBar,
} from './appbarStyled';
import { useNavigate } from 'react-router-dom';

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
      <HeaderTitle>Logger generator</HeaderTitle>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HederAppBar>
  );
};

export default AppBar;

const AuthNav = () => {
  const navigation = useNavigate();
  return (
    <authNavButtonContainer>
      <AuthNavButton
        type="button"
        onClick={() => {
          navigation('/register');
        }}
      >
        Registration
      </AuthNavButton>
      <AuthNavButton
        type="button"
        onClick={() => {
          navigation('/verifycation');
        }}
      >
        Verification
      </AuthNavButton>
      <AuthNavButton
        type="button"
        onClick={() => {
          navigation('/login');
        }}
      >
        LogIn
      </AuthNavButton>
    </authNavButtonContainer>
  );
};
