import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { ConfigProvider } from './contexts/ConfigContex';
import { UserContextProvider } from './contexts/UserContext';
import { ToastContainer } from 'react-toastify';

import { BrowserRouter } from 'react-router-dom';



import axios from 'axios';
import './index.css';


import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = import.meta.env.VITE_APIENDPOINT || "https://mapaverde-api-production.up.railway.app/api";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
        <UserContextProvider>
          <App />
          <ToastContainer theme='dark' position='bottom-right' />
          <LoadingSpinner />
        </UserContextProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)
