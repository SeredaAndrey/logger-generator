import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PublicRoute } from './PublicRoute';
import { PrivatRoute } from './PrivatRoute';

import { RotatingLines } from 'react-loader-spinner';
import { PrimaryScreenContainer, SpinnerContainer } from './AppStyled';

import AppBar from './appbar/appbar';
import Register from './register/register';
import Verifycation from './verifycation/verification';
import Login from './login/login';
import SharedLayout from './Shared/shared';
import HomePage from './homePage/homePage';
import AsideMenu from './asideMenu/asideMenu';
import FuterPage from './futerPage/futerPage';

import { refreshUser } from 'redux/authOperations';
import { theme } from 'theme';
import { getIsLoading } from 'redux/authSelector';

// const Register = lazy(() => import('./register/register'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {isLoading && (
          <SpinnerContainer>
            <RotatingLines
              strokeColor="blue"
              strokeWidth="4"
              animationDuration="2"
              width="150"
              visible={true}
            />
          </SpinnerContainer>
        )}

        <PrimaryScreenContainer>
          <AppBar />
          <AsideMenu />
          <Routes>
            <Route
              path="/register"
              element={
                <PublicRoute redirectTo="/home" component={<Register />} />
              }
            />
            <Route
              path="/verifycation"
              element={
                <PublicRoute redirectTo="/home" component={<Verifycation />} />
              }
            />
            <Route
              path="/login"
              element={<PublicRoute redirectTo="/home" component={<Login />} />}
            />
            <Route path="/" element={<SharedLayout />}>
              <Route
                index
                path="/home"
                element={
                  <PrivatRoute redirectTo="/login" component={<HomePage />} />
                }
              >
                {/* <Route
                  path="/usersetting"
                  // element={<div>user setting</div>}
                ></Route> */}
              </Route>
              <Route
                path="/"
                element={
                  <PrivatRoute redirectTo="/login" component={<HomePage />} />
                }
              ></Route>
              <Route
                path="*"
                element={
                  <PrivatRoute redirectTo="/login" component={<HomePage />} />
                }
              ></Route>
            </Route>
          </Routes>
          <FuterPage />
        </PrimaryScreenContainer>
      </ThemeProvider>
    </>
  );
};
