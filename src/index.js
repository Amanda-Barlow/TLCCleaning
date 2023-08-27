import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Logo from './components/Logo';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Logo />
      <NavBar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

