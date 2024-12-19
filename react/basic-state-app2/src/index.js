import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import AppCounter from './components/counter/AppCounter.jsx';
// import AppBestSeller from './components/yes24/AppBestSeller.jsx';
import AppBestSeller2 from './components/yes24_2/AppBestSeller.jsx';
// import AppAirbnb from './components/airbnb/AppAirbnb.jsx';
// import AppOlive from './components/olive/AppOlive.jsx';
// import AppAladin from './components/aladin/AppAladin.jsx';
// import AppForm from './components/form/AppForm.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppBestSeller2 />
  </React.StrictMode>
);
