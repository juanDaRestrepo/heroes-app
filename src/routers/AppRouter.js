import React from 'react';
import { Routes, Route,BrowserRouter} from "react-router-dom";

//importing components for the creation of the router

import { LoginScreen } from '../Components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  return <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>        
                        
                    } 
                />
                <Route path="/*" element={
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>
                        
                        } 
                />
            </Routes>
        </BrowserRouter>;
};