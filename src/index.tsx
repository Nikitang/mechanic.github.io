import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <HashRouter>
        <App />
        <ToastContainer autoClose={3000} />
    </HashRouter>
);
