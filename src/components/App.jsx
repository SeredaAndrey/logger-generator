import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { Circles } from 'react-loader-spinner';

import AppBar from './appbar/appbar';
import { PublicRoute } from './PublicRoute';
import { PrivatRoute } from './PrivatRoute';
import Register from './register/register';
import Login from './login/login';
import Cycles from './cycles/cycles';
import Verifycation from './verifycation/verification';

import { refreshUser } from 'redux/authOperations';
import { theme } from 'theme';
import { getIsLoading, getIsRefreshing } from 'redux/authSelector';
import SharedLayout from './Shared/shared';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* {isLoading || isRefreshing ? (
          <>
            <Circles
              height="80"
              width="80"
              color="#EBD8FF"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            <div>{isLoading}Loading...</div>
          </>
        ) : ( */}
        <>
          <AppBar />
          <Routes>
            <Route
              path="/register"
              element={<PublicRoute redirectTo="/" component={<Register />} />}
            />
            <Route
              path="/verifycation"
              element={
                <PublicRoute redirectTo="/" component={<Verifycation />} />
              }
            />
            <Route
              path="/login"
              element={<PublicRoute redirectTo="/" component={<Login />} />}
            />
            <Route path="/" element={<SharedLayout />}>
              <Route
                path="/cycles"
                element={
                  <PrivatRoute redirectTo="/login" component={<Cycles />} />
                }
              ></Route>
              <Route
                path="/"
                element={
                  <PrivatRoute redirectTo="/login" component={<Cycles />} />
                }
              ></Route>
              <Route
                path="*"
                element={
                  <PrivatRoute redirectTo="/login" component={<Cycles />} />
                }
              ></Route>
            </Route>
          </Routes>
        </>
        {/* )} */}
      </ThemeProvider>
    </>
  );
};
