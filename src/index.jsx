import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { firebaseConfig } from './config/firebase';

firebaseConfig();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
