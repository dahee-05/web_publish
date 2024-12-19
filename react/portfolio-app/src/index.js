import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppPotofolio from './component/potofolio/AppPotofolio.jsx';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.querySelector('body'));
root.render(
  <React.StrictMode>
    <AppPotofolio />
  </React.StrictMode>
);

