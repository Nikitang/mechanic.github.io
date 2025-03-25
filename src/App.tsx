import React, { FC } from 'react';

import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CardInfoPage from './pages/CardInfoPage';
import Login from './pages/Login';

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="" element={<HomePage />} />
                <Route path="card/:id" element={<CardInfoPage />} />
            </Route>
            <Route path="login" element={<Login />} />
        </Routes>
    );
};

export default App;
