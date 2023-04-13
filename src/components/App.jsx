import { Route, Routes } from 'react-router-dom';
import AppBar from './appbar/appbar';
import { PublicRoute } from './PublicRoute';
import { PrivatRoute } from './PrivatRoute';
import Register from './register/register';
import Login from './login/login';
import Cycles from './cycles/cycles';
import Verifycation from './verifycation/verification';

export const App = () => {
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
