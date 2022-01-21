import React from 'react';
import { Routes, Route,BrowserRouter} from "react-router-dom";
import {Navbar} from "../Components/ui/Navbar";

//importing components for the creation of the router
import { DcScreen } from '../Components/dc/DcScreen';
import { LoginScreen } from '../Components/login/LoginScreen';
import { MarvelScreen } from '../Components/marvel/MarvelScreen';
import { SearchScreen } from '../Components/search/SearchScreen';

export const AppRouter = () => {
  return <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MarvelScreen />} />
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DcScreen />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path="/login" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>;
};