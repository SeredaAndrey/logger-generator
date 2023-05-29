import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getIsLoggedIn, getIsRefreshing } from 'redux/authSelector';

export const PrivatRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const shoulRedirect = !isLoggedIn && !isRefreshing;

  return shoulRedirect ? <Navigate to={redirectTo} /> : Component;
};
