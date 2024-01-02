import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'semantic-ui-css/semantic.min.css';

import App from './pages/app'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
