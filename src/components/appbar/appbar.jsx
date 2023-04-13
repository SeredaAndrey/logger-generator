import { useSelector } from 'react-redux';

import authSelectors from 'redux/authSelector';
import AuthNav from 'components/authnav/authnav';
import UserMenu from 'components/usermenu/usermenu';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header>
      <h1>Logger generator</h1>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
