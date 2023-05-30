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

import { refreshUser } from 'redux/authOperations';
import { theme } from 'theme';
import { getIsLoading } from 'redux/authSelector';

import AppBar from './appbar/appbar';
import Register from './authComponents/register/register';
import Verifycation from './authComponents/verifycation/verification';
import Login from './authComponents/login/login';
import HomePage from './homePage/homePage';
import AsideMenu from './asideMenu/asideMenu';
import FuterPage from './futerPage/futerPage';
import SettingsPage from './settings/settingsPage';
import UserSettingPage from './settings/userSetting/userSetting';
import GenSettingPage from './settings/genSetting/genSetting';
import GlobalSettingPage from './settings/globalSetting/globalSetting';
import AddCyclesPage from './cycles/addCycles/addCycles';
import CyclesPage from './cycles/cycles';
import MonthsReportPage from './cycles/monthsreport/monthsreport';
import LastMonthReportPage from './cycles/lastmonthreport/lastmonthreport';

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
        <AppBar />
        <PrimaryScreenContainer>
          <Routes>
            <Route path="/" component={<HomePage />}>
              <Route
                path="/register"
                element={
                  <PublicRoute redirectTo="/" component={<Register />} />
                }
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
              <Route path="*" element={<HomePage />} />
              <Route
                index
                path="/"
                element={
                  <PrivatRoute redirectTo="/login" component={<AsideMenu />} />
                }
              ></Route>
              <Route path="/settings" element={<SettingsPage />}>
                <Route
                  index
                  path="/settings/user"
                  element={<UserSettingPage />}
                />
                <Route
                  path="/settings/generator"
                  element={<GenSettingPage />}
                />
                <Route
                  path="/settings/global"
                  element={<GlobalSettingPage />}
                />
              </Route>
              <Route path="/cycles" element={<CyclesPage />}>
                <Route path="/cycles/add" element={<AddCyclesPage />} />
                <Route
                  path="/cycles/lastmonthreport"
                  element={<LastMonthReportPage />}
                />
                <Route
                  path="/cycles/monthsreport"
                  element={<MonthsReportPage />}
                />
              </Route>
            </Route>
          </Routes>
          <FuterPage />
        </PrimaryScreenContainer>
      </ThemeProvider>
    </>
  );
};
