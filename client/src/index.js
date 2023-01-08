import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { RandomProvider } from './context/RandomContext';
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <RandomProvider>
        <App />
    </RandomProvider>
</BrowserRouter>
);