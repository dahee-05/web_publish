import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import AppAirbnb from './component/airbnb/AppAirbnb.jsx';
// import AppAvatar from './component/avatar/AppAvatar.jsx';
// import AppCounter from './component/counter/AppCounter.jsx';
import AppBestSeller from './component/yes24/AppBestSeller.jsx';
// import AppOlive from './component/olive/AppOlive.jsx';
// import AppOlive from './component/olive/AppOlive.jsx';
// import AppAladin from './component/aladin/AppAladin.jsx';
// import AppAladin from './component/aladin2/AppAladin2.jsx';
// import AppForm from './component/form/AppForm.jsx';
// import AppRouter from './component/router/AppRouter.jsx';
// import AppRouter2 from './component/router2/AppRouter2.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppBestSeller />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
