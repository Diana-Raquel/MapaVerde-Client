import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { ConfigProvider } from './contexts/ConfigContex';
import { UserContexProvider } from './contexts/UserContext';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css';
import "react-toastify/dist/ReactToastify.css";





axios.defaults.baseURL = import.meta.env.VITE_APIENDPOINT || "https://mapaverde-api-production.up.railway.app/api";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
        <UserContexProvider>
          <App />
          <ToastContainer theme='dark' position='bottom-right' />
          <LoadingSpinner />
        </UserContexProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)
