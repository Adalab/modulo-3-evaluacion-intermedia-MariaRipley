import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/main.scss';
import App from './components/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
