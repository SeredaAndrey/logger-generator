import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IntlProvider } from 'react-intl';

import { PublicRoute } from './PublicRoute';
import { PrivatRoute } from './PrivatRoute';

import { RotatingLines } from 'react-loader-spinner';
import { PrimaryScreenContainer, SpinnerContainer } from './AppStyled';

import { refreshUser } from 'redux/authOperations';
import { theme } from 'theme';
import { getIsLoading, getUserLanguage } from 'redux/authSelector';

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
import AddCyclesPage from './cycles/workingCycle/addCycles/addCycles';
import CyclesPage from './cycles/cycles';
import GeneralSettingPage from './settings/generalSetting/generalSetting';
import WorkingReportPage from './cycles/workingreport/workingreport';
import PatchCyclesPage from './cycles/workingCycle/patchCycles/patchCycles';

import { LOCALES } from 'i18n/locales';
import { messages } from 'i18n/messages';
import { getSettingIsLoading } from 'redux/settingsSelector';
import { getCycleIsLoading } from 'redux/cycleSelector';

export const App = () => {
  const dispatch = useDispatch();
  const isAuthLoading = useSelector(getIsLoading);
  const isSettingLoading = useSelector(getSettingIsLoading);
  const isCycleLoading = useSelector(getCycleIsLoading);
  const language = useSelector(getUserLanguage);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // console.log(language);
  // console.dir(IntlProvider);
  const locales = () => {
    switch (language) {
      case 'en':
        return LOCALES.ENGLISH;
      case 'ru':
        return LOCALES.RUSSIAN;
      case 'ua':
        return LOCALES.UKRAINIAN;
      default:
        return LOCALES.ENGLISH;
    }
  };

  return (
    <>
      <IntlProvider
        messages={messages[locales()]}
        locale={locales()}
        defaultLocale={LOCALES.ENGLISH}
      >
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
          {(isAuthLoading || isSettingLoading || isCycleLoading) && (
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
                    <PrivatRoute
                      redirectTo="/login"
                      component={<AsideMenu />}
                    />
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
                    element={<GeneralSettingPage />}
                  />
                </Route>
                <Route path="/cycles" element={<CyclesPage />}>
                  <Route path="/cycles/add" element={<AddCyclesPage />} />
                  <Route
                    path="/cycles/workingreport"
                    element={<WorkingReportPage />}
                  />
                  <Route
                    path="/cycles/patch/:id"
                    element={<PatchCyclesPage />}
                  />
                </Route>
              </Route>
            </Routes>
          </PrimaryScreenContainer>
          <FuterPage />
        </ThemeProvider>
      </IntlProvider>
    </>
  );
};
