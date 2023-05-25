import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getIsLoggedIn } from 'redux/authSelector';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  console.log('isLoggedIn: ', isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
