import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClientContextProvider } from '../src/Context/ClientContext'
import { AuthContextProvider } from './Context/AuthContext';
import "./i18n.js";
import { FormContextProvider } from "./Context/formContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <AuthContextProvider>
    <ClientContextProvider>
      <FormContextProvider>
    <Suspense fallback="loading">
      <App />
    </Suspense>
    </FormContextProvider>
    </ClientContextProvider>
    </AuthContextProvider>
  //</React.StrictMode>
);


