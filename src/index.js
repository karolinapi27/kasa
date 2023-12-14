import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.scss';
import Router from './Router/Router.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router />
    
  </React.StrictMode>
);