import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClientContextProvider } from '../src/Context/ClientContext'
import { AuthContextProvider } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <ClientContextProvider>
    <App />
    </ClientContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


