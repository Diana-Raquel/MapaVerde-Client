import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { ConfigProvider } from './contexts/ConfigContex';

import { BrowserRouter } from 'react-router-dom';

import './index.css';

import axios from 'axios';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = import.meta.env.VITE_APIENDPOINT || "http://localhost:3500/api";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <ConfigProvider>
      <App />
      <ToastContainer theme='dark' position='bottom-right' />
      <LoadingSpinner />
    </ConfigProvider>
   </BrowserRouter>
  </React.StrictMode>
)
