import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppBar from './appbar/appbar';
import { PublicRoute } from './PublicRoute';
import { PrivatRoute } from './PrivatRoute';
import Register from './register/register';
import Login from './login/login';
import Cycles from './cycles/cycles';
import Verifycation from './verifycation/verification';

import operations from 'redux/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.refreshUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute
              redirectTo="/cycles/month"
              component={<div>start page</div>}
            />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/cycles/month" component={<Register />} />
          }
        />
        <Route
          path="/verifycation"
          element={
            <PublicRoute
              redirectTo="/cycles/month"
              component={<Verifycation />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/cycles/month" component={<Login />} />
          }
        />
        <Route
          path="/cycles"
          element={<PrivatRoute redirectTo="/login" component={<Cycles />} />}
        />
      </Routes>
    </>
  );
};
