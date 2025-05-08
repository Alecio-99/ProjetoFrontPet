import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import { ROUTES } from '../config/routes';

// Importando páginas
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Plans from '../pages/Plans';
import Scheduling from '../pages/Scheduling';
import AdminPanel from '../pages/AdminPanel';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.PLANS} element={<Plans />} />
      <Route
        path={ROUTES.SCHEDULING}
        element={
          <PrivateRoute>
            <Scheduling />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES.ADMIN}
        element={
          <PrivateRoute>
            <AdminPanel />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes; 