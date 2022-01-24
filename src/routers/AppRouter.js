import React from 'react';
import { Routes, Route,BrowserRouter} from "react-router-dom";

//importing components for the creation of the router

import { LoginScreen } from '../Components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </BrowserRouter>;
};